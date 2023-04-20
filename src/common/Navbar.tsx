import { useState } from "react";
import { NavLink } from "react-router-dom";
import { clsx } from "clsx";

import { AiOutlineSearch } from "react-icons/ai";
import { BsCart2, BsFillPersonFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

import Container from "../common/Container";

const Navbar: React.FC = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

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
            `${isToggled ? "left-0" : "-left-[250px]"} bottom-0 top-0 `,
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
            <BsCart2 />
          </button>
        </div>

        {/* btn-container */}
      </Container>
    </nav>
  );
};

export default Navbar;
