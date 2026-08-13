import Image from "next/image";
import type { JSX } from "react";

export default function FounderSection(): JSX.Element {
  return (
    <section className="relative bg-white py-12 overflow-visible max-[321px]:hidden">
      <div className="relative max-w-5xl mx-auto px-2 md:px-0 lg:px-0 ">

         {/* RIGHT MOST BLUE OUTLINE */}
   <div
  className="
    absolute top-10 hidden md:block
    z-0 pointer-events-none
    -right-6       
    md:right-[-50px]    
    lg:-right-6 
    h-380    
  "
  style={{
    height: 380,
    width: "50%",
    maxWidth: "960px",
    borderRadius: 40,
    borderTop: "1px solid #0B5CFF",
    borderRight: "1px solid #0B5CFF",
    borderBottom: "1px solid #0B5CFF",
    maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
    WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
  }}
>


           <div
            className="absolute bottom-0 left-0 w-full"
            style={{
              height: "18%", // sirf thoda sa end fade
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0) 0%, white 100%)",
            }}
          />
        </div>


      <div
  className="
    relative z-10
    bg-transparent md:bg-[#0B5CFF]
    rounded-[10px] md:rounded-[40px]
    h-[160px] md:h-[280px] lg:h-[320px] xl:h-[350px]
    md:w-[650px] lg:w-[752px] xl:w-[976px]
    px-2 md:px-1 lg:px-10 xl:px-16
    flex items-center gap-12 md:gap-2 lg:gap-12 overflow-visible
    md:-ml-10
    lg:ml-0
  "
>



      <div
  className="
    absolute left-0 top-0 h-full
    hidden md:block
    md:w-[115px] lg:w-[210px] xl:w-[220px]
    bg-white z-0 rounded-l-[40px]
  "
/>

{/* MOBILE ONLY half blue background on right side */}
<div
  className="
    absolute top-0 right-0
    h-full
    w-6/7
    bg-[#0B5CFF]
    rounded-r-[10px]
    
    z-0 
  "
/>


{/* SR-1 IMAGE */}
<div
  className="
    relative z-10
    w-[150px] h-[200px]           /* MOBILE */
    -left-3 mt-[-10px]

    md:w-[290px] md:h-[340px]     /* TABLET */
    md:left-[-5px] md:mt-[-14px]

    lg:w-[350px] lg:h-[420px]     /* LAPTOP */
    lg:mt-[-33px]

    xl:w-[380px] xl:h-[460px] xl:mt-[-14px]   /* DESKTOP */
    shrink-0
  "
>
  <Image
    src="/SR-1.svg"
    alt="Founder"
    fill
    className="object-contain rounded-[40px] mt-[-1px] xl:mt-[-10px]"
  />


{/* SR-2 IMAGE */}
<div
  className="
    absolute z-20

    /* MOBILE */
    w-[100px] h-[170px]
    top-[30px] right-[-30px]

    /* TABLET */
    md:w-[190px] md:h-[250px]
    md:top-[67px] md:right-[-20px]

    /* LAPTOP */
    lg:w-[280px] lg:h-[300px]
    lg:top-[86px] lg:left-[30%]

    /* DESKTOP */
    xl:w-[300px] xl:h-[342px]
    xl:top-[70px] xl:left-[160px]
  "
>
  <Image
    src="/SR-2.svg"
    alt="Overlay"
    fill
    className="object-contain"
  />
</div>


            
          </div>

          {/* TEXT */}
   <div
  className="relative z-10 text-white mt-2 w-full max-w-[90vw] text-xs px-2 md:mt-0 md:max-w-xl md:w-auto md:px-0"
>

  <p
  className="
    font-light
    text-xs leading-tight
    ml-[-70px]        /* reset negative margin on small & medium mobiles */
    sm:w-[80vw] /* keep some width margin on small mobiles */
    sm:ml-0
    md:w-full md:ml-0 md:mt-0 md:px-5 md:leading-relaxed xl:text-lg
    sm:text-sm sm:leading-normal
    tracking-wide
  "
>
  “We work to achieve global harmony through strong values and trusted partnerships. Thank you for considering Virtuosoft, We look forward to helping your business thrive.”
</p>

<div className="mt-2 md:mt-10 text-left  relative inline-block max-w-full lg:ml-[20px]">

  <h3
    className="
      text-lg font-bold
      ml-[-70px] mt-[-4px] sm:ml-0 md:ml-0 md:px-5
      sm:text-sm md:text-xl md:mt-0 lg:text-2xl xl:text-3xl lg:px-0
    "
  >
    Shoaib Rehman

  </h3>

  {/* Desktop and tablet only Founder & CEO below name */}
  <p className="hidden md:block text-white/80 mt-1 text-xs sm:text-sm md:px-5 lg:px-0 ">
    Founder & CEO
  </p>

</div>



          </div>
        </div>
      </div>
    </section>
  );
}
