import { Cart } from "../icons/Cart"
import { Down } from "../icons/Down"
import { Search } from "../icons/Search"
import { Button } from "./ui/Button"
import { Input } from "./ui/Input"

export const Navbar = () => {
    return (
        <>
            <div className="flex items-center justify-between">
                <div>
                    <img src="logo.png" alt="BusinessLogo" className="w-32 md:w-44" />    
                </div>

                <div className="flex gap-x-5 text-xl cursor-pointer text-custom4">
                    <div className="flex items-center gap-x-2">New <Down/></div>
                    <div className="flex items-center gap-x-2">Men <Down/></div>
                    <div className="flex items-center gap-x-2">Women <Down/></div>
                    <div className="flex items-center gap-x-2">About Us <Down/></div>
                </div>

                <div className="flex justify-center m-5 items-center gap-4">
                    <Input startIcon={<Search/>} type="text" placeholder="Search for products..."/>
                    <div className="transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                        <Cart/>
                    </div>
                    <Button variant="primary" text="LogIn"/>
                </div>

            </div>           
        </>
    )
}