import Image from "next/image";

export default function Navigation() {
    return (
        <div className="">

    <div className="backdrop-blur-md bg-[#28282866]/20 my-5 flex flex-row justify-between w-10/12 m-auto p-3 px-5 rounded-full border border-white/10 ">
    <div className="flex flex-row justify-center items-center gap-x-2"><img src="/pngs/logo.png" width={20} height={24} alt="Logo" /> HeySolana</div>

    <div>
        <ul className="flex flex-row gap-x-4 backdrop-blur-md bg-gradient-to-r from-white/14 border-1 border-white/30 border rounded-3xl p-2 to-white/30">
            <li>
                Learn
            </li>
            <li>
                Explore
            </li>
            <li>Support

            </li>
        </ul>
    </div>
    </div>
        </div>
    );
}
