import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import Container from "../../common/Container";
import useCartContext from "../../hooks/useCartContext";

import { LinksContainer } from "./LinksContainer";
import { UserMenu } from "./UserMenu";

const Navbar: React.FC = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const { orders } = useCartContext();

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
  }, []);

  return (
    <nav
      className={`shadow-lg  ${isSticky ? "sticky top-0 z-50 bg-white" : ""}`}
    >
      <Container className="flex min-h-[100px] items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <NavLink className="text-lg font-bold" to="/">
            Ecommerce
          </NavLink>

          <LinksContainer
            isToggled={isToggled}
            links={[
              { title: "home", linkTo: "/" },
              { title: "shop", linkTo: "/" },
              { title: "contact", linkTo: "/" },
            ]}
          />
        </div>

        <div className="flex gap-4">
          <button className=" lg:hidden" onClick={handleToggleNav}>
            <FaBars />
          </button>

          <UserMenu cartItems={orders} />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
