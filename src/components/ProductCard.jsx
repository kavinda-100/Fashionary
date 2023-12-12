import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../contexts/DataProvider";

const ProductCard = ({ product , url}) => {
  const { id, title, price, image, rating } = product;
  const { addToCart } = useContext(DataContext);

  return (
    <div className="w-full min-h-[350px] m-5 p-4 border border-gray-200 shadow-md">
      <div className="w-full h-[250px] hover:bg-gray-50">
        <img
          className="w-full h-full object-contain cursor-pointer"
          src={image}
          alt={title}
          height={"250px"}
        />
      </div>

      <div className="w-full h-[100px] mt-3">
        <h1 className="text-xl font-bold">
          {title.length > 26 ? title.slice(0, 25) + "..." : title}
        </h1>
        <p className="text-lg font-bold text-gray-500">${price}</p>
        <div className="flex gap-4 mt-2">
          <p className="text-lg font-bold text-lite-secondary">⭐ {rating.rate}</p>
          <p className="text-lg font-bold text-gray-500">(+ {rating.count}) Sold</p>
        </div>
        <div className="flex gap-6 mt-4">
          <Link 
          to={`${url}/${id}`}
          className="text-black px-4 py-2 rounded-md bg-lite-secondary font-semibold leading-normal hover:bg-yellow-300 hover:text-slate-gray">
            View Product
          </Link>
          <button 
          onClick={() => addToCart(product, id)}
          className="text-black px-4 py-2 rounded-md bg-lite-secondary font-semibold leading-normal  hover:bg-yellow-300 hover:text-slate-gray">
            Add to Cart
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
