import React from 'react';
import { Link } from 'react-router';

const Signup = () => {
    return (
        <div>
            <div className="flex col-span-6 justify-center  md:min-h-screen bg-purple-300 items-center   p-5 ">
      <div className=" w-full max-w-md shadow-xl rounded-xl bg-base-100 p-6">
        <h2 className="text-2xl font-bold text-center mb-4">SignUp Here</h2>

        <form  className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              required
             placeholder="Enter your name"
              className="input input-bordered w-full"
            />
          </div>
           {/* photourl */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
             placeholder="Enter your photo url"
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
              required
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>
          {/* password */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
            required
              type="password"
              name="name"
             placeholder="Enter your password"
              className="input input-bordered w-full"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-full text-white font-semibold"
          >
            Sign Up
          </button>
          {/* google signin */}
          <button 
            type="button" className="flex btn btn-primary items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2  w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer" >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="google"
                    className="w-5 h-5"
                  />
                  Continue with Google
                </button>
                <h5 className='text-center font-semibold mt-3 '>Already Have An Account ? <Link to='/login' className='text-secondary link link-hover'>Log In</Link></h5>
        </form>
      </div>
    </div>
        </div>
    );
};

export default Signup;