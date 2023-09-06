import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import Container from "../../common/Container";
import { Button } from "../../common/Button";
import useCartContext from "../../hooks/useCartContext";

import { LinksContainer } from "./LinksContainer";
import { UserMenu } from "./UserMenu";

const Navbar: React.FC = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const { orders } = useCartContext();

  return (
    <nav className="sticky top-0 z-[99] bg-white shadow-lg">
      <Container className="flex items-center justify-between gap-4 py-6">
        <div className="flex items-center gap-6 ">
          <NavLink className="text-lg font-bold" to="/">
            Ecommerce
          </NavLink>

          <LinksContainer
            isToggled={isToggled}
            setIsToggled={setIsToggled}
            links={[
              { title: "home", linkTo: "/" },
              { title: "shop", linkTo: "/shop" },
              { title: "contact", linkTo: "/" },
            ]}
          />
        </div>

        <div className="flex gap-2">
          <Button
            className=" lg:hidden"
            size="sm"
            onClick={() => setIsToggled(true)}
          >
            <FaBars />
          </Button>

          <UserMenu cartItems={orders} />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
