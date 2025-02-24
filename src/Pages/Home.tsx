import { BrandsTape } from "../components/BrandsTape"
import { Button } from "../components/ui/Button"

import { useNavigate } from "react-router-dom"
import { Arrow } from "../icons/Arrow";

export const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-mainBg1">
            <div className="flex justify-around">

                <div className="mt-24">
                    <div className="font-extrabold text-2xl md:text-7xl mb-5">
                        FIND SHOES <br /> THAT STEP <br /> UP YOUR STYLE
                    </div>
                    <div className="text-gray-500">
                        Browse through our diverse range of expertly crafted footwear, <br /> designed to complement your style and elevate every step you take.
                    </div>

                    <div className="mt-8">
                        <Button text="Shop Now" variant="primary"/>
                    </div>
                </div>

                <div>
                    <img src="srk.png" alt="" />
                </div>
            </div>
            <BrandsTape/>

            <div>
                <div className="font-bold text-3xl text-center mt-10 mb-8">Shop by Collection</div>

                <div className="flex justify-center items-center cursor-pointer gap-x-20">
                    <div>
                        <img onClick={() => {navigate("/signup")}} src="menCollection.png" className="w-80 hover:scale-105 transition-all duration-500" alt="" />
                    </div>
                    <div>
                        <img onClick={() => {navigate("/signup")}} src="womenCollection.png" className="w-80 hover:scale-105 transition-all duration-500" alt="" />
                    </div>
                </div>

                <div className="flex justify-center mt-10">
                    <Button onClick={() => {navigate("/signup")}} text="VIEW ALL PRODUCTS" variant="admin" endIcon={<Arrow/>}/>
                </div>

            </div>
        </div>
    )
}