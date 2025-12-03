import React from 'react';
import logo from '../assets/logo1.jpg';
import { FcCallback } from 'react-icons/fc';
import { FaSquareFacebook, FaSquareTwitter } from 'react-icons/fa6';
import { GrInstagram } from 'react-icons/gr';
import { BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='bg-base-200 opacity-80 bg-[url("https://placedog.net/910/450")] bg-cover bg-center bg-no-repeat'
    >
      <footer className="footer sm:footer-horizontal  text-base-content p-10">
        <aside className='space-y-3 '>
          <div className='flex items-center gap-2'>
            <img className='h-14 w-22 rounded-md' src={logo} alt="" />
            <h3 className='text-3xl text-blue-700 font-bold'>PetLove</h3>
          </div>
          <p className='font-semibold text-black text-lg'>
            At <span className='text-2xl text-pink-500 font-bold'>PetLove</span>, we believe every pet deserves warmth, <br /> comfort, and love—especially during the chilly winter <br /> months. Our mission is to help pet owners keep their <br /> furry friends healthy, happy, and safe when temperatures <br /> drop.
            Providing reliable service since 1992
          </p>
          <div className='flex items-center gap-3' >
            <FcCallback size={48} />
            <div className=''>
              <h5 className='text-2xl text-blue-300 font-bold'>(913) 756-3126</h5>
              <h6 className='text-blue-200 text-lg'>Got Questions? Call us 24/7</h6>
            </div>
          </div>

        </aside>
        <nav className='mr-15'>
          <h6 className=" text-2xl text-amber-500 font-bold">Working Hours</h6>
          <div className='space-y-7 mt-7 bg-amber-100  p-3 rounded-md'>
            <p className='text-lg font-semibold'>Sun – Thus: <span className='ml-5 font-bold text-blue-950'>7am – 6pm</span></p>
            <p className='text-lg font-semibold'>Saturday: <span className='ml-8 font-bold text-blue-950'>9am – 4pm</span></p>
            <p className='text-lg font-semibold'> Fri: <span className='ml-20 font-bold text-blue-950'>Closed</span></p>
          </div>
        </nav>
        <nav className='mr-15'>
          <h6 className="text-2xl font-bold mb-4 text-amber-500">Useful Links</h6>

          <a href='/' className="link link-hover font-bold text-xl text-white">Home</a>
          <a href='/about' className="link link-hover font-bold text-xl  text-white">About</a>
          <a href='/services' className="link link-hover font-bold text-xl text-white">Services</a>
          <a className="link link-hover font-bold text-xl text-white">Contact</a>
          <a className="link link-hover font-bold text-xl text-white">FAQ</a>
          <a className="link link-hover font-bold text-xl text-white">Shop</a>
          <a className="link link-hover font-bold text-xl text-white">Sale</a>

        </nav>
        <nav>
          <h6 className="text-2xl font-bold text-amber-500 mb-4">Newsletter</h6>
          <div className='space-y-7'>
            <p className='font-semibold text-lg text-amber-600'>Be first in the queue! Get <br /> our latest
              news straight to your inbox.</p>
            <div>
              <div className="join">
                <div>
                  <label className="input validator join-item">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </g>
                    </svg>
                    <input type="email" placeholder="mail@site.com" required />
                  </label>
                  <div className="validator-hint hidden">Enter valid email address</div>
                </div>
                <button className="btn btn-neutral join-item">Join</button>
              </div>
            </div>
            <div className=''>
              <span className='font-bold '>Find Us On</span>
              <div className='flex mt-2 gap-5'>
                <FaSquareFacebook size={34} />
                <FaSquareTwitter size={34} />
                <GrInstagram size={34} />
                <BsWhatsapp size={34} />
              </div>
            </div>
          </div>
        </nav>
      </footer>
      <p className='text-center my-3 font-bold text-xl text-red-700'>Copyright © 2025 - All right reserved</p>
    </div>
  );
};

export default Footer;