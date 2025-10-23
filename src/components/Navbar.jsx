import logo from '../assets/logo1.jpg';
import { Link,  } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { use } from 'react';
import { RxAvatar } from 'react-icons/rx';
import { toast } from 'react-toastify';

const Navbar = () => {
        const{user,logout} = use(AuthContext)
        const hanldeLogout=()=>{
              logout()
              .then(() => {
             toast.success("Sign-out Successful")
              })
              .catch((error) => {
                 console.log(error)
              });
        }
    return (
        <div>
            <div className="navbar bg-base-300 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link to='/'>Home</Link></li>
        <li> <Link to='/services'>Services</Link></li>
        <li><Link>My Profile</Link></li>
      </ul>
    </div>
    <div className='flex items-center gap-2'>
    <img className='h-14 w-22 rounded-md' src={logo} alt="" />
    <h3 className='text-2xl text-blue-600 font-bold hidden md:block'>PetLove</h3>
    </div>
  </div>
  <div className="navbar-center font-bold gap-3 hidden lg:flex">
    <Link to='/'>Home</Link>
    <Link to='/services'>Services</Link>
    <Link>My Profile</Link>
  </div>
  <div className="navbar-end gap-5">
    {
      user?(<span className='flex items-center text-lg text-green-600 font-bold gap-1'><RxAvatar size={34} /><span className='hidden md:block'>{user.email}</span></span>):(<Link to='/signup' className="btn btn-secondary font-bold">Sign Up</Link>)
    }
    {
      user? <button onClick={hanldeLogout} className="btn btn-primary font-bold">Log Out</button> :(    <Link to='/login' className="btn btn-primary font-bold">Log In</Link>)
    }
    
  </div>
</div>
        </div>
    );
};

export default Navbar;