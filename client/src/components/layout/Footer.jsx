import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaPhone, FaWhatsapp, FaChevronDown } from "react-icons/fa6";

import google from "../../assets/footer/google.png";
import apple from "../../assets/footer/apple.png";
import facebook from "../../assets/footer/facebook.png";
import instagram from "../../assets/footer/instagram.png";
import youtube from "../../assets/footer/youtube.png";
import pinterest from "../../assets/footer/pinterest.png";
import word from "../../assets/footer/word.png";
import logo from "../../assets/logo/logo.png"; // your footer logo
import footer from "../../assets/footer/footer.png"; // your footer logo

const Footer = () => {
  const [open, setOpen] = useState({
    services: false,
    policies: false,
    knowledge: false,
    about: false,
  });

  const toggle = (key) => setOpen({ ...open, [key]: !open[key] });

  return (
    <footer className="bg-radial from-[#1B2D2D] to-[#1B3536] text-gray-200 mt-10 pt-2 pb-10">
{/* Background Logo Watermark */}
  <div
    className="absolute inset-0 pointer-events-none z-0"
    style={{
      backgroundImage: `url(${footer})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "350px",
      opacity: 0.08,   // soft watermark
    }}
  />
  <div className="relative z-10">
        {/* ---------------- MOBILE VERSION ---------------- */}
      <div className="lg:hidden px-6">

        {/* Logo */}
        <div className="flex flex-col items-center">
          <img src={logo} className="h-20 opacity-90 text-[#4CC7B2]" />

          <h3 className="text-lg mt-2">Pure Diamond Elegance</h3>

          {/* Contact */}
          <div className="flex items-center gap-2 mt-4">
            <FaPhone className="text-[#7EEBD2]" />
            <p className="font-medium">+91 98888 98866</p>
          </div>
          <p className="text-xs text-[#7EEBD2]">(10am-8pm, 7 days a week)</p>

          <div className="flex items-center gap-2 mt-3">
            <MdEmail className="text-[#7EEBD2]" />
            <p>info@gemlay.com</p>
          </div>

          <p className="text-center text-[13px] mt-3 leading-relaxed">
            Gemlay Jewels Private Limited<br />
            Unit No 15, Ground Floor, Jubilee Junction,<br />
            Mohali, 160062.
          </p>
        </div>

        {/* ---- MOBILE ACCORDIONS ---- */}
        <div className="mt-10 space-y-2 text-[15px] font-semibold">

          {/* SERVICES */}
          <div onClick={() => toggle("services")} className="flex justify-between items-center py-4 border-b border-[#256B6B] cursor-pointer">
            OUR SERVICES
            <FaChevronDown className={`${open.services ? "rotate-180" : ""} transition`} />
          </div>
          {open.services && (
            <ul className="pl-2 py-2 space-y-2 text-[13px] text-gray-300">
              <li>Gold Rates</li>
              <li>Digital Gold</li>
              <li>Various Payment Method</li>
              <li>Financing Options</li>
              <li>Gemlay Assurance</li>
            </ul>
          )}

          {/* POLICIES */}
          <div onClick={() => toggle("policies")} className="flex justify-between items-center py-4 border-b border-[#256B6B] cursor-pointer">
            OUR POLICIES
            <FaChevronDown className={`${open.policies ? "rotate-180" : ""} transition`} />
          </div>
          {open.policies && (
            <ul className="pl-2 py-2 space-y-2 text-[13px] text-gray-300">
              <li>15-Day Returns</li>
              <li>Free Shipping</li>
              <li>Return And Refund Policy</li>
              <li>Lifetime Exchange</li>
            </ul>
          )}

          {/* JEWELLERY KNOWLEDGE */}
          <div onClick={() => toggle("knowledge")} className="flex justify-between items-center py-4 border-b border-[#256B6B] cursor-pointer">
            JEWELLERY KNOWLEDGE
            <FaChevronDown className={`${open.knowledge ? "rotate-180" : ""} transition`} />
          </div>
          {open.knowledge && (
            <ul className="pl-2 py-2 space-y-2 text-[13px] text-gray-300">
              <li>Gold Guide</li>
              <li>Diamond Guide</li>
              <li>Gemstone Guide</li>
              <li>Certification Guide</li>
            </ul>
          )}

          {/* ABOUT */}
          <div onClick={() => toggle("about")} className="flex justify-between items-center py-4 border-b border-[#256B6B] cursor-pointer">
            ABOUT US
            <FaChevronDown className={`${open.about ? "rotate-180" : ""} transition`} />
          </div>
          {open.about && (
            <ul className="pl-2 py-2 space-y-2 text-[13px] text-gray-300">
              <li>Our Vision</li>
              <li>Why Gemlay?</li>
              <li>Blog</li>
              <li>Our Story</li>
              <li>Our Process</li>
              <li>Our Team</li>
              <li>Reviews And Ratings</li>
            </ul>
          )}
        </div>

        {/* Social Icons */}
        <div className="text-center mt-12">
          <p className="font-semibold mb-4">FOLLOW US :</p>
          <div className="flex justify-center gap-5">
            <img src={facebook} className="w-8" />
            <img src={instagram} className="w-8" />
            <img src={youtube} className="w-8" />
            <img src={pinterest} className="w-8" />
            <img src={word} className="w-8" />
          </div>
        </div>

        {/* App Buttons */}
        <div className="text-center mt-10">
          <p className="font-semibold mb-4">Download Our Application</p>
          <div className="flex justify-center gap-4">
            <img src={google} className="h-12" />
            <img src={apple} className="h-12 border border-gray-300 rounded" />
          </div>
        </div>
      </div>

      {/* ---------------- DESKTOP VERSION ---------------- */}
      <div className="hidden lg:grid max-w-7xl mx-auto px-6 grid-cols-5 gap-12 mt-12">

        {/* CONTACT */}
        <div>
          <h3 className="text-[#00C1A2] font-bold tracking-wide mb-4 text-[15px]">
            CONTACT US
          </h3>
          <p className="flex items-center gap-2 text-[13px]">
            <FaWhatsapp size={17} /> +91 98888 98866
          </p>
          <p className="text-[11px] text-[#FF0000] ml-6">
            (10am–8pm, 7 days a week)
          </p>
          <p className="flex items-center gap-2 text-[13px] mt-3">
            <MdEmail size={17} /> info@gemlay.com
          </p>
          <p className="text-[13px] mt-3 leading-relaxed">
            <FaLocationDot size={17} className="inline mr-2" />
            Gemlay Jewels Private Limited<br />
            Unit No 15, Ground Floor, Jubilee Junction, Mohali,
            160062.
          </p>

          <p className="text-[13px] mt-5">Download Our Application</p>
          <div className="flex gap-3 mt-3 items-center">
            <img src={google} />
            <img src={apple} className="h-[45px] w-[150px] border rounded-sm" />
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-[#00C1A2] font-bold mb-4 text-[15px]">OUR SERVICES</h3>
          <ul className="space-y-2 text-[13px]">
            <li>Gold Rates</li>
            <li>Digital Gold</li>
            <li>Payment Methods</li>
            <li>Financing Options</li>
            <li>Gemlay Assurance</li>
          </ul>
        </div>

        {/* POLICIES */}
        <div>
          <h3 className="text-[#00C1A2] font-bold mb-4 text-[15px]">OUR POLICIES</h3>
          <ul className="space-y-2 text-[13px]">
            <li>15-Day Returns</li>
            <li>Free Shipping</li>
            <li>Lifetime Exchange</li>
            <li>Return & Refund Policy</li>
          </ul>
        </div>

        {/* KNOWLEDGE */}
        <div>
          <h3 className="text-[#00C1A2] font-bold mb-4 text-[15px]">JEWELLERY KNOWLEDGE</h3>
          <ul className="space-y-2 text-[13px]">
            <li>Gold Guide</li>
            <li>Diamond Guide</li>
            <li>Gemstone Guide</li>
            <li>Certification Guide</li>
          </ul>
        </div>

        {/* ABOUT */}
        <div>
          <h3 className="text-[#00C1A2] font-bold mb-4 text-[15px]">ABOUT US</h3>
          <ul className="space-y-2 text-[13px]">
            <li>Our Vision</li>
            <li>Why Gemlay?</li>
            <li>Blog</li>
            <li>Our Story</li>
            <li>Our Process</li>
            <li>Our Team</li>
            <li>Reviews</li>
            <li>Press Release</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto my-8 border-t border-[#21DAD8]"></div>

      {/* Bottom Section (Desktop + Mobile Combined) */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-4">

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-4 order-2 lg:order-2">
          <span className="tracking-wide font-semibold">FOLLOW US</span>
          <img src={facebook} className="w-[36px]" />
          <img src={instagram} className="w-[36px]" />
          <img src={youtube} className="w-[36px]" />
          <img src={pinterest} className="w-[36px]" />
          <img src={word} className="w-[36px]" />
        </div>

        {/* Footer Links */}
        <div className="flex gap-4 text-[11px] font-semibold text-gray-300 order-3 lg:order-3">
          <span className="hover:text-white cursor-pointer">SITE MAP</span>
          <span className="hover:text-white cursor-pointer">PRIVACY POLICY</span>
          <span className="hover:text-white cursor-pointer">TERMS AND CONDITIONS</span>
          <span className="hover:text-white cursor-pointer">FAQs</span>
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-300 text-[11px] order-1 lg:order-1">
          © 2025 GEMLAY.COM . ALL RIGHTS RESERVED.
        </p>
      </div>
  </div>
  
      
    </footer>
  );
};

export default Footer;
