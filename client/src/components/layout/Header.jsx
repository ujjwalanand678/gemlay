import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaRegClock } from "react-icons/fa";
import { FaTruckFast, FaLocationDot } from "react-icons/fa6";
import { HiMenuAlt3 } from "react-icons/hi";

import Search from "../common/Search";
import AuthModal from "../Auth/AuthModal";

import logo from "../../assets/logo/logo.png";
import arrival from "../../assets/logo/arrival.png";
import bangles from "../../assets/logo/bangles.png";
import Earrings from "../../assets/logo/Earrings.png";
import gold from "../../assets/logo/gold.png";
import pendent from "../../assets/logo/pendent.png";
import rings from "../../assets/logo/rings.png";
import all from "../../assets/logo/all.png";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const u = localStorage.getItem("user");
      if (u && u !== "undefined" && u !== "null") {
        setUser(JSON.parse(u));
      }
    } catch {
      localStorage.removeItem("user");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user");
    setUser(null);
    window.location.reload();
  };

  const openAuth = () => {
    setAuthModalOpen(true);
    setMenuOpen(false);
  };

  return (
    <header className="w-full bg-[#1B2D2D] text-white relative">

      {/* TOP STRIP */}
      <div className="w-full bg-[#004545] text-[11px] py-2 flex justify-between px-6 md:px-8 tracking-wide">
        <div className="hidden md:flex items-center gap-6 ms-40">
          <span className="flex items-center gap-2 font-semibold me-60">
            ORDER TRACKING <FaTruckFast className="text-sm opacity-80" />
          </span>

          <span>
            Refer and earn extra discount{" "}
            <a href="#" className="text-blue-200 underline">
              Click here...
            </a>
          </span>
        </div>

        <span className="md:hidden w-full text-center">
          Refer and earn extra discount
        </span>

        <span className="hidden md:flex items-center gap-2 opacity-90">
          <FaLocationDot /> <p>140406</p>
        </span>
      </div>

      {/* MAIN HEADER ROW */}
      <div className="flex items-center justify-between py-4 px-5 md:px-10">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setMenuOpen(true)}
              className="text-3xl md:hidden text-[#AEECE5]"
            >
              <HiMenuAlt3 />
            </button>

            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3 cursor-pointer select-none">
              <img
                src={logo}
                alt="Gemlay Logo"
                className="h-[37px] w-[45px] opacity-80"
              />

              <div className="hidden md:block text-center leading-none">
                <p className="text-[16px] font-semibold tracking-wide opacity-90">
                  GEMLAY
                </p>
                <p className="text-[5px] opacity-70">Pure Diamond Elegance</p>
              </div>
            </Link>
          </div>

          {/* DESKTOP SEARCH */}
          <div className="hidden md:block w-[472px]">
            <Search placeholder="Slim Sparkle Diamond Ring" />
          </div>
        </div>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-6 text-xl text-[#AEECE5] relative">

          <button className="hidden md:block hover:text-teal-300">
            <FaRegClock />
          </button>

          <button className="relative hover:text-teal-300">
            <AiOutlineShoppingCart />
            <span className="absolute -top-2 -right-2 bg-teal-400 text-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              1
            </span>
          </button>

          <button className="relative hover:text-teal-300">
            <AiOutlineHeart />
            <span className="absolute -top-2 -right-2 bg-teal-400 text-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              1
            </span>
          </button>

          {/* USER SECTION */}
          {user ? (
            <div className="flex items-center gap-2 text-sm">
              <span className="hidden sm:block">{user.name || "User"}</span>
              <button
                onClick={handleLogout}
                className="px-2 py-[3px] rounded bg-[#AEECE5] text-black font-medium text-xs hover:bg-teal-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <button onClick={openAuth} className="hover:text-teal-300">
              <AiOutlineUser />
            </button>
          )}
        </div>
      </div>

      {/* MOBILE SEARCH */}
      <div className="md:hidden px-5 pb-4">
        <Search placeholder="Slim Sparkle Diamond Ring" />
      </div>

      {/* DESKTOP NAVBAR */}
      <nav className="hidden md:flex items-center px-10 justify-center gap-5 py-4 border-t border-[#1F4C4C] text-[12px] text-gray-200">

        <Link
          to="/new-arrivals"
          className="flex gap-1 px-4 py-1 border border-teal-300 rounded-full text-teal-200 font-medium hover:bg-teal-300/10"
        >
          <img src={arrival} className="w-[20px] h-[19px]" alt="" />
          New Arrivals
        </Link>

        <Link to="/rings" className="flex gap-1 hover:text-white">
          <img src={rings} className="w-[17px] h-[17px]" alt="" /> Rings
        </Link>

        <Link to="/earrings" className="flex gap-1 hover:text-white">
          <img src={Earrings} className="w-[17px] h-[17px]" alt="" /> Earrings
        </Link>

        <Link to="/pendants" className="flex gap-1 hover:text-white">
          <img src={pendent} className="w-[17px] h-[17px]" alt="" /> Pendants
        </Link>

        <Link to="/bangles-bracelets" className="flex gap-1 hover:text-white">
          <img src={bangles} className="w-[17px] h-[17px]" alt="" /> Bangles & Bracelets
        </Link>

        <Link to="/gold-coins-bars" className="flex gap-1 hover:text-white">
          <img src={gold} className="w-[17px] h-[17px]" alt="" /> Gold Coins & Bars
        </Link>

        <Link to="/all-jewellery" className="flex gap-1 hover:text-white">
          <img src={all} className="w-[17px] h-[17px]" alt="" /> All Jewellery
        </Link>

        <div className="ml-6 flex items-center gap-4">
          <span>LIVE GOLD RATES</span>

          <Link
            to="/jsp-plan"
            className="border border-teal-300 px-4 py-1 rounded-full"
          >
            <span className="font-bold text-[#E2B870]">JSP</span> (10+1 Plan Monthly Plan)
          </Link>
        </div>
      </nav>

      {/* MOBILE SLIDE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#0E3B3F] text-white z-50 shadow-xl transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-2xl text-[#AEECE5]"
        >
          ✕
        </button>

        <div className="mt-16 flex flex-col gap-6 px-6 text-[15px]">
          <Link to="/new-arrivals" className="hover:text-teal-300">New Arrivals</Link>
          <Link to="/rings" className="hover:text-teal-300">Rings</Link>
          <Link to="/earrings" className="hover:text-teal-300">Earrings</Link>
          <Link to="/pendants" className="hover:text-teal-300">Pendants</Link>
          <Link to="/bangles-bracelets" className="hover:text-teal-300">Bangles & Bracelets</Link>
          <Link to="/gold-coins-bars" className="hover:text-teal-300">Gold Coins & Bars</Link>
          <Link to="/all-jewellery" className="hover:text-teal-300">All Jewellery</Link>

          <button onClick={openAuth} className="text-left hover:text-teal-300 mt-4">
            {user ? "Logout" : "Login / Signup"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <AuthModal open={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </header>
  );
};

export default Header;
