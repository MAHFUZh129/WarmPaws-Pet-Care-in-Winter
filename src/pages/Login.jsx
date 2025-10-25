import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { toast} from 'react-hot-toast';

const Login = () => {
    const [show,setShow]= useState(false);
    const emailRef=useRef(null)
    const {login,googleSignin,reset}=use(AuthContext);
    const location=useLocation();
    const navigate=useNavigate();
    // console.log(location)
    const [err,setErr]=useState("")
    const handlelogin=(e)=>{
         e.preventDefault();
        const form=e.target
        const email =form.email.value
        const password =form.password.value
        // console.log({password,email})

        login(email,password)
        .then((result)=>{
           const user =result.user
           console.log(user)
           toast.success("Logged In Successfully");
           navigate(`${location.state?location.state:"/"}`)
        })
        .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    setErr('Password is Incorrect')
  });

    }

    const handleReset=()=>{
      const email =emailRef.current.value;
      reset(email)
      .then((res) => {
    toast.success('Password reset email sent!')
    // ..
  })
  .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
    toast.error(errorMessage)
    // ..
  });
    }


    const handleGoogleSignin=()=>{
      googleSignin()
      .then((result)=>{
           const user =result.user
           console.log(user)
           toast.success("Logged In With Google Successfully");
           navigate(`${location.state?location.state:"/"}`)
           
        })
         .catch((error) => {
    
    setErr('Happened something wrong')
  });
        
    }
    return (
        <div >
             <div className="flex col-span-6 justify-center  md:min-h-screen bg-purple-300 items-center   p-5 ">
      <div className=" w-full max-w-md shadow-xl rounded-xl bg-base-100 p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Login Your Account</h2>

        <form onSubmit={handlelogin}  className="space-y-4">
          

          {/* Email Field */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              required
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>
          {/* password */}
          <div className="relative">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type={show?"text":'password'}
              name="password"
             placeholder="Enter your password"
              className="input input-bordered w-full"
            />
            <span onClick={()=>setShow(!show)} className="absolute right-5 top-9"> 
                {show?<IoEyeOff />:<FaEye />}</span>
          </div>
          {err && <h3 className='text-red-700'>{err}</h3>}
            <button onClick={handleReset} type='button' className="link link-hover">Forget Password?</button>
          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-full text-white font-semibold"
          >
            Log In
          </button>
          {/* google signin */}
          <button onClick={handleGoogleSignin}
            type="button" className="flex btn btn-primary items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2  w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer" >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="google"
                    className="w-5 h-5"
                  />
                  Continue with Google
                </button>
                <h5 className='text-center font-semibold mt-3 '>Dont’t Have An Account ? <Link to='/signup' className='text-secondary link link-hover'>Sign Up</Link></h5>
        </form>
      </div>
    </div>
        </div>
    );
};

export default Login;