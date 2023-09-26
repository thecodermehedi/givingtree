import Logo from "../Logo/Logo";
import SocialIcons from "../SocialIcons/SocialIcons";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-5 lg:flex-row justify-between items-center py-10 px-20">
      <Logo width={"w-64"} />
      <p className="font-bold opacity-90">
        Copyright © 2023{" "}
        <span className="hidden md:inline">- All rights reserved</span>
      </p>
      <SocialIcons />
    </footer>
  );
};

export default Footer;
