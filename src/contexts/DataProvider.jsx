import { createContext, useEffect } from "react";
import { useState } from "react";
import Axios from "axios";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [category, setCategory] = useState("jewelery");
  const [productData, setProductData] = useState([]);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [itemAmount, setItemAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await Axios.get(`https://fakestoreapi.com/products`);
      setProductData(data.data);
    };
    fetchProducts();

    return () => {
      fetchProducts();
    };
  }, []);

  // Amount of items in cart
  useEffect(() => {
    const amount = cart.reduce((acc, item) => {
      return acc + item.amount;
    }, 0);
    setItemAmount(amount);
  }, [cart]);

  // Total Price
  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      return acc + item.amount * item.price;
    }, 0);
    setTotalPrice(total.toFixed(2));
  }, [cart]);

  // Cart Functions ----------------------------------------
  // add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    // check if item is already in cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        return item.id === id ? { ...item, amount: cartItem.amount + 1 } : item;
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // remove item from cart
  const removeItem = (id) => {
    setCart([...cart].filter((item) => item.id !== id));
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // Empty Cart
  const emptyCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // increase amount of item
  const increaseAmount = (id) => {
    const newIncreaseItem = cart.map((item) => {
      return item.id === id ? { ...item, amount: item.amount + 1 } : item;
    });
    setCart(newIncreaseItem);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // decrease amount of item
  const decreaseAmount = (id) => {
    const newDecreaseItem = cart.map((item) => {
      return item.id === id ? { ...item, amount: item.amount - 1 } : item;
    });
    setCart(newDecreaseItem.filter((item) => item.amount !== 0));
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const values = {
    category,
    setCategory,
    productData,
    cart,
    addToCart,
    removeItem,
    emptyCart,
    increaseAmount,
    decreaseAmount,
    itemAmount,
    totalPrice
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export default DataProvider;
