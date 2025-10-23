import React from 'react';
import R from '../assets/view-cats-dogs-being-friends.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router';


const Slides = () => {
    return (
        <div>
             <Swiper
  spaceBetween={30}
  slidesPerView={1}
  loop={true}
  autoplay={{ delay: 4000 }}
  pagination={{ clickable: true }}
  navigation={true}
  modules={[Navigation, Pagination, Autoplay]}
  className=""
>
  {/* Slide 1 */}
  <SwiperSlide>
    <div className="relative w-full h-[450px]">
      <img
        src={R}
        alt="Pets"
        className="w-full h-full object-cover rounded-lg brightness-75"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start px-10 text-white space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
          Caring For Your Pets Like Family
        </h2>
        <p className="max-w-lg text-lg text-gray-200">
          Your furry friends deserve love, care, and comfort — we provide it all with passion.
        </p>
        <Link to="/services" className="btn btn-primary font-semibold mt-3">
          Explore Services
        </Link>
      </div>
    </div>
  </SwiperSlide>

  {/* Slide 2 */}
  <SwiperSlide>
    <div className="relative w-full h-[450px]">
      <img
        src="https://i.ibb.co.com/p6GkNLjS/images-1.jpg"
        alt="Cute kitten"
        className="w-full h-full object-cover rounded-lg brightness-75"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start px-10 text-white space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
          Professional Grooming & Health Checkups
        </h2>
        <p className="max-w-lg text-lg text-gray-200">
          Expert vets and stylists to keep your pets looking and feeling their best.
        </p>
        <Link  className="btn btn-primary font-semibold mt-3">
          Learn More
        </Link>
      </div>
    </div>
  </SwiperSlide>

  {/* Slide 3 */}
  <SwiperSlide>
    <div className="relative w-full h-[450px]">
      <img
        src="https://placedog.net/900/450"
        alt="Cute dog"
        className="w-full h-full object-cover rounded-lg brightness-75"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start px-10 text-white space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
          Trusted by Pet Lovers Worldwide
        </h2>
        <p className="max-w-lg text-lg text-gray-200">
          Join thousands of happy pet parents who trust us for quality care.
        </p>
        <Link  className="btn btn-primary font-semibold mt-3">
          Contact Us
        </Link>
      </div>
    </div>
  </SwiperSlide>

  {/* Slide 4 */}
  <SwiperSlide>
    <div className="relative w-full h-[450px]">
      <img
        src="https://i.ibb.co.com/PGTKSbny/beyza-yurtkuran-3-Ex793-Z3-Vx0-unsplash.webp"
        alt="Happy kitten"
        className="w-full h-full object-cover rounded-lg brightness-75"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start px-10 text-white space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
          Loving Care for Every Pet
        </h2>
        <p className="max-w-lg text-lg text-gray-200">
          We treat every pet like our own, giving them the attention and care they deserve.
        </p>
        <Link to="/services" className="btn btn-primary font-semibold mt-3">
          View Services
        </Link>
      </div>
    </div>
  </SwiperSlide>

  {/* Slide 5 */}
  <SwiperSlide>
    <div className="relative w-full h-[450px]">
      <img
        src="https://placedog.net/910/450"
        alt="Playful dog"
        className="w-full h-full object-cover rounded-lg brightness-75"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start px-10 text-white space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
          Health & Happiness Guaranteed
        </h2>
        <p className="max-w-lg text-lg text-gray-200">
          Our mission is to keep your pets happy, healthy, and full of life every day.
        </p>
        <Link  className="btn btn-primary font-semibold mt-3">
          Learn More
        </Link>
      </div>
    </div>
  </SwiperSlide>
</Swiper>

           
        </div>
    );
};

export default Slides;