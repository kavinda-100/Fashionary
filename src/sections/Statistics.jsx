import { statistics } from "../constants"

const Statistics = () => {
  return (
    <section className="w-auto h-auto">

    <div className="flex flex-row justify-center items-center gap-9">
        {statistics.map(({value, label}) => {
            return (
                <div className="flex flex-col mr-9" key={label}>
                    <h1 className="text-6xl font-bold font-palanquin text-gray-700 leading-normal">{value}</h1>
                    <p className="text-2xl font-semibold font-montserrat text-slate-500 leading-normal">{label}</p>
                </div>
            )
        })
        }
    </div>

    </section>
  )
}

export default Statistics