import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-mainBg1 flex flex-col items-center justify-center px-6 md:px-16">
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-10">
                <div className="hidden md:block">
                    <img src="loginLogo.png" className="rounded-3xl shadow-lg shadow-blue-200 hover:shadow-2xl hover:-translate-y-2 hover:shadow-cyan-500 transition-all duration-500" alt="Login" />
                </div>

                <div className="w-full md:w-1/2">
                    <div className="font-extrabold text-2xl md:text-4xl text-center md:text-left">Welcome Back!</div>

                    <div className="mt-6 space-y-6">
                        <Input type="text" placeholder="Enter Your Email:" />
                        <Input type="password" placeholder="Enter Your Password:" />
                        
                        <p className="text-gray-700 text-center md:text-left mt-2">
                            <span className="text-blue-600 font-bold cursor-pointer hover:text-emerald-400 transition-all duration-500">
                                Forgot Password?
                            </span>
                        </p>
                    </div>

                    <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
                        <div className="text-center md:text-left">
                            <div>Don't have an account?</div>
                            <div onClick={() => {navigate("/signup")}} className="font-bold text-blue-600 cursor-pointer hover:text-blue-800 transition-all duration-300">Register Now {">>>"}</div>
                        </div>
                        
                        <Button text="Login" variant="primary" />
                    </div>
                </div>
            </div>
        </div>
    );
};
