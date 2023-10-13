import { NextPage } from "next";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const login: NextPage = () => {
  return (
    <div className="h-screen w-full">
      <div className="flex flex-col justify-center items-center h-full">
        <div>Language</div>
        <div>Study</div>
        <div>App</div>
      </div>
      <div className="flex fixed bottom-10 justify-center items-center w-full">
        <Link href="/login">
          <div className="w-56 border-gray-300 border px-4 py-2 bg-white rounded-full flex justify-center items-center">
            <FcGoogle className="w-6 h-6" />
            <button className="ml-2 font-semibold text-xl">Google</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default login;
