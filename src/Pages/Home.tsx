import { BrandsTape } from "../components/BrandsTape"
import { Button } from "../components/ui/Button"

export const Home = () => {
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
        </div>
    )
}