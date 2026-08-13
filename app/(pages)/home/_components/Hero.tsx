'use client'
import CountUp from "@/components/ui/CountUp"
import Star from '@/public/assets/Images/home/star.svg'
import Fire from '@/public/assets/Images/home/fire.svg'
import Tic from '@/public/assets/Images/home/tic.svg'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { HeroRegular, Italic } from "../../../../components/Styles/StyleClasses"
import Link from "next/link"
import DarkVeil from "@/components/DarkVeil"

import HeroImg from '@/public/assets/Images/home/home-bg.png'
import Threads from "@/components/Threads"
import FloatingLines from "@/components/FloatingLines"
import Antigravity from "@/components/Antigravity"
import Particles from "@/components/Particles"

function Hero() {
  return (
    <>
      <section className="relative min-h-full md:min-h-screen pt-20 -mt-20">
        <div className="absolute inset-0 -z-10">
          {/* <Image
            src={HeroImg}
            alt="Technology"
            className="h-full object-cover"
            fill
          /> */}
          <div className="h-full opacity-80">
            {/* <FloatingLines /> */}
            {/* <DarkVeil
              hueShift={24}
              noiseIntensity={0.015}
              scanlineIntensity={0}
              speed={0.5}
              scanlineFrequency={0}
              warpAmount={0}
            /> */}
            {/* <Threads
              color={[0.93, 0.26, 0.00]}
              enableMouseInteraction={true}
            /> */}
            {/* <Antigravity
             color="#ee4200"
            /> */}
            <Particles
              particleCount={260}
              particleSpread={12}
              speed={0.1}
              particleColors={["#0212f2", "#0212f2", "#0212f2"]}
              alphaParticles={false}
              particleBaseSize={60}
              sizeRandomness={1}
              cameraDistance={11}
              disableRotation={false}
            />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col px-10 pt-30">
          <div className="-space-y-3 md:-space-y-8">
            <h1 className={`ml-12 ${Italic}`}>
              Technology
            </h1>
            <h4 className={HeroRegular}>that turns vision</h4>
            <div className="text-5xl lg:text-[62px] ml-20 lg:ml-35 font-light">
              <div className="flex flex-row gap-2 sm:2xl md:gap-4 text-3xl md:text-[62px] items-baseline md:-mt-7">
                into
                <h3 className={Italic}>Impact</h3>
                <div className="bg-chart-1 rounded-full size-2 md:size-4 mt-5" />
              </div>
            </div>
          </div>
          <div className="flex justify-center text-xs md:text-lg">
            <p className="text-center font-light max-w-lg md:w-2xl">We design technology that empowers businesses to innovate, evolve and lead with purpose, helping them to stay ahead and create real value.</p>
          </div>
        </div>
        <div>

          {/* Counter + Button */}
          <div className="py-10 lg:py-6  flex items-center justify-center flex-col lg:flex-row gap-8 lg:gap-6 px-4">
            <div className="flex justify-center items-center gap-2 md:gap-6">
              <div className="flex items-center justify-center">
                <div className="rounded-full bg-linear-[-90deg,white_5%,#D3E2FF] flex p-2 md:py-5 md:px-5 flex-col">
                  <div className="text-xs md:text-[14px] font-bold">
                    <CountUp
                      from={0}
                      to={10}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />+
                  </div>
                </div>
                <div className="relative -top-4 md:-top-6 -left-5">
                  <Image src={Star} className="max-w-2xl md:size-6" alt="Star Icon" />
                </div>
                <div className="font-light text-xs md:text-sm">
                  <div>Years of<br />Excellence</div>
                </div>
              </div>
              <div className="flex items-center lg:justify-center justify-start lg:-ml-3">
                <div className="rounded-full bg-linear-[-90deg,white_5%,#D3E2FF] flex p-2 md:py-5 md:px-4 flex-col">
                  <div className="md:text-[14px] text-xs font-bold">
                    <CountUp
                      from={0}
                      to={95}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />%
                  </div>
                </div>
                <div className="relative -top-4 md:-top-6 -left-5">
                  <Image src={Fire} className="max-w-2xl md:size-6" alt="Fire Icon" />
                </div>
                <div >
                  <div className="font-light text-xs md:text-sm">Success<br />Rate</div>
                </div>
              </div>
              <div className="flex items-center justify-center lg:-ml-3">
                <div className="rounded-full bg-linear-[-90deg,white_5%,#D3E2FF] px-2 py-3 lg:py-5 lg:px-4 flex-col">
                  <div className="text-xs md:text-[14px] font-bold">
                    <CountUp
                      from={0}
                      to={100}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />+
                  </div>
                </div>
                <div className="relative -top-3.5 md:-top-6 -left-5">
                  <Image src={Tic} className="max-w-2xl md:size-6" alt="Tic Icon" />
                </div>
                <div >
                  <div className="font-light text-xs md:text-sm">Thriving<br />Projects</div>
                </div>
              </div>
            </div>
            <Button variant="default" className="font-sans">
              <Link href={'/contact'}>
                Let&apos;s Talk
              </Link>
            </Button>
          </div>

        </div>
      </section>
    </>
  )
}

export default Hero
