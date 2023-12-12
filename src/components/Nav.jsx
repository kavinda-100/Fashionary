import { NavLink } from "react-router-dom";
import { NavLogo } from "../assets/images";
import { navLinks } from "../constants";
import { Cart } from "../assets/icons";
import { hamburger, CrossIcon } from "../assets/icons";
import Button from "./Button";
import { useState } from "react";
import MyCart from "./MyCart";
import { useContext } from "react";
import { DataContext } from "../contexts/DataProvider";

const Nav = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isCartClicked, setIsCartClicked] = useState(false);
  const { itemAmount } = useContext(DataContext);

  return (
    <>
      <nav className="fixed top-0 w-full h-[80px] bg-[#f7faf9] flex justify-evenly items-center m-auto">
        <div className="w-14 h-14">
          <img src={NavLogo} alt="logo" className="rounded-full" />
        </div>

        <div className="hidden md:flex-row md:gap-5 md:ml-14 md:block font-bold leading-normal text-2xl font-poppins">
          {navLinks.map((link) => {
            return (
              <NavLink key={link.label} to={link.href} className="mr-10 hover:text-gray-500">
                {link.label}
              </NavLink>
            );
          })}
        </div>

        <div className="flex flex-row justify-evenly gap-5 text-xl items-center cursor-pointer font-semibold">
          <p className={`relative flex justify-center items-center gap-2 ${isCartClicked ? `bg-lite-base p-4` : `bg-primary`}`}
          onClick={() => setIsCartClicked(!isCartClicked)}
          >
            Cart
            <span className="relative">
            <img src={Cart} className="w-5 h-5" />
            <span className={`absolute -top-4 left-3 text-white font-montserrat rounded-full px-1 ${itemAmount <= 0 ? `bg-lite-base` : `bg-red-500`}`}>{itemAmount}</span>
            </span>
          </p>

          <Button text="SingOut" />

          <img
            src={isClicked ? CrossIcon : hamburger}
            alt="menu"
            width={24}
            height={24}
            className="block md:hidden"
            onClick={() => setIsClicked(!isClicked)}
          />
        </div>

        {isClicked && (
        <section className="absolute top-[80px] z-10 flex flex-row w-full h-auto">
          <div className="w-full bg-[#f7faf9] flex flex-col justify-center items-center py-10">
            <div className="flex flex-col gap-10 font-bold leading-normal text-2xl transition-all duration-300 ease-in">
              {navLinks.map((link) => {
                return (
                  <NavLink 
                  key={link.label}
                  to={link.href} className="mr-10 hover:text-gray-500"
                  onClick={() => setIsClicked(!isClicked)}
                  >
                    {link.label}
                  </NavLink>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {
        isCartClicked && <MyCart />
      }
      </nav>

      
    </>
  );
};

export default Nav;
