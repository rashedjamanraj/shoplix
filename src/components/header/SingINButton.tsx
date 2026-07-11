"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { LiaUser } from "react-icons/lia";

const SingINButton = () => {
  const { data: session } = useSession();
  console.log(session);

  return (
    <>
      {session?.user ? (
        <div
          onClick={() => signOut()}
          className="flex items-center gap-2 text-sm cursor-pointer "
        >
          <div className="border border-gray-500 rounded-full  w-10 h-10 ">
            <Image
              src={session?.user?.image!}
              alt="userImage"
              width={200}
              height={200}
              className=" w-full h-full rounded-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs">{session?.user?.name}</p>
            <p className="font-medium">Signout</p>
          </div>
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className="flex items-center gap-2 text-sm cursor-pointer "
        >
          <div className="border border-gray-300 p-1.5 rounded-full text-xl">
            <LiaUser />
          </div>
          <div>
            <p className="text-xs">Hello, Guest</p>
            <p className="font-medium">Signin / Register</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SingINButton;
