import React from 'react';
import logo from '../assets/logo1.jpg';
import { FcCallback } from 'react-icons/fc';
import { FaSquareFacebook, FaSquareTwitter } from 'react-icons/fa6';
import { GrInstagram } from 'react-icons/gr';
import { BsWhatsapp } from 'react-icons/bs';
import { NavLink } from 'react-router';

const Footer = () => {
  return (
    <div className="relative overflow-hidden">

      {/*  Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,0,150,0.15),_transparent_70%)]"></div>

      <footer className="relative z-10 max-w-7xl mx-auto px-6 py-8 grid gap-14 lg:grid-cols-4 md:grid-cols-2 text-white">

        {/*  BRAND */}
        <aside className="space-y-6 bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-xl hover:shadow-pink-500/30 transition">
          <div className="flex items-center gap-3">
            <img className="h-14 w-14 rounded-md shadow-lg" src={logo} alt="logo" />
            <h3 className="text-2xl font-extrabold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
              PetLove
            </h3>
          </div>

          <p className="text-gray-300  ">
            Winter pet care made premium. We ensure warmth, comfort, and safety
            for your furry family members all season long.
          </p>

          <div className="flex items-center gap-4 pt-2">
            <FcCallback size={44} />
            <div>
              <h5 className=" font-bold text-yellow-500">(913) 756-3126</h5>
              <p className="text-sm text-gray-400">Always Available</p>
            </div>
          </div>
        </aside>

        {/*  WORKING HOURS */}
        <nav className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-xl hover:shadow-blue-500/30 transition">
          <h6 className="text-lg font-bold text-amber-600 mb-6">Working Hours</h6>

          <div className="space-y-4 text-gray-300">
            <p className="flex justify-between"><span>Sun – Thu</span><span className="font-bold text-white">7am – 6pm</span></p>
            <p className="flex justify-between"><span>Saturday</span><span className="font-bold text-white">9am – 4pm</span></p>
            <p className="flex justify-between"><span>Friday</span><span className="font-bold text-red-600">Closed</span></p>
          </div>
        </nav>

        {/*  LINKS */}
       
<nav className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-xl hover:shadow-purple-500/30 transition">
  <h6 className="text-lg font-bold text-amber-600 mb-6">Quick Links</h6>

  <div className="grid gap-3 ">

    <NavLink 
      to="/" 
      className="hover:text-pink-400 transition hover:translate-x-2"
    >
      Home
    </NavLink>

    <NavLink 
      to="/about" 
      className="hover:text-pink-400 transition hover:translate-x-2"
    >
      About
    </NavLink>

    <NavLink 
      to="/services" 
      className="hover:text-pink-400 transition hover:translate-x-2"
    >
      Services
    </NavLink>

    <NavLink 
      to="" 
      className="hover:text-pink-400 transition hover:translate-x-2"
    >
      Contact
    </NavLink>

    <NavLink 
      to="" 
      className="hover:text-pink-400 transition hover:translate-x-2"
    >
      FAQ
    </NavLink>

    <NavLink 
      to="" 
      className="hover:text-pink-400 transition hover:translate-x-2"
    >
      Shop
    </NavLink>

  </div>
</nav>

       

        {/*  NEWSLETTER */}
        <nav className="bg-gradient-to-br from-pink-500/10 to-blue-500/10 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/10 hover:shadow-pink-500/40 transition">
          <h6 className="text-lg font-bold text-amber-600 mb-5">Newsletter</h6>

          <p className="text-gray-300 mb-5">
            Join our VIP list for exclusive offers and pet care tips.
          </p>

          <div className="join w-full mb-6">
            <input
              type="email"
              placeholder="mail@site.com"
              className="input join-item w-full text-black"
            />
            <button className="btn join-item bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:opacity-90 animate-pulse">
              Join
            </button>
          </div>

          {/* SOCIAL */}
          <div>
            <p className="font-semibold mb-3">Find Us On</p>
            <div className="flex gap-5 text-3xl">
              <FaSquareFacebook className="hover:text-blue-500 hover:scale-125 transition" />
              <FaSquareTwitter className="hover:text-sky-400 hover:scale-125 transition" />
              <GrInstagram className="hover:text-pink-500 hover:scale-125 transition" />
              <BsWhatsapp className="hover:text-green-400 hover:scale-125 transition" />
            </div>
          </div>
        </nav>

      </footer>

      {/* ⚡ BOTTOM BAR */}
      <div className="relative z-10 text-center py-5 text-sm text-gray-400 tracking-widest bg-black/50">
        © 2025 PetLove – All Rights Reserved
      </div>

    </div>
  );
};

export default Footer;
