import logo from '../assets/logo1.jpg';
import { Link, NavLink, } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { use } from 'react';
import { RxAvatar } from 'react-icons/rx';
import { toast } from 'react-hot-toast';

const Navbar = () => {
  const { user, logout } = use(AuthContext)
  // console.log(user)
  const hanldeLogout = () => {
    logout()
      .then(() => {
        toast.success("Sign-out Successful")
      })
      .catch((error) => {
        console.log(error)
      });
  }
  return (
    <div >
      <div className="navbar md:px-8 bg-base-300 fixed top-0 z-50 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100
               rounded-box z-1 mt-3 w-52 p-2 shadow">
                <NavLink to="/" className={({ isActive }) => `hover:text-primary hover:bg-base-200 transition duration-300 ease-in-out relative group p-2 ${isActive ? " text-primary" : ""}`} >
            Home
          </NavLink>
                <NavLink to="/services" className={({ isActive }) => `hover:text-primary hover:bg-base-200 transition duration-300 ease-in-out relative group p-2 ${isActive ? " text-primary" : ""}`} >
            Services
          </NavLink>
                <NavLink to="/about" className={({ isActive }) => `hover:text-primary hover:bg-base-200 transition duration-300 ease-in-out relative group p-2 ${isActive ? " text-primary" : ""}`} >
          About Us
          </NavLink>
            
              {
                user && <NavLink className={({ isActive }) => `hover:text-primary hover:bg-base-200 transition duration-300 ease-in-out relative group p-2 ${isActive ? " text-primary" : ""}`} to='/profile'>My Profile</NavLink>

              }

            </ul>
          </div>
          <div className='flex items-center gap-2'>
            <img className='h-14 w-18 ' src={logo} alt="" />
            <h3 className='text-2xl text-primary font-bold hidden md:block'>PetLove</h3>
          </div>
        </div>
        <div className="navbar-center text-lg font-bold gap-3 hidden lg:flex">
          <NavLink to="/" className={({ isActive }) => `hover:text-primary hover:bg-base-200 transition duration-300 ease-in-out relative group p-2 ${isActive ? "border-b-2 border-primary" : ""}`} >
            Home
          </NavLink>
          <NavLink className={({ isActive }) => `hover:text-primary hover:bg-base-200 transition duration-300 ease-in-out relative group p-2 ${isActive ? "border-b-2 border-primary" : ""}`}  to='/services'>Services</NavLink>
          <NavLink className={({ isActive }) => `hover:text-primary hover:bg-base-200 transition duration-300 ease-in-out relative group p-2 ${isActive ? "border-b-2 border-primary" : ""}`}  to='/about'>About Us</NavLink>
          {
            user && <NavLink className={({ isActive }) => `hover:text-primary hover:bg-base-200 transition duration-300 ease-in-out relative group p-2 ${isActive ? "border-b-2 border-primary" : ""}`}  to='/profile'>My Profile</NavLink>

          }
        </div>
        <div className="navbar-end gap-4">
          {
            user ? (<span className='flex items-center text-lg text-green-600 font-bold gap-1'><RxAvatar size={34} /><span className='hidden hover:text-pink-500 md:block'>{user.displayName}</span></span>) : (<Link to='/signup' className="btn text-lg btn-secondary font-bold">Sign Up</Link>)
          }
          {
            user ? <button onClick={hanldeLogout} className="btn text-lg btn-primary font-bold">Log Out</button> : (<Link to='/login' className="btn btn-primary text-lg font-bold">Log In</Link>)
          }

        </div>
      </div>
    </div>
  );
};

export default Navbar;