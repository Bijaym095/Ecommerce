import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { clsx } from "clsx";

import { AiOutlineSearch } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { FaBars } from "react-icons/fa";

import Container from "../common/Container";

const Navbar: FC = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggleNav = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <nav className="shadow-lg">
      <Container className="flex min-h-[100px] items-center justify-between gap-4">
        <NavLink className="text-lg font-bold" to="/">
          Ecommerce
        </NavLink>

        <div
          className={clsx(
            "fixed z-[99] lg:static",
            `${isToggled ? "-left-[250px]" : "left-0"} bottom-0 top-0 `,
            "h-full w-[250px] bg-blue-400 transition-all duration-300 lg:bg-white"
          )}
        >
          {/* links-container */}

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

          {/* links-container */}
        </div>

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

          <button>
            <BiShoppingBag />
          </button>
        </div>

        {/* btn-container */}
      </Container>
    </nav>
  );
};

export default Navbar;
