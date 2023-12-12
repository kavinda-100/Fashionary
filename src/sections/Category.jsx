import React from 'react'
import { categories } from '../constants'
import { useContext } from 'react'
import { DataContext } from '../contexts/DataProvider'

const Category = () => {
  const { category , setCategory } = useContext(DataContext)
  return (
    <>
    <h1 className='text-3xl font-bold text-gray-400 p-5 text-center my-4 md:my-6 mx-auto'>Categories</h1>

    <section className='flex flex-wrap'>

     {
     categories.map((categoryItem) => {
       return (
         <div className='w-auto p-2' key={categoryItem.name}>
           <div className={`w-full h-full bg-white rounded-lg shadow-md flex flex-col justify-center items-center hover:bg-slate-100 ${categoryItem.name === category ? ` border-2 border-lite-secondary` : null}`}>
             <button 
              onClick={() => setCategory(categoryItem.name)}
             className='text-2xl font-bold text-gray-800 p-5 '>{categoryItem.name}</button>
           </div>
         </div>
       )
     }
     )
     }
    </section>

    </>
  )

}
export default Category