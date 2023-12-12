import { Link } from "react-router-dom"
import Category from "../sections/Category"
import Hero from "../sections/Hero"
import QuickAbout from "../sections/QuickAbout"
import Services from "../sections/Services"
import Statistics from "../sections/Statistics"
import StoreSection from "../sections/StoreSection"


const Home = () => {
  return (
    <>
      <section className="pt-[80px] py-8">
        <Hero />
      </section>
      <section className="pt-2 py-8 px-[10%] md:px-[15%] lg:px-[15%] m-auto">
        <Category />
      </section>
      <section className="pt-2 py-8 px-[10%] md:px-[15%] lg:px-[15%] m-auto">
        <StoreSection  URL='store/details'/>
      </section>  
      <section className="pt-4 py-8 px-[10%] md:px-[20%] lg:px-[20%] m-auto flex justify-center items-center">
        <Link to={`/store`}
        className="text-lg py-5 px-5 rounded-lg text-black font-palanquin font-bold leading-normal hover:bg-lite-secondary shadow-lg border border-slate-50"
        >View Our Collection</Link>
        </section>
      <section className="pt-8 py-8 px-[10%] md:px-[20%] lg:px-[20%] m-auto">
        <Statistics />
      </section>
      <section className="pt-8 py-8 m-auto px-[10%] xl:px-[15%]">
        <Services />
      </section>
      <section className="pt-8 py-8 m-auto px-[10%] xl:px-[15%]">
        <QuickAbout />
      </section>
      
    </>
  )
}

export default Home