import AccordionCard from "../components/AccordionCard"
import { accordionCardDetails } from "../constants"

const Contact = () => {
  

  return (
    <main className="mt-[80px] flex flex-col justify-center items-center px-[10%] md:px-[13%] lg:px-[15%] xl:px-[20%]">

    <section className="flex flex-col my-5 w-full h-auto justify-center items-center">
      <h1 className="text-4xl text-slate-gray font-poppins">Contact us</h1>
      <p className="text-xl text-slate-gray font-poppins my-5">We would love to hear from you!</p>

      <div className="flex flex-col md:flex-row justify-center items-center md:border md:border-gray-500 md:px-4 md:rounded-lg my-6">
        <input type="text" placeholder="fashionary@gmail.com" className="w-[300px] h-[50px] md:w-[500px] border-2 border-slate-gray rounded-md px-3 py-2 my-3 md:border-none outline-none text-xl font-montserrat font-semibold" />
        <button className="w-[300px] h-[50px] md:w-[60px] bg-slate-gray text-white rounded-md px-3 py-2 my-3 hover:bg-lite-base font-montserrat font-semibold">Send</button>
      </div>
    </section>

    <section className="flex flex-col justify-center items-center w-full h-auto my-5">

    <h1 className="text-4xl text-slate-gray my-5">Frequently Ask Questions</h1>

    {
      accordionCardDetails.map((item, index) => {
        return <AccordionCard key={index} question={item.question} answer={item.answer} />
      })
    }
    </section>
    
    </main>
  )
}

export default Contact