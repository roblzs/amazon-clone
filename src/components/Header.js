import Image from "next/image";
import { 
    SearchIcon, 
    MenuIcon, 
    ShoppingCartIcon 
} from '@heroicons/react/solid'
import {useRouter} from "next/router";

function Header() {
    const router = useRouter();

    return (
        <header>
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image 
                        onClick={() => router.push("/")}
                        src="/amazon_logo.png"
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>
                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                    <input type="text" className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" />
                    <SearchIcon className="h-12 p-4" />
                </div>
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div className="link">
                        <p>Sign in</p>
                        <p className="font-extrabold md:text-sm">Account & lists</p>
                    </div>
                    <div className="link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>
                    <div className="link relative flex items-center" onClick={() => router.push("/checkout")}>
                        <span className="absolute top-0 right-0 md:right-11 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">4</span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden font-extrabold md:text-sm md:inline">Basket</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
                <p className="link flex items-center"><MenuIcon className="h-6 mr-1" /> All</p>
                <p className="link">Prime Video</p>
                <p className="link">Amazon Business</p>
                <p className="link">Today's Deals</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Food & Grocery</p>
                <p className="link hidden lg:inline-flex">Prime</p>
                <p className="link hidden lg:inline-flex">Buy Again</p>
                <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
                <p className="link hidden lg:inline-flex">Health & Personal Care</p>
            </div>
        </header>
    )
}

export default Header
