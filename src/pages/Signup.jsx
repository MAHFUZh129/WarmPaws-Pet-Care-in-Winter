import React, { use, useState } from 'react';
import { Link,  useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { toast} from 'react-hot-toast';


const Signup = () => {

        const {createUser,googleSignin,setUser,updateUser}=use(AuthContext)
        const [err, setErr] = useState('');
         const [show,setShow]= useState(false)
        const navigate =useNavigate()
        const handleReg=(e)=>{
        e.preventDefault();
        const form=e.target
        
        const name =form.name.value
        const photo =form.photo.value
        const email =form.email.value
        const password =form.password.value
        // console.log(password,name,email,photo)

         // Password validation logic
    if (password.length < 6) {
      setErr('Password must be at least 6 characters long.');
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setErr('Password must contain at least one uppercase letter.');
      return;
    }
    if (!/[a-z]/.test(password)) {
      setErr('Password must contain at least one lowercase letter.');
      return;
    }


        createUser(email,password)
        .then((result)=>{
           const user =result.user
           updateUser({displayName:name, photoURL:photo})
           .then(()=>{
              setUser({...user, displayName:name, photoURL:photo})
              toast.success("Signed In Successfully");
              navigate('/')
           })
           .catch((error) => {
               toast.error(error);
               setUser(user)
});

        })
        .catch((error) => {
          toast.error("Something went wrong");
  });

    }


    const handleGoogleSignin=()=>{
          googleSignin()
          .then((result)=>{
               const user =result.user
               console.log(user)
               toast.success("Sign Up With Google Successfully");
               navigate('/')
               
            })
             .catch((error) => {
        
        setErr('Happened something wrong')
      });
            
        }


    return (
        <div>
            <div className="flex col-span-6 justify-center  md:min-h-screen bg-purple-300 items-center   p-5 ">
      <div className=" w-full max-w-md shadow-xl rounded-xl bg-base-100 p-6">
        <h2 className="text-2xl font-bold text-center mb-4">SignUp Your Account</h2>

        <form onSubmit={handleReg}  className="space-y-4">
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
          <div className="relative">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
            required
              type={show?"text":'password'}
              name="password"
             placeholder="Enter your password"
              className="input input-bordered w-full"
            />
            <span onClick={()=>setShow(!show)} className="absolute right-5 top-9"> 
                {show?<IoEyeOff />:<FaEye />}</span>
          </div>
            {err && <h3 className='text-red-700'>{err}</h3>}
          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-full text-white font-semibold"
          >
            Sign Up
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
                <h5 className='text-center font-semibold mt-3 '>Already Have An Account ? <Link to='/login' className='text-secondary link link-hover'>Log In</Link></h5>
        </form>
      </div>
    </div>
        </div>
    );
};

export default Signup;