import { NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";

import { ProductCardProps } from "../../common/ProductCard";
import useAuthContext from "../../hooks/useAuthContext";

export const UserMenu: React.FC<UserMenuProp> = ({ cartItems }) => {
  const { currentUser, logout } = useAuthContext();

  const handleLogout = async () => {
    try {
      logout();
    } catch (error) {
      console.log("Error while logging out the user", error);
    }
  };

  if (!currentUser) {
    return (
      <div>
        <NavLink
          className="bg-primary-500 px-2 py-1 font-medium text-white transition-colors duration-300 hover:bg-primary-600 md:px-4 md:py-2"
          role="button"
          type="button"
          to="/signin"
        >
          Login
        </NavLink>
      </div>
    );
  }

  return (
    <div className="space-x-2 md:space-x-4">
      <button>
        <AiOutlineSearch />
      </button>

      <NavLink
        to="/cart"
        className="relative inline-block rounded-[50%] bg-gray-300 p-2 align-middle"
      >
        <BsCart2 />

        {cartItems.length > 0 && (
          <div className="absolute inset-0 flex h-6 w-6 translate-x-3 translate-y-full items-center justify-center rounded-[50%] bg-secondary-500 text-white lg:translate-x-3/4">
            <span className="inline-block text-[0.8rem] font-medium">
              {cartItems.length}
            </span>
          </div>
        )}
      </NavLink>

      <button
        className="bg-primary-500 px-2 py-1 font-medium text-white hover:bg-primary-600 md:px-4 md:py-2"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

type UserMenuProp = {
  cartItems: ProductCardProps[];
};
