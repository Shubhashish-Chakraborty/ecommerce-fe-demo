import { Cart } from "../icons/Cart";
import { Down } from "../icons/Down";
import { Search } from "../icons/Search";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md p-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div>
          <img
            onClick={() => navigate("")}
            src="https://infinostore.com/infinoLogo.png"
            alt="BusinessLogo"
            className="w-32 cursor-pointer"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-x-5 text-xl cursor-pointer text-custom4">
          <div className="flex items-center gap-x-2">New <Down /></div>
          <div className="flex items-center gap-x-2">Men <Down /></div>
          <div className="flex items-center gap-x-2">Women <Down /></div>
          <div className="flex items-center gap-x-2">About Us <Down /></div>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex justify-center items-center gap-4">
          <Input startIcon={<Search />} type="text" placeholder="Search for products..." />
          <div className="transition-all duration-500 hover:-translate-y-2 cursor-pointer">
            <Cart />
          </div>
          <Button variant="primary" onClick={() => navigate("login")} text="LogIn" />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <Down/>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-white shadow-lg">
          <div className="flex flex-col gap-y-4 text-xl cursor-pointer text-custom4">
            <div className="flex items-center gap-x-2">New <Down /></div>
            <div className="flex items-center gap-x-2">Men <Down /></div>
            <div className="flex items-center gap-x-2">Women <Down /></div>
            <div className="flex items-center gap-x-2">About Us <Down /></div>
          </div>
          <Input startIcon={<Search />} type="text" placeholder="Search for products..." />
          <div className="transition-all duration-500 hover:-translate-y-2 cursor-pointer">
            <Cart />
          </div>
          <Button variant="primary" onClick={() => navigate("login")} text="LogIn" />
        </div>
      )}
    </nav>
  );
};
