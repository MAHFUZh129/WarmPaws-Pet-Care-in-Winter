import React from 'react';
import { TiStarHalfOutline } from 'react-icons/ti';
import R from '../assets/view-cats-dogs-showing-friendship.jpg';
import { toast } from 'react-hot-toast';

const DetailsCard = ({ details }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Booked Successfully ✅");
  };

  return (
    <div className="relative overflow-hidden py-28 px-5">

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,0,150,0.12),_transparent_70%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* ✅ LEFT SIDE CARD */}
        <div className="space-y-5">

          {/* ✅ MOBILE HEADING */}
          <div className="lg:hidden text-center space-y-3">
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
              Welcome To The Page
            </h2>
            <p className="text-lg text-blue-300 font-semibold">
              Stay With Us For Best Experience
            </p>
          </div>

          {/* ✅ MAIN FLOATING GLASS CARD */}
          <div className="bg-white/10 backdrop-blur-2xl p-7 rounded-3xl shadow-2xl border border-white/20 hover:shadow-pink-500/40 transition">

            {/* ✅ IMAGE */}
            <div className="overflow-hidden rounded-2xl mb-6">
              <img
                className="w-full h-[300px] object-cover hover:scale-110 transition duration-700"
                src={details.image}
                alt=""
              />
            </div>

            {/*  TITLE */}
            <h1 className="text-3xl font-bold text-teal-400 mb-4">
              {details.serviceName}
            </h1>

            {/*  RATING & PRICE */}
            <div className="flex flex-wrap gap-8 items-center mb-6">
              <span className="flex items-center gap-2 font-bold  text-white">
                <span className="text-amber-500">Rating:</span>
                <TiStarHalfOutline size={22} className="text-amber-300" />
                {details.rating}
              </span>

              <span className="font-bold  text-white">
                <span className="text-amber-500 mr-2">Price:</span>
                {details.price}
              </span>
            </div>

            {/*  PROVIDER INFO */}
            <div className="bg-white/10 rounded-xl p-3 grid grid-cols-1 sm:grid-cols-2 gap-1 text-white text-md">
              <p><span className="font-bold text-amber-500">Provider:</span> {details.providerName}</p>
              <p><span className="font-bold text-amber-500">Email:</span> {details.providerEmail}</p>
              <p><span className="font-bold text-amber-500">Slots:</span> {details.slotsAvailable}</p>
              <p><span className="font-bold text-amber-500">Category:</span> {details.category}</p>
            </div>

            {/*  DESCRIPTION */}
            <div className="mt-4 text-white">
              <h3 className="text-lg font-bold mb-2">Description</h3>
              <p className="">
                {details.description}
              </p>
            </div>

            {/* BOOKING FORM */}
            <div className="mt-10 bg-black/40 rounded-2xl p-6 border border-white/20">
              <div className="max-w-md mx-auto">

                <h2 className="text-2xl font-bold text-center mb-6 text-white">
                  Book This Service
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">

                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="input w-full bg-white/90"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="input w-full bg-white/90"
                  />

                  <button
                    type="submit"
                    className="btn w-full text-white font-bold text-lg bg-gradient-to-r from-pink-500 to-blue-500 hover:scale-105 transition"
                  >
                    Confirm Booking
                  </button>

                </form>
              </div>
            </div>

          </div>
        </div>

        {/*  RIGHT SIDE BANNER */}
        <div className="hidden lg:block text-center space-y-6">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Welcome To The Page
          </h2>
          <p className="text-xl font-bold text-blue-300">
            Stay With Us For Best Experience
          </p>

          <div className="relative group">
            <img
              className="rounded-3xl shadow-2xl h-[520px] w-full object-cover group-hover:scale-105 transition duration-700"
              src={R}
              alt=""
            />
            <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DetailsCard;
