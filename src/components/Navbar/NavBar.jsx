import {Link} from "react-router-dom";
import NavLinks from "../NavLinks/NavLinks";
import NavMobile from "../NavMobile/NavMobile";
import Logo from "./../Logo/Logo";
const NavBar = () => {
  return (
    <div className="flex justify-between items-center p-5 md:p-10 lg:px-20">
      <Link to={"https://givingtree.vercel.app"}>
        <Logo width={"md:w-64"} />
      </Link>
      <NavLinks />
      <NavMobile />
    </div>
  );
};

export default NavBar;
