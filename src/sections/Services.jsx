import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"

const Services = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-9 mt-0 m-auto">
    {
        services.map(({imgURL, label, subtext}, index) => (
            <ServiceCard key={index} imgURL={imgURL} label={label} subtext={subtext}/>
        ))
    }
    </div>
  )
}

export default Services
