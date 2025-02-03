import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#161616] py-12">
      <div className="w-11/12 md:w-10/12 m-auto space-y-8 md:space-y-0 flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="space-y-6 text-center md:text-left w-full md:w-1/2">
          <div className="flex items-center justify-center md:justify-start gap-x-3">
            <img src="/pngs/logo.png" className="w-10 h-10" alt="Logo" />
            <h1 className="text-[32px] md:text-[40px] font-bold text-white">
              HeySolana
            </h1>
          </div>
          <h2 className="text-[20px] md:text-[28px] text-footergrey font-medium">
            Try Hey Solana Today
          </h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button className="border border-footergrey py-2 px-6 rounded-full hover:bg-footergrey hover:text-white transition">
              Terms of Service
            </button>
            <button className="border border-footergrey py-2 px-6 rounded-full hover:bg-footergrey hover:text-white transition">
              Privacy Policy
            </button>
          </div>
        </div>


        <div className="flex justify-between w-full md:w-auto gap-x-12 text-center md:text-left text-footergrey">
          <ul className="space-y-4">
            <li className="hover:text-white transition">
              <a href="#">Get App</a>
            </li>
            <li className="hover:text-white transition">
              <a href="#">Resources</a>
            </li>
            <li className="hover:text-white transition">
              <a href="#">Contact</a>
            </li>
          </ul>
          <ul className="space-y-4">
            <li className="hover:text-white transition">
              <a 
                href={process.env.NEXT_PUBLIC_TWITTER_URL}
              >
                Twitter
              </a>
            </li>
            <li className="hover:text-white transition">
              <a 
                href={process.env.NEXT_PUBLIC_TELEGRAM_URL}
              >
                Telegram
              </a>
            </li>
            <li className="hover:text-white transition">
              <a 
                target="blank"
                href={process.env.NEXT_PUBLIC_DISCORD_URL}
              >
                Discord
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-11/12 md:w-10/12 m-auto pt-10">
        <hr className="border-footergrey" />
        <div className="pt-5 text-center text-footergrey">
          &copy; {new Date().getFullYear()} HeySolana
        </div>
      </div>
    </div>
  );
}
