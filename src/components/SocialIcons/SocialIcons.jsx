import {NavLink} from "react-router-dom";
import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";

const SocialIcons = () => {
  return (
    <ul className="flex gap-4 text-3xl">
      <li className="hover:text-green-500">
        <NavLink to={"https://givingtree.vercel.app"} target="_blank">
          <FaFacebook />
        </NavLink>
      </li>
      <li className="hover:text-green-500">
        <NavLink to={"https://givingtree.vercel.app"} target="_blank">
          <FaInstagram />
        </NavLink>
      </li>
      <li className="hover:text-green-500">
        <NavLink to={"https://givingtree.vercel.app"} target="_blank">
          <FaLinkedin />
        </NavLink>
      </li>
      <li className="hover:text-green-500">
        <NavLink to={"https://givingtree.vercel.app"} target="_blank">
          <FaXTwitter />
        </NavLink>
      </li>
    </ul>
  );
};

export default SocialIcons;
