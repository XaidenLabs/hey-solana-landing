import Image from "next/image";

export default function Hero() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-[url('/pngs/hero-background.png')] bg-cover text-white">

            <div className="border">
                <h1 className="text-[100px] font-bold">Your Ai, Your Wallet</h1>
                <p>With Hey Solana It's <span>Hands Free</span></p>
                <p className="border">Manage your assets, trade, and get real-time insights. Just say, — Hey Solana.</p>
            </div>
            {/* <div className=" border border-white w-[160px]">
                <img src="/pngs/phones.png" alt="phones" /> */}
            {/* </div> */}

        </div>
    );
}
