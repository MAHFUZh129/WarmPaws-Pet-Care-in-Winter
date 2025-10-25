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
  className="mt-23 md:mt-0"
>

{/* Slide 1 */}
      <SwiperSlide>
        <div className="relative w-full h-[500px]">
          
          <img
            src='https://i.ibb.co.com/RGmn06gv/download-13.jpg'
            alt="Winter Pets"
            className="w-full h-full object-cover rounded-lg brightness-75"
          />
        
          <div className="absolute inset-0 bg-gradient-to-b from-blue-100/40 via-white/10 to-blue-200/30"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-start px-10 md:px-20 text-white space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
              Cozy Winter Care for Your Pets
            </h2>
            <p className="max-w-lg text-lg text-gray-100/90">
              Keep your furry friends warm, happy, and healthy this winter season.
            </p>
            <Link
              to="/services"
              className="btn btn-primary font-semibold mt-3"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </SwiperSlide>

       {/* Slide 2 */}
      <SwiperSlide>
        <div className="relative w-full h-[500px]">
          <img
            src="https://i.ibb.co.com/9knDr0Sr/images-2.jpg"
            alt="Winter Kitten"
            className="w-full h-full object-cover rounded-lg brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-200/40 via-white/10 to-blue-300/40"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-start px-10 md:px-20 text-white space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
              Snowy Adventures Await
            </h2>
            <p className="max-w-lg text-lg text-gray-100/90">
              Fun, care, and warmth for your pets, even in the coldest days.
            </p>
            <Link  className="btn btn-primary font-semibold mt-3">
              Learn More
            </Link>
          </div>
        </div>
      </SwiperSlide>
      {/* Slide 3 */}
      <SwiperSlide>
        <div className="relative w-full h-[500px]">
          <img
            src="https://i.ibb.co.com/v6WcvQSg/a640ac20-bd34-11ef-bf47-953e7325b283-jpg.webp"
            alt="Winter Dog"
            className="w-full h-full object-cover rounded-lg brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-300/40 via-white/10 to-blue-400/40"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-start px-10 md:px-20 text-white space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
              Winter Health & Warmth
            </h2>
            <p className="max-w-lg text-lg text-gray-100/90">
              Professional care ensures your pets are safe, cozy, and full of life.
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

  {/* Slide 5 */}
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

  {/* Slide 6 */}
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

  {/* Slide 7 */}
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

  {/* Slide 8 */}
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