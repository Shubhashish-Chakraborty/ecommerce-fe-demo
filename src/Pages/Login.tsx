import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"

import { useNavigate } from "react-router-dom"

export const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-mainBg1">

            <div className="mt-10 cursor-pointer py-24 flex justify-around">
                <div>
                    <img src="loginLogo.png" className="rounded-3xl shadow-lg shadow-blue-200 hover:shadow-2xl hover:-translate-y-2 hover:shadow-cyan-500 transition-all duration-500" alt="" />
                </div>

                <div>
                    <div className="font-extrabold text-4xl">Welcome Back!</div>

                    <div className="mt-10 space-y-8">

                        <Input type="text" placeholder="Enter Your Email:" />
                        <Input type="password" placeholder="Enter Your Password:" />
                        
                        <p className="text-white text-center mt-2">
                            <span
                                className="text-blue-600 font-bold cursor-pointer hover:text-emerald-400 transition-all duration-500"
                            >
                                Forgot Password?
                            </span>
                        </p>
                    </div>

                    <div className="mt-12 flex justify-between">
                        <div>
                            <div>Don't have an account?</div>
                            <div onClick={() => {navigate("/signup")}} className="font-bold">Register Now {">>>"}</div>
                        </div>
                        
                        <Button text="Login" variant="primary" />
                    </div>
                </div>
            </div>

        </div>
    )
}