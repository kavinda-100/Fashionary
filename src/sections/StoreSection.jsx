import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import { DataContext } from "../contexts/DataProvider";

const StoreSection = ({URL}) => {
  const { productData, category } = useContext(DataContext);

  const filteredProducts = productData.filter((product) => {
    return product.category === category;
  });

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
        {!filteredProducts && (
          <p className="text-xl font-bold text-gray-500 capitalize">
            Loading...
          </p>
        )}
        {filteredProducts &&
          filteredProducts.map((product) => {
            return <ProductCard key={product.id} product={product}  url={URL}/>;
          })}
      </section>
      <section>
        {filteredProducts.length === 0 && (
          <p className="text-xl font-bold text-gray-500 capitalize text-center">
            No products found in this category
          </p>
        )}
      </section>
    </>
  );
};

export default StoreSection;
