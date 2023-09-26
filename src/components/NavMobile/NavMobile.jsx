import {RiMenu3Line} from "react-icons/ri";
import {NavLink} from "react-router-dom";
const NavMobile = () => {
  return (
    <nav className="flex flex-col md:hidden">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn  btn-ghost btn-sm text-xl m-1">
          <RiMenu3Line />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
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
        </ul>
      </div>
    </nav>
  );
};

export default NavMobile;
