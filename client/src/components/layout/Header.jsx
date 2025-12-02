import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaRegClock } from "react-icons/fa";
import { FaTruckFast, FaLocationDot } from "react-icons/fa6";
import { HiMenuAlt3 } from "react-icons/hi";
import Search from "../common/Search";
import logo from "../../assets/logo/logo.png";
import arrival from "../../assets/logo/arrival.png";
import bangles from "../../assets/logo/bangles.png";
import Earrings from "../../assets/logo/Earrings.png";
import gold from "../../assets/logo/gold.png";
import pendent from "../../assets/logo/pendent.png";
import rings from "../../assets/logo/rings.png";
import all from "../../assets/logo/all.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#1B2D2D] text-white ">
      {/* TOP BAR */}
      <div className="w-full bg-[#004545] text-[11px] py-2 flex justify-between px-6 md:px-8 tracking-wide">
        <div className="hidden md:flex items-center gap-6 ms-40">
          <span className="flex items-center gap-2 font-semibold ">
            ORDER TRACKING
            <span className="text-sm opacity-80">
              <FaTruckFast />
            </span>
          </span>

          <span >
            Refer and earn extra discount{" "}
            <a href="#" className="text-blue-200 underline">
              Click here...
            </a>
          </span>
        </div>

        {/* MOBILE TOP TEXT */}
        <span className="md:hidden w-full text-center">
          Refer and earn extra discount
        </span>

        <span className="hidden md:flex items-center gap-2 opacity-90">
          <FaLocationDot /> <p>140406</p>
        </span>
      </div>

      {/* MAIN ROW */}
      <div className="flex items-center justify-between py-4 px-5 md:px-10">
        {/* LEFT: Mobile Menu + Logo */}
        <div className="flex items-center gap-3">
          {/* Hamburger (Mobile Only) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl md:hidden text-[#AEECE5]"
          >
            <HiMenuAlt3 />
          </button>

          {/* LOGO */}
          <div className="flex items-center gap-3 select-none">
            <img src={logo} alt="Gemlay Logo" className="h-[37.45px] w-[45px] opacity-80" />
            <div className="leading-tight hidden md:block text-center ">
              <p className="text-[16px] font-semibold opacity-90 tracking-wide mb-1">
                GEMLAY
              </p>
              <p className="text-[5px] opacity-70 -mt-1">Pure Diamond Elegance</p>
            </div>
          </div>
        </div>

        {/* CENTER: Desktop Search */}
        <div className="hidden md:block w-[472px] h-9">
          <Search placeholder="Slim Sparkle Diamond Ring" />
        </div>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-6 text-xl text-[#AEECE5]">
          <FaRegClock className="cursor-pointer hidden md:block" />

          <div className="relative cursor-pointer">
            <AiOutlineShoppingCart />
            <span className="absolute -top-2 -right-2 bg-teal-400 text-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              1
            </span>
          </div>

          <div className="relative cursor-pointer">
            <AiOutlineHeart />
            <span className="absolute -top-2 -right-2 bg-teal-400 text-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              1
            </span>
          </div>

          <AiOutlineUser className="cursor-pointer" />
        </div>
      </div>

      {/* MOBILE SEARCH BAR */}
      <div className="md:hidden px-5 pb-4">
        <Search placeholder="Slim Sparkle Diamond Ring" />
      </div>

      {/* BOTTOM NAV (DESKTOP ONLY) */}
      <nav className="hidden md:flex items-center px-10 justify-center gap-5 py-4 border-t border-[#1F4C4C] text-[12px] text-gray-200 tracking-wide">
        <Link
          to="/new-arrivals"
          className="flex gap-1 px-4 py-1 border border-teal-300 rounded-full text-teal-200 font-medium hover:bg-teal-300/10 transition "
        >
         <img src={arrival} alt="arrival" className="w-[20px] h-[19px]" /> New Arrivals
        </Link>

        <Link to="/rings" className="flex gap-1 hover:text-white transition">
          <img src={rings} alt="rings" className="w-[17px] h-[17px]" />Rings
        </Link>

        <Link to="/earrings" className="flex gap-1 hover:text-white transition">
          <img src={Earrings} alt="Earrings" className="w-[17px] h-[17px]" />Earrings
        </Link>

        <Link to="/pendants" className="flex gap-1 hover:text-white transition">
          <img src={pendent} alt="pendent" className="w-[17px] h-[17px]" />Pendants
        </Link>

        <Link to="/bangles-bracelets" className="flex gap-1 hover:text-white transition">
          <img src={bangles} alt="bangles" className="w-[17px] h-[17px]" />Bangles And Bracelets
        </Link>

        <Link to="/gold-coins-bars" className="flex gap-1 hover:text-white transition">
          <img src={gold} alt="gold" className="w-[17px] h-[17px]" />Gold Coin & Bars
        </Link>

        <Link to="/all-jewellery" className="flex gap-1 item-center hover:text-white transition">
          <img src={all} alt="all" className="w-[17px] h-[17px]" />All Jewellery
        </Link>

        {/* Right-side items */}
        <div className="ml-6 flex items-center gap-4 text-gray-100">
          <span>LIVE GOLD RATES</span>

          <Link
            to="/jsp-plan"
            className="border border-teal-300 px-4 py-1 rounded-full text-teal-200 hover:bg-teal-300/10 transition"
          >
            JSP (10+1 Monthly Plan)
          </Link>
        </div>
      </nav>
      {/* MOBILE SLIDE-IN MENU */}
      <div
        className={`
    fixed top-0 left-0 h-full w-64 bg-[#0E3B3F] text-white 
    z-50 shadow-xl transform transition-transform duration-300
    ${menuOpen ? "translate-x-0" : "-translate-x-full"}
  `}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-2xl text-[#AEECE5]"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        {/* Menu Content */}
        <div className="mt-16 flex flex-col gap-6 px-6 text-[15px] tracking-wide">
          <Link to="/new-arrivals" className="hover:text-teal-300">
            New Arrivals
          </Link>

          <Link to="/rings" className="hover:text-teal-300">
            Rings
          </Link>

          <Link to="/earrings" className="hover:text-teal-300">
            Earrings
          </Link>

          <Link to="/pendants" className="hover:text-teal-300">
            Pendants
          </Link>

          <Link to="/bangles-bracelets" className="hover:text-teal-300">
            Bangles & Bracelets
          </Link>

          <Link to="/gold-coins-bars" className="hover:text-teal-300">
            Gold Coin & Bars
          </Link>

          <Link to="/all-jewellery" className="hover:text-teal-300">
            All Jewellery
          </Link>

          <Link to="/jsp-plan" className="hover:text-teal-300">
            JSP (10+1 Monthly Plan)
          </Link>
        </div>
      </div>

      {/* BACKDROP (FIX: MUST BE OUTSIDE MENU DIV!) */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
