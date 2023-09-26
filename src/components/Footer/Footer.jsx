import Logo from "../Logo/Logo";
import SocialIcons from "../SocialIcons/SocialIcons";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-5 lg:flex-row justify-between items-center py-10 px-20">
      <Link to={"https://givingtree.vercel.app"}>
        <Logo width={"md:w-64"} />
      </Link>
      <p className="font-bold opacity-90">
        Copyright © 2023{" "}
        <span className="hidden md:inline">- All rights reserved</span>
      </p>
      <SocialIcons />
    </footer>
  );
};

export default Footer;
