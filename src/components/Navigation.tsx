import Image from "next/image";

export default function Navigation() {
  return (
    <div className="backdrop-blur-md bg-[#28282866]/20 my-5 flex flex-row justify-between items-center w-11/12 md:w-10/12 m-auto p-4 px-6 rounded-full border border-darkpink/20">
      <div className="flex items-center gap-x-3">
        <img
          src="/pngs/logo.png"
          className="w-[50px] h-[50px]"
          alt="Logo"
        />
        <h1 className="hidden md:block text-lg font-medium text-white">
          HeySolana
        </h1>
      </div>

      <div className="flex items-center">
        <ul className="flex gap-x-6 backdrop-blur-lg bg-gradient-to-r from-white/10 to-black/10 border border-white/20 rounded-full py-2 px-6">
          <li className="cursor-pointer text-sm md:text-base">
            Learn
          </li>
          <li className="cursor-pointer text-sm md:text-base">
            Explore
          </li>
          <li className="cursor-pointer text-sm md:text-base">
            Support
          </li>
        </ul>
      </div>
    </div>
  );
}
