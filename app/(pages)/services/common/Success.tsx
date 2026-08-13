import React from 'react';

interface SuccessStat {
    number: string;
    label: string;
}

const stats: SuccessStat[] = [
    { number: "50+", label: "Startups and enterprises scaled" },
    { number: "16+", label: "Years of Digital Excellence" },
    { number: "50k", label: "Users impacted" },
];

function Success() {
    return (
        <div className='px-3 max-w-7xl mx-auto'>
            <section className="relative bg-primary/80 text-white rounded overflow-hidden text-left
      pt-[50] px-5 pb-[50]
      md:pt-[90] md:px-[60] md:pb-20
      max-md:text-center
      ">
                {/* Large Star Background */}
                <div
                    className="absolute pointer-events-none z-0 bg-contain opacity-[0.7]
          top-[-30] right-[-40] w-[260] h-[260] bg-[url('https://virtuosoft.pk/virtuosoft/wp-content/uploads/2025/11/Star-16-1.png')]
          md:top-[-10] md:right-[-5] md:w-[480] md:h-[480] md:bg-cover md:opacity-[0.85]
          "
                />

                {/* Small Star Background */}
                {/* <div
        className="absolute pointer-events-none z-10 bg-contain opacity-[0.8]
          top-[120] right-[120] w-[20] h-[20] bg-[url('https://virtuosoft.pk/virtuosoft/wp-content/uploads/2025/11/Star-17.png')]
          md:top-[250] md:right-[250] md:w-[30] md:h-[530] md:opacity-[0.9]
        "
      /> */}

                <div className="relative z-10 max-w-7xl mx-auto md:mx-0">
                    <h4 className="font-light text-3xl md:text-6xl">
                        Transforming Vision into
                    </h4>
                    <h4 className="font-bold text-3xl mt-2 md:mt-0 mb-[25] md:text-5xl md:mb-[30]">
                        Digital Success
                    </h4>
                    <a
                        href="/contact"
                        className="inline-block bg-white text-primary/80 px-[28] py-[12] rounded-[6px] font-semibold text-[14px] shadow-[0_4px_20px_rgba(0,0,0,0.15)]
          transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-[0_6px_25px_rgba(0,0,0,0.25)] hover:-translate-y-[2]
          md:px-[34] md:py-[14] md:text-[16px]
          "
                    >
                        Build What’s Next
                    </a>

                    <div className="flex flex-col gap-[30] mt-[50] items-center
          md:flex-row md:flex-wrap md:gap-[60] md:mt-[70] md:items-start
        ">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center md:text-left">
                                <h3 className="font-['Sofia_Sans',sans-serif] text-[32px] font-bold mb-[5] md:text-[42px]">
                                    {stat.number}
                                </h3>
                                <p className="text-[14px] md:text-[15px]">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Success;