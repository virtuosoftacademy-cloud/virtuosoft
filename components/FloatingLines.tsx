import { useCallback, useEffect, useRef, type CSSProperties } from 'react';
import {
  Scene,
  OrthographicCamera,
  WebGLRenderer,
  PlaneGeometry,
  Mesh,
  ShaderMaterial,
  Vector3,
  Vector2,
  Clock
} from 'three';

const vertexShader = `
  precision highp float;
  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;

  uniform float iTime;
  uniform vec3  iResolution;
  uniform float animationSpeed;

  uniform bool enableTop;
  uniform bool enableMiddle;
  uniform bool enableBottom;

  uniform int topLineCount;
  uniform int middleLineCount;
  uniform int bottomLineCount;

  uniform float topLineDistance;
  uniform float middleLineDistance;
  uniform float bottomLineDistance;

  uniform vec3 topWavePosition;
  uniform vec3 middleWavePosition;
  uniform vec3 bottomWavePosition;

  uniform vec2 iMouse;
  uniform bool interactive;
  uniform float bendRadius;
  uniform float bendStrength;
  uniform float bendInfluence;

  uniform bool parallax;
  uniform float parallaxStrength;
  uniform vec2 parallaxOffset;

  uniform vec3 lineGradient[8];
  uniform int lineGradientCount;

  mat2 rotate(float r) {
    return mat2(cos(r), sin(r), -sin(r), cos(r));
  }

  vec3 getLineColor(float t) {
    if (lineGradientCount <= 0) return vec3(0.8, 0.4, 1.0); // fallback

    if (lineGradientCount == 1) {
      return lineGradient[0];
    }

    float scaled = clamp(t, 0.0, 0.999) * float(lineGradientCount - 1);
    int idx = int(floor(scaled));
    float f = fract(scaled);
    int idx2 = min(idx + 1, lineGradientCount - 1);

    return mix(lineGradient[idx], lineGradient[idx2], f);
  }

  float wave(vec2 uv, float offset, vec2 screenUv, vec2 mouseUv, bool shouldBend) {
    float time = iTime * animationSpeed;

    float x_offset   = offset;
    float x_movement = time * 0.1;
    float amp        = sin(offset + time * 0.25) * 0.28;
    float y          = sin(uv.x + x_offset + x_movement) * amp;

    if (shouldBend) {
      vec2 d = screenUv - mouseUv;
      float influence = exp(-dot(d, d) * bendRadius);
      float bendOffset = (mouseUv.y - screenUv.y) * influence * bendStrength * bendInfluence;
      y += bendOffset;
    }

    float m = uv.y - y;
    return 0.022 / (abs(m) + 0.008);
  }

  void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = (2.0 * fragCoord - iResolution.xy) / iResolution.y;
    uv.y *= -1.0;

    if (parallax) {
      uv += parallaxOffset;
    }

    vec3 col = vec3(0.0);
    float alpha = 0.0;

    vec2 mouseUv = vec2(0.0);
    if (interactive) {
      mouseUv = (2.0 * iMouse - iResolution.xy) / iResolution.y;
      mouseUv.y *= -1.0;
    }

    // Bottom
    if (enableBottom) {
      for (int i = 0; i < bottomLineCount; ++i) {
        float fi = float(i);
        float t = fi / max(float(bottomLineCount - 1), 1.0);
        vec3 lineCol = getLineColor(t);

        float angle = bottomWavePosition.z * log(length(uv) + 1.0);
        vec2 ruv = uv * rotate(angle);

        float w = wave(
          ruv + vec2(bottomLineDistance * fi + bottomWavePosition.x, bottomWavePosition.y),
          1.5 + 0.22 * fi,
          uv, mouseUv, interactive
        );

        col += lineCol * w * 0.24;
        alpha = max(alpha, w * 0.9);
      }
    }

    // Middle
    if (enableMiddle) {
      for (int i = 0; i < middleLineCount; ++i) {
        float fi = float(i);
        float t = fi / max(float(middleLineCount - 1), 1.0);
        vec3 lineCol = getLineColor(t);

        float angle = middleWavePosition.z * log(length(uv) + 1.0);
        vec2 ruv = uv * rotate(angle);

        float w = wave(
          ruv + vec2(middleLineDistance * fi + middleWavePosition.x, middleWavePosition.y),
          2.0 + 0.18 * fi,
          uv, mouseUv, interactive
        );

        col += lineCol * w * 1.0;
        alpha = max(alpha, w);
      }
    }

    // Top
    if (enableTop) {
      for (int i = 0; i < topLineCount; ++i) {
        float fi = float(i);
        float t = fi / max(float(topLineCount - 1), 1.0);
        vec3 lineCol = getLineColor(t);

        float angle = topWavePosition.z * log(length(uv) + 1.0);
        vec2 ruv = uv * rotate(angle);
        ruv.x *= -1.0;

        float w = wave(
          ruv + vec2(topLineDistance * fi + topWavePosition.x, topWavePosition.y),
          1.0 + 0.24 * fi,
          uv, mouseUv, interactive
        );

        col += lineCol * w * 0.16;
        alpha = max(alpha, w * 0.75);
      }
    }

    // Final output — transparent background
    fragColor = vec4(col, clamp(alpha * 0.92, 0.0, 1.0));
  }

  void main() {
    vec4 color;
    mainImage(color, gl_FragCoord.xy);
    gl_FragColor = color;
  }
`;

const MAX_GRADIENT_STOPS = 8;

function hexToVec3(hex: string): Vector3 {
  const value = hex.trim().replace('#', '');
  let r = 255,
    g = 255,
    b = 255;

  if (value.length === 3) {
    r = parseInt(value[0] + value[0], 16);
    g = parseInt(value[1] + value[1], 16);
    b = parseInt(value[2] + value[2], 16);
  } else if (value.length === 6) {
    r = parseInt(value.slice(0, 2), 16);
    g = parseInt(value.slice(2, 4), 16);
    b = parseInt(value.slice(4, 6), 16);
  }

  return new Vector3(r / 255, g / 255, b / 255);
}

type WaveType = 'top' | 'middle' | 'bottom';

interface WavePosition {
  x: number;
  y: number;
  rotate: number;
}

export interface FloatingLinesProps {
  linesGradient?: string[];
  enabledWaves?: WaveType[];
  lineCount?: number | number[];
  lineDistance?: number | number[];
  topWavePosition?: WavePosition;
  middleWavePosition?: WavePosition;
  bottomWavePosition?: WavePosition;
  animationSpeed?: number;
  interactive?: boolean;
  bendRadius?: number;
  bendStrength?: number;
  mouseDamping?: number;
  parallax?: boolean;
  parallaxStrength?: number;
  mixBlendMode?: CSSProperties['mixBlendMode'];
}

export default function FloatingLines({
  linesGradient = ['#ff00ff', '#00ffff', '#ffffff'],
  enabledWaves = ['top', 'middle', 'bottom'],
  lineCount = [7, 9, 6],
  lineDistance = [4.5, 3.8, 6.0],
  topWavePosition = { x: 8.0, y: 0.6, rotate: -0.35 },
  middleWavePosition = { x: 4.0, y: 0.0, rotate: 0.25 },
  bottomWavePosition = { x: 1.5, y: -0.8, rotate: -0.45 },
  animationSpeed = 1.0,
  interactive = true,
  bendRadius = 4.5,
  bendStrength = -0.6,
  mouseDamping = 0.08,
  parallax = true,
  parallaxStrength = 0.18,
  mixBlendMode = 'screen'
}: FloatingLinesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetMouse = useRef(new Vector2(-1000, -1000));
  const currentMouse = useRef(new Vector2(-1000, -1000));
  const targetInfluence = useRef(0);
  const currentInfluence = useRef(0);
  const targetParallax = useRef(new Vector2(0, 0));
  const currentParallax = useRef(new Vector2(0, 0));

  const getLineCount = useCallback((type: WaveType): number => {
    if (!enabledWaves.includes(type)) return 0;
    const idx = enabledWaves.indexOf(type);
    return Array.isArray(lineCount) ? (lineCount[idx] ?? 6) : lineCount;
  }, [enabledWaves, lineCount]);

  const getLineDistance = useCallback((type: WaveType): number => {
    if (!enabledWaves.includes(type)) return 0.01;
    const idx = enabledWaves.indexOf(type);
    const val = Array.isArray(lineDistance) ? (lineDistance[idx] ?? 5) : lineDistance;
    return val * 0.01;
  }, [enabledWaves, lineDistance]);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new Scene();
    const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
    camera.position.z = 1;

    const renderer = new WebGLRenderer({
      antialias: true,
      alpha: true // ← crucial for transparency
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    containerRef.current.appendChild(renderer.domElement);

    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new Vector3() },
      animationSpeed: { value: animationSpeed },

      enableTop: { value: enabledWaves.includes('top') },
      enableMiddle: { value: enabledWaves.includes('middle') },
      enableBottom: { value: enabledWaves.includes('bottom') },

      topLineCount: { value: getLineCount('top') },
      middleLineCount: { value: getLineCount('middle') },
      bottomLineCount: { value: getLineCount('bottom') },

      topLineDistance: { value: getLineDistance('top') },
      middleLineDistance: { value: getLineDistance('middle') },
      bottomLineDistance: { value: getLineDistance('bottom') },

      topWavePosition: { value: new Vector3(topWavePosition.x, topWavePosition.y, topWavePosition.rotate) },
      middleWavePosition: {
        value: new Vector3(middleWavePosition.x, middleWavePosition.y, middleWavePosition.rotate)
      },
      bottomWavePosition: {
        value: new Vector3(bottomWavePosition.x, bottomWavePosition.y, bottomWavePosition.rotate)
      },

      iMouse: { value: new Vector2(-1000, -1000) },
      interactive: { value: interactive },
      bendRadius: { value: bendRadius },
      bendStrength: { value: bendStrength },
      bendInfluence: { value: 0 },

      parallax: { value: parallax },
      parallaxStrength: { value: parallaxStrength },
      parallaxOffset: { value: new Vector2(0, 0) },

      lineGradient: { value: Array<Vector3>(MAX_GRADIENT_STOPS).fill(new Vector3(1, 1, 1)) },
      lineGradientCount: { value: 0 }
    };

    // Load gradient
    if (linesGradient && linesGradient.length > 0) {
      const stops = linesGradient.slice(0, MAX_GRADIENT_STOPS);
      uniforms.lineGradientCount.value = stops.length;
      stops.forEach((hex, i) => {
        const c = hexToVec3(hex);
        uniforms.lineGradient.value[i].set(c.x, c.y, c.z);
      });
    }

    const material = new ShaderMaterial({ uniforms, vertexShader, fragmentShader });
    const geometry = new PlaneGeometry(2, 2);
    const mesh = new Mesh(geometry, material);
    scene.add(mesh);

    const clock = new Clock();

    const resize = () => {
      const { clientWidth: w = 1, clientHeight: h = 1 } = containerRef.current as HTMLDivElement;
      renderer.setSize(w, h, false);
      uniforms.iResolution.value.set(renderer.domElement.width, renderer.domElement.height, 1);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(containerRef.current);

    const onPointerMove = (e: PointerEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const dpr = renderer.getPixelRatio();

      targetMouse.current.set(x * dpr, (rect.height - y) * dpr);
      targetInfluence.current = 1;

      if (parallax) {
        const ox = (x - rect.width / 2) / rect.width;
        const oy = -(y - rect.height / 2) / rect.height;
        targetParallax.current.set(ox * parallaxStrength, oy * parallaxStrength);
      }
    };

    const onPointerLeave = () => {
      targetInfluence.current = 0;
    };

    if (interactive) {
      renderer.domElement.addEventListener('pointermove', onPointerMove);
      renderer.domElement.addEventListener('pointerleave', onPointerLeave);
    }

    let raf: number;
    const animate = () => {
      uniforms.iTime.value = clock.getElapsedTime();

      if (interactive) {
        currentMouse.current.lerp(targetMouse.current, mouseDamping);
        uniforms.iMouse.value.copy(currentMouse.current);

        currentInfluence.current += (targetInfluence.current - currentInfluence.current) * mouseDamping;
        uniforms.bendInfluence.value = currentInfluence.current;
      }

      if (parallax) {
        currentParallax.current.lerp(targetParallax.current, mouseDamping);
        uniforms.parallaxOffset.value.copy(currentParallax.current);
      }

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      if (interactive) {
        renderer.domElement.removeEventListener('pointermove', onPointerMove);
        renderer.domElement.removeEventListener('pointerleave', onPointerLeave);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [
    linesGradient,
    enabledWaves,
    lineCount,
    lineDistance,
    getLineCount,
    getLineDistance,
    topWavePosition,
    middleWavePosition,
    bottomWavePosition,
    animationSpeed,
    interactive,
    bendRadius,
    bendStrength,
    mouseDamping,
    parallax,
    parallaxStrength
  ]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative overflow-hidden"
      style={{ mixBlendMode, background: 'transparent' }}
    />
  );
}
