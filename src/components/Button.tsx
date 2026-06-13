
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

const Button = ({ children, className, href, onClick }: Props) => {
  return (
    <>
      {href ? (
        <Link
          href={href}
          className={twMerge(
            " bg-cyan-600 text-white py-2 px-6 hover:bg-cyan-700 cursor-pointer duration-200",
            className,
          )}
        >
          {children}
        </Link>
      ) : (
        <button
        onClick={onClick}
          className={twMerge(
            " bg-cyan-600 text-white py-2 px-6 hover:bg-cyan-700 cursor-pointer duration-200",
            className,
          )}
        >{children}</button>
      )}
    </>
  );
};

export default Button;
