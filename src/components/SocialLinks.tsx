import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

const linksData = [
  { icon: <FaGithub />, href: "http://github.com/rashedjamanraj" },
  { icon: <FaFacebook />, href: "http://facebook.com./rasedjamanraj" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/rashedjamanraj" },
  { icon: <FaX />, href: "https://x.com/RashedJamanRaj" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/rashedjamanraj" },
];

const SocialLinks = ({className, iconStyle} : {className?:string, iconStyle?:string}) => {
  return (
    <div className=" text-xl text-white/50 flex items-center gap-2">
      {linksData?.map((item, index) => (
        <Link
          key={index}
          href={item?.href}
          target="blank"
          className={twMerge(" border border-white/20 inline-flex p-2 rounded-full hover:text-sky-500 hover:border-sky-500 duration-300 cursor-pointer", iconStyle)}
        >
          {item?.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
