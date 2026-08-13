import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <section className="relative bg-white pt-40 md:pt-50 overflow-hidden">
        {/* Text */}
        <div className="mx-auto max-w-5xl text-center px-4 md:px-6 relative z-20">
          <h1 className="text-3xl md:text-[80px] font-light leading-tight text-[#2B3439]">
            Where innovation meets <br />
            vision to unlock <br />
            <span className="block mt-2 py-2 text-6xl lg:text-[92px] font-black italic text-gray-900">
              Potential
            </span>
          </h1>

          <p className="mt-6 text-gray-500 max-w-3xl mx-auto text-sm sm:text-base">
            At Virtuosoft, we turn big ideas into scalable tech that helps businesses
            move fast and stay ahead. It’s not just about saving time or cutting costs,
            we create smooth experiences and open doors that uplift communities,
            driving an impact that goes way beyond technology.
          </p>
        </div>

        {/* IMAGE COLLAGE */}
        <div
          className="
            relative z-10 mx-auto mt-16 md:mt-24
            max-w-full lg:max-w-3xl xl:max-w-4xl
            px-4 md:px-6
            h-[360px] sm:h-[450px] md:h-[480px] lg:h-[550px] xl:h-[550px]
          "
        >
      <div
  className="
    absolute z-0 bg-blue-600

    /* SMALL MOBILES (default) */
    top-12
    left-[11%] right-[11%]
    h-[45%]

    /* MEDIUM / LARGE MOBILES */
    sm:top-10
    sm:left-[9%] sm:right-[9%]
    sm:h-[55%]

    /* TABLET (UNCHANGED) */
    md:top-8
    md:left-[8%] md:right-[8%]
    md:h-[75%]

    /* DESKTOP (UNCHANGED) */
    lg:top-0
    lg:left-0 lg:right-0
    lg:h-[85%]

    xl:h-full
  "
/>






          {/* Main Image */}
        <div
  className="
    absolute left-1/2 z-30 -translate-x-1/2

    /* MEDIUM + LARGE MOBILES (DEFAULT) */
    left-1
    top-[-10px]
    w-[50%]

    /* SMALL MOBILES ONLY */
    max-[375px]:top-[6%]
    max-[375px]:w-[50%]

    /* TABLET */
    md:top-[-60px]
    md:w-[50%]

    /* DESKTOP */
    lg:w-[60%]
    xl:w-[54%]
  "

>

            <Image
              src="/pexels-kampus-8353839.svg"
              alt="Team"
              width={900}
              height={500}
              className="grayscale w-full h-auto"
              priority
            />
          </div>

          {/* Left Image */}
          <div
  className="
    absolute z-40 origin-left

    /* MEDIUM + LARGE MOBILES */
    left-[10px]
    top-[-20px]
    scale-[0.34]

    /* SMALL MOBILES */
    max-[375px]:left-[5px]
    max-[375px]:top-[5%]
    max-[375px]:scale-[0.35]

    /* TABLET */
    md:left-[20px]
    md:top-[7%]
    md:scale-[0.61]

    /* DESKTOP */
    lg:left-[-60px]
    lg:top-[15%]
    lg:scale-[0.75]

    xl:left-[-50px]
    xl:top-[20%]
    xl:scale-[0.9]
  ">
            <Image
              src="/pexels-yankrukov-7640782.svg"
              alt="Office work"
              width={420}
              height={300}
              className="grayscale shadow-xl"
            />
          </div>

          {/* Center Bottom */}
          <div
            className="
    absolute z-10 -translate-x-1/2

    /* MEDIUM + LARGE MOBILES */
    left-1/2
    top-[30%]
    w-[50%]

    /* SMALL MOBILES */
    max-[375px]:top-[34%]
    max-[375px]:w-[52%]

    /* TABLET */
    md:left-1/2
    md:bottom-[40px]
    md:top-[37%]
    md:w-[50%]

    /* DESKTOP */
    lg:top-[40%]
    lg:w-[60%]

    xl:top-[45%]
  "
>
            <Image
              src="/pexels-rdne-7491147.svg"
              alt="Workspace"
              width={520}
              height={360}
              className="grayscale shadow-xl w-full h-auto"
            />
          </div>

          {/* Right Image */}
          <div
           className="
  absolute z-20 origin-left

    /* MEDIUM + LARGE MOBILES */
    right-[-250px]
    top-[2%]
    scale-[0.35]

    /* SMALL MOBILES */
    max-[375px]:right-[-260px]
    max-[375px]:top-[-2px]
    max-[375px]:scale-[0.32]

  md:right-[-130px]
  md:top-[15%]
  md:scale-[0.60]

  lg:right-[-150px]
  lg:top-[24%]
  lg:scale-[0.85]

  xl:right-[-100px]
  xl:top-[30%]
  xl:scale-100

  origin-left
"

          >
            <Image
              src="/pexels-yankrukov-7793999-1.svg"
              alt="Meeting"
              width={400}
              height={300}
              className="grayscale shadow-xl"
            />
          </div>
        </div>
      </section>
  )
}

export default Hero
