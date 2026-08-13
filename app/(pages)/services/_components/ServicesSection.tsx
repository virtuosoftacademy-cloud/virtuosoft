

import ServiceCard from "./ServiceCard"
import { advisoryCategory, aiCategory, cloudCategory, cyberCategory, dataServicesCategory, engineeringCategory, itCategory} from "@/app/_constant"


export default function ServicesSection() {
  return (
    <div className="space-y-6 md:space-y-8 lg:space-y-10 py-12 md:py-16">
      <ServiceCard category={aiCategory} />
      <ServiceCard category={advisoryCategory} />
      <ServiceCard category={engineeringCategory} />
      <ServiceCard category={itCategory} />
      <ServiceCard category={dataServicesCategory} />
      <ServiceCard category={cyberCategory}/>
      {/* <ServiceCard category={cloudCategory}/> */}
    </div>
  )
} 
