import { DatabaseZap, Package, Users, type LucideIcon } from 'lucide-react';

interface EngageItem {
    icon: LucideIcon;
    title: string;
    description: string;
}

function Engage() {
    const EngageData: EngageItem[] = [
        {
            icon: Users,
            title: "Teams That Deliver",
            description: "Integrate a full team of senior developers and a project manager to accelerate your strategic roadmap. This model is ideal for long-term innovation and scaling."
        },
        {
            icon: DatabaseZap,
            title: "Offshore Powerhouse",
            description:
                "Create a dedicated extension of your tech department with top-tier, vetted engineering talent. Ideal for full project ownership and strategic growth."
        },
        {
            icon: Package,
            title: "Fixed Projects",
            description:
                "Streamline projects while reducing risks, ensuring timely delivery of top-quality results."
        }
    ];
    return (
        <div className='bg-foreground px-10 mb-10 py-20'>
            <div className='max-w-7xl mx-auto'>
                <h2 className="text-white text-3xl md:text-4xl lg:text-6xl font-extrabold tracking-tight max-w-2xl capitalize">
                    How can we engage?
                </h2>
                <div className='mt-10'>
                    {/* Cards */}
                    <div className='flex flex-wrap md:flex-nowrap gap-5'>
                        {EngageData.map((item, index) => (
                            <div
                                key={index}
                                className={`
                                bg-[#272E39] text-white p-5 md:p-6 lg:p-8
                                border-l-4 border-transparent hover:border-white/30
                                transition-all duration-300 hover:shadow-xl
                                flex flex-col
                                w-full
                                min-h-72
                                `}
                            >
                                <item.icon size={60} />
                                <h4 className="text-lg md:text-3xl tracking-wide font-medium py-4">
                                    {item.title}
                                </h4>
                                <p className="text-[#D8D8D8] text-sm md:text-[0.95em]">
                                    {item.description}
                                </p>
                                {/* <div className='my-auto'>
                                <Button variant='outline' className={'bg-transparent border-white text-accent'}>Scale with Experts</Button>
                                </div> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Engage
