import { BrandsTape } from "../components/BrandsTape";
import { Button } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { Arrow } from "../icons/Arrow";
import { Redirect } from "../icons/Redirect";

export const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-mainBg1 px-4 md:px-16">
            <div className="flex flex-col items-center text-center font-extrabold text-xl md:text-4xl text-red-600">
                Site UnderDevelopment, LAUNCHING SOON!!   
                <div onClick={() => {window.open("https://infinostore.com")}} className="cursor-pointer">
                    <Redirect/> 
                </div>
            </div>        
            <div className="flex flex-col md:flex-row items-center justify-between mt-12 md:mt-24">
    
                <div className="text-center md:text-left md:max-w-lg">
                    <div className="font-extrabold text-3xl md:text-7xl mb-5">
                        FIND SHOES <br /> THAT STEP <br /> UP YOUR STYLE
                    </div>
                    <div className="text-gray-500 text-sm md:text-base">
                        Browse through our diverse range of expertly crafted footwear, <br className="hidden md:block" />
                        designed to complement your style and elevate every step you take.
                    </div>

                    <div className="mt-8 flex justify-center md:justify-start">
                        <Button onClick={() => {window.open("https://infinostore.com")}} text="Shop Now" variant="primary" />
                    </div>
                </div>

                <div className="mt-10 md:mt-0">
                    <img src="srk.png" alt="" className="w-64 md:w-full max-w-sm mx-auto" />
                </div>
            </div>
            <BrandsTape />

            <div>
                <div className="font-bold text-3xl text-center mt-10 mb-8">Shop by Collection</div>

                <div className="flex flex-col md:flex-row justify-center items-center cursor-pointer gap-y-10 md:gap-x-20">
                    <div>
                        <img onClick={() => {navigate("/signup")}} src="menCollection.png" className="w-60 md:w-80 hover:scale-105 transition-all duration-500" alt="Men Collection" />
                    </div>
                    <div>
                        <img onClick={() => {navigate("/signup")}} src="womenCollection.png" className="w-60 md:w-80 hover:scale-105 transition-all duration-500" alt="Women Collection" />
                    </div>
                </div>

                <div className="flex justify-center mt-10">
                    <Button onClick={() => {navigate("/signup")}} text="VIEW ALL PRODUCTS" variant="admin" endIcon={<Arrow />} />
                </div>
            </div>
        </div>
    );
};
