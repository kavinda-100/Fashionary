import Button from "./Button";
import { useContext } from "react";
import { DataContext } from "../contexts/DataProvider";
import { Link } from "react-router-dom";

const MyCart = () => {
   const { cart, removeItem , emptyCart, increaseAmount, decreaseAmount, itemAmount, totalPrice} = useContext(DataContext);

  return (
    <section className="absolute top-[80px] z-20 w-full h-[90vh] flex flex-row transition-all duration-300 ease-in">
      <div className="hidden lg:block lg:w-[45%] 2xl:w-[50%] lg:bg-black lg:opacity-5"></div>

      <div className="w-full lg:w-[55%] 2xl:w-[50%] bg-primary opacity-90">
        <div className="p-5 border-t-2 border-slate-400 ">
        <div className="flex flex-row justify-between m-auto px-[10%]">
          <h1 className="text-xl text-center font-bold py-5 font-montserrat text-slate-gray"><span className="text-black font-bold">{itemAmount}</span> Items In Your Cart</h1>
          <h1 className="text-2xl text-center font-bold py-5 font-montserrat text-slate-gray">Your Cart</h1>
        </div>

          <div className="flex flex-col min-h-[500px] max-h-[550px] overflow-x-hidden overflow-y-auto scroll-smooth px-6">
          {
            cart.length > 0 ? cart.map((item) => {
              return (
                <div key={item.id} 
                className="flex flex-row justify-between items-center p-5 border-b border-slate-400 gap-x-9">
                  <div className="flex flex-row items-center w-3/4">
                    <img src={item.image} alt={item.title} className="w-24 h-24 object-contain" />
                    <div className="ml-8">
                      <Link 
                      to={`/store/details/${item.id}`}
                      className="font-semibold text-lg font-montserrat">{item.title}</Link>
                    </div>
                  </div>

                  <div className="flex flex-row items-center w-1/4">
                    <div className="flex flex-row items-center border border-slate-300 p-3 gap-3">
                      <button 
                      onClick={() => decreaseAmount(item.id)}
                      className="text-slate-600 font-bold font-montserrat text-xl hover:text-lite-base transition-all duration-300 ease-in-out">-</button>
                      <h1 className="text-sate-gray font-bold font-montserrat text-2xl">{item.amount}</h1>
                      <button
                      onClick={() => increaseAmount(item.id)} 
                      className="text-slate-600 font-bold font-montserrat text-xl hover:text-lite-base transition-all duration-300 ease-in-out">+</button>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                    <h1 className="text-slate-600 font-bold font-montserrat ml-5">${item.price}</h1>
                    <button 
                    onClick={() => removeItem(item.id)}
                    className="text-slate-900 font-bold font-montserrat ml-5 hover:text-red-600">X</button>
                    </div>
                  </div>
                </div>
              )
            }) : <h1 className="text-2xl text-center font-semibold py-5 font-montserrat">Your Cart is Empty</h1>
          }
          
            
          </div>

          <div className="w-full border-t-2 border-slate-400">

          <div className="p-10 flex justify-between items-center">

          <h1 className="text-xl text-slate-600 font-bold font-montserrat">Total $ {totalPrice}</h1>
            <Button text="Empty Cart" func={() => emptyCart()}/>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyCart;
