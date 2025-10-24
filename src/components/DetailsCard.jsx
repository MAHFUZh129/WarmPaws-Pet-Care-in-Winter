import React from 'react';
import { TiStarHalfOutline } from 'react-icons/ti';
import R from '../assets/view-cats-dogs-showing-friendship.jpg';
import { toast } from 'react-hot-toast';

const DetailsCard = ({details}) => {
     
    const handleSubmit=(e)=>{
        e.preventDefault()
        toast.success("Booked Successfully");
        
    }

    return (
        <div className='md:flex justify-between gap-15 items-center md:py-20 p-5 md:p-0 md:pl-15 '>
            <div className='md:hidden mb-5 block space-y-8'>
                <h2 className='text-5xl text-center text-purple-700 font-bold'> Welcome To The Page!!</h2>
                <h2 className='text-3xl text-center text-blue-700 font-bold'> Stay With Us For Best Experience.</h2>
             </div>
            <div className='md:w-[650px] rounded-md p-5 bg-base-300'>
                        <img className=' rounded-md w-full' src={details.image} alt="" />
                        <h1 className='text-green-700 font-semibold text-xl'>{details.serviceName}</h1>
                        <div className='flex  my-4'>
                            <span className='flex items-center font-extrabold text-lg gap-2'><span className='text-amber-500 text-lg font-bold mr-2'>Ratings:</span><TiStarHalfOutline size={22} />{details.rating}</span>
                              <div className="divider  divider-horizontal"></div>
                              <div className="divider  divider-horizontal"></div>
                            <span className='font-semibold text-blue-800 text-lg'><span className='text-amber-500 font-bold mr-4'>Price:</span>{details.price}</span>
                        </div>
                        <div className='my-5 text- rounded-md py-6 pl-3 bg-amber-100'>
                            <h3>Provider Name: <span className='ml-4 font-semibold'>{details.providerName}</span></h3>
                            <h3>Provider Email: <span className='ml-5 font-semibold'>{details.providerEmail}</span></h3>
                            <h3>Slots Available: <span className='ml-5 font-semibold'>{details.slotsAvailable}</span></h3>
                            <h3>Category: <span className='ml-14 font-semibold'>{details.category}</span></h3>
                        </div>
                        <div>
                            <h3 className='text-lg font-bold'>Description:</h3>
                            <p>{details.description}</p>
    <div className="flex justify-center items-center rounded-md mt-6 p-5 bg-base-200">
      <div className=" w-full max-w-md shadow-xl bg-base-100 p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Book Service</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              type="text"
              name="name"
             placeholder="Enter your name"
              className="input input-bordered w-full"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-full text-white font-semibold"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
     </div>
                        
             </div>
             <div className='hidden md:block space-y-8'>
                <h2 className='text-5xl text-center text-purple-700 font-bold'> Welcome To The Page!!</h2>
                <h2 className='text-3xl text-center text-blue-700 font-bold'> Stay With Us For Best Experience.</h2>
               <img className='flex-1 h-[950px] ' src={R} alt="" />
             </div>

        </div>
    );
};

export default DetailsCard;