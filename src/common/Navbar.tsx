import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { AiOutlineSearch } from "react-icons/ai";
import { BsCart2, BsFillPersonFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

import Container from "../common/Container";

import CartContext from "../context/Cart/CartContext";

import { combineClasses } from "../utils";

const Navbar: React.FC = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const { cartItems } = useContext(CartContext);

  const handleToggleNav = () => {
    setIsToggled((prev) => !prev);
  };

  useEffect(() => {
    const navbar = document.querySelector("nav") as HTMLElement;

    const handleSticky = () => {
      const navbarHeight = navbar.clientHeight;

      if (window.scrollY > navbarHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleSticky);

    return () => {
      window.removeEventListener("scroll", handleSticky);
    };
  }, []);

  return (
    <nav
      className={`shadow-lg ${isSticky ? "sticky top-0 z-50 bg-white" : ""}`}
    >
      <Container className="flex min-h-[100px] items-center justify-between gap-4">
        <NavLink className="text-lg font-bold" to="/">
          Ecommerce
        </NavLink>

        {/* links-container */}
        <div
          className={combineClasses(
            "fixed z-[99] lg:static ",
            `${isToggled ? "left-0" : "-left-[250px]"} bottom-0 top-0 `,
            "h-full w-[250px] bg-blue-400 transition-all duration-300 lg:bg-white"
          )}
        >
          <ul className="lg:flex lg:space-x-4">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/">Shop</NavLink>
            </li>

            <li>
              <NavLink to="/">Contact</NavLink>
            </li>
          </ul>
        </div>
        {/* links-container */}

        {/* btn-container */}

        <div className="space-x-4">
          <button onClick={handleToggleNav} className="lg:hidden">
            <FaBars />
          </button>

          <button>
            <AiOutlineSearch />
          </button>

          <button>
            <BsFillPersonFill />
          </button>

          <NavLink
            to="/cart"
            className="relative inline-block rounded-[50%] bg-gray-300 p-2 align-middle"
          >
            <BsCart2 />

            {cartItems.length > 0 && (
              <div className="absolute inset-0 flex h-6 w-6 translate-x-full translate-y-3/4 items-center justify-center rounded-[50%] bg-red-600 text-white">
                <span className="inline-block text-[0.8rem] font-medium">
                  {cartItems.length}
                </span>
              </div>
            )}
          </NavLink>
        </div>

        {/* btn-container */}
      </Container>
    </nav>
  );
};

export default Navbar;
