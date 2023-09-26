import {NavLink} from "react-router-dom";

const NavLinks = () => {
  return (
    <nav className="hidden md:flex gap-8">
      <NavLink
        to={"/"}
        className={({isActive, isPending}) =>
          isPending
            ? "pending"
            : isActive
            ? "active font-bold underline text-green-500"
            : "font-bold hover:text-green-500"
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/donation"}
        className={({isActive, isPending}) =>
          isPending
            ? "pending"
            : isActive
            ? "active font-bold underline text-green-500"
            : "font-bold hover:text-green-500"
        }
      >
        Donation
      </NavLink>
      <NavLink
        to={"/statistics"}
        className={({isActive, isPending}) =>
          isPending
            ? "pending"
            : isActive
            ? "active font-bold underline text-green-500"
            : "font-bold hover:text-green-500"
        }
      >
        Statistics
      </NavLink>
    </nav>
  );
};

export default NavLinks;
