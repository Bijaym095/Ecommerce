import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

import { Button } from "../../common/Button";
import { combineClasses } from "../../utils";

export const LinksContainer: React.FC<LinksContainerProp> = ({
  links,
  setIsToggled,
  isToggled,
}) => {
  return (
    <div
      className={combineClasses(
        "fixed z-[99] lg:static",
        `${
          isToggled
            ? "left-0 px-[36px] py-[65px] text-white"
            : "-left-[250px] text-black"
        } bottom-0 top-0`,
        "h-full w-[250px] bg-blue-400 transition-all duration-300 lg:bg-white",
      )}
    >
      <Button
        className="absolute right-4 top-4 lg:hidden"
        onClick={() => setIsToggled(false)}
      >
        <FaTimes />
      </Button>

      <ul className="space-y-4 lg:flex lg:space-x-4 lg:space-y-0">
        {links.map((link, index) => (
          <li className="capitalize" key={index}>
            <NavLink onClick={() => setIsToggled(false)} to={link.linkTo}>
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

type LinksContainerProp = {
  isToggled: boolean;
  setIsToggled: React.Dispatch<React.SetStateAction<boolean>>;
  links: NavLinksType[];
};

type NavLinksType = {
  title: string;
  linkTo: string;
};
