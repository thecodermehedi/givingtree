import NavLinks from "../NavLinks/NavLinks";
import NavMobile from "../NavMobile/NavMobile";
import Logo from "./../Logo/Logo";
const NavBar = () => {
  return (
    <div className="flex justify-between items-center p-5 md:p-10 lg:px-20">
      <Logo width={"md:w-64"} />
      <NavLinks />
      <NavMobile />
    </div>
  );
};

export default NavBar;
