import { Link, useParams } from "react-router-dom"
import { useContext } from "react"
import { DataContext } from "../contexts/DataProvider"

const Details = () => {
  const { id } = useParams()
  const { productData, addToCart } = useContext(DataContext)

  const products = productData.filter((item) => {
    return item.id === parseInt(id)
  })
  // console.log(products)

  return (
    <main className="group w-full h-auto px-[10%] lg:px-[15%] mt-[80px] mb-[20px]">

    {
      products.map((product) => {
        return (
          <section 
          key={product.id}
          className="flex flex-col lg:flex-row items-center justify-center gap-14">
          <div className="w-full h-auto lg:w-1/2 lg:h-1/2 p-10 justify-center items-center">
            <img 
            src={product.image} 
            alt="image" 
            width={'400px'}
            hight={'400px'}
            className="object-contain"
            />  
          </div>

          <div className="w-full h-auto lg:w-1/2 lg:h-1/2 p-5">
            <h1 className="text-3xl font-bold text-slate-gray leading-normal font-montserrat mt-4">{product.title}</h1>
            <h1 className="text-2xl font-bold font-poppins text-gray-600 mt-4">${product.price}</h1>
            <h1 className="text-2xl font-bold font-palanquin text-gray-600 mt-4">Category: <span className="text-2xl text-slate-600">{product.category}</span></h1>
            <div className="flex">
            <h3 className="text-2xl font-bold font-palanquin text-gray-600 mt-5">⭐Rating: {product.rating.rate}</h3>
            <p className="text-2xl font-bold font-palanquin text-gray-600 mt-5 ml-5">+({product.rating.count}) Sold</p>
            </div>
            <p className="text-2xl leading-normal font-poppins text-gray-600 mt-5 capitalize">{product.description}</p>
            <button 
            onClick={() => addToCart(product, product.id)}
            className="text-black p-7 bg-lite-secondary font-bold font-palanquin text-2xl mt-10 rounded-lg hover:bg-yellow-300">Add to Cart</button>
            <button className="text-black p-7 bg-lite-secondary font-bold font-palanquin text-2xl mt-10 rounded-lg hover:bg-yellow-300 ml-5">
             Buy Now
            </button>
          </div>
          </section>
        )
      })
    }
    <div className="flex items-center justify-center mt-7">
    <Link to="/store" className="text-2xl font-bold font-palanquin text-gray-600 mt-5 text-center hover:text-lite-base">Back to Store</Link></div>
      
    </main>
  )
}  

export default Details