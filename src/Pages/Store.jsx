import Category from "../sections/Category"
import StoreSection from "../sections/StoreSection"


const Store = () => {
  return (
    <main className="w-full h-full mt-[80px]">
      <section className="pt-2 py-8 px-[10%] md:px-[15%] lg:px-[15%] m-auto">
        <Category />
      </section>
      <section className="pt-2 py-8 px-[10%] md:px-[15%] lg:px-[15%] m-auto">
        <StoreSection URL='details'/>
      </section>
    </main>
  )
}

export default Store