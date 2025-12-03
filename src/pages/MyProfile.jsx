import React, { use } from 'react';
import { Link } from "react-router";
import { FaUserEdit, FaIdCard, FaCheckCircle, FaUserShield } from "react-icons/fa"; // Added more icons
import { AuthContext } from '../provider/AuthProvider';

const MyProfile = () => {
    const { user } = use(AuthContext); 
    
    const isEmailVerified = user?.emailVerified;
    const verificationText = isEmailVerified ? "Verified" : "Unverified";
    const verificationColor = isEmailVerified ? "text-green-600" : "text-red-500";
    const verificationIcon = isEmailVerified ? <FaCheckCircle /> : <FaUserShield />;


    return (
        <div className="min-h-screen mt-14 bg-gray-50 flex justify-center items-center px-4">
            <div className="card w-full max-w-lg bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-[1.01] rounded-2xl border-t-4 border-pink-500">
                
                {/* Header/Background Area for Visual Impact */}
                <div className="bg-pink-600 h-24 rounded-t-2xl relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-80 rounded-t-2xl"></div>
                </div>

                <div className="p-8 -mt-20">  
                    <div className="flex flex-col mb-5 items-center text-center">
                        
                        {/* Profile Image with Enhanced Ring */}
                        <div className="avatar">
                            <div className="w-36 h-36   rounded-full border-4 border-white shadow-lg overflow-hidden ring ring-pink-500 ring-offset-4 ring-offset-white">
                                <img
                                    src={
                                        user?.photoURL
                                            ? user.photoURL
                                            : "https://cdn-icons-png.flaticon.com/512/847/847969.png"
                                    }
                                    alt="User Profile"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>

                        {/* User Info with Stronger Typography */}
                        <h2 className="text-2xl font-bold text-gray-800 mb-1 tracking-wide">
                            {user?.displayName || "User Name"} 
                        </h2>
                        <p className="text-lg font-medium text-gray-500 mb-6">{user?.email || "No Email Provided"}</p>

                        <Link to=""> 
                           <button
                             className="btn bg-pink-600 text-white border-none btn-lg shadow-md hover:bg-pink-700 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-0.5 flex items-center gap-2 font-bold rounded-full px-8"
                           >
                              <FaUserEdit className="text-xl" /> Edit Profile
                           </button>
                        </Link>
                    </div>

                    {/* Extra details with Divider and Card Style */}
                    <div className="mt-10 border-t pt-6">
                        <h3 className="text-xl font-bold text-gray-700 mb-4 flex items-center gap-2">
                           <FaIdCard className="text-pink-600" /> Account Details
                        </h3>
                        
                        <div className="space-y-4 text-left text-gray-700">
                            {/* User ID */}
                            <div className="p-3 bg-gray-50 rounded-lg flex justify-between items-center border border-gray-200">
                                <span className="font-semibold text-gray-600">User ID:</span>
                                <span className="font-mono text-sm break-all text-purple-600">{user?.uid || "N/A"}</span>
                            </div>

                            {/* Email Verified */}
                            <div className="p-3 bg-gray-50 rounded-lg flex justify-between items-center border border-gray-200">
                                <span className="font-semibold text-gray-600">Email Status:</span>
                                <span className={`font-bold flex items-center gap-1 ${verificationColor}`}>
                                    {verificationIcon} {verificationText}
                                </span>
                            </div>

                            {/* Provider */}
                            <div className="p-3 bg-gray-50 rounded-lg flex justify-between items-center border border-gray-200">
                                <span className="font-semibold text-gray-600">Sign-in Provider:</span>
                                <span className='text-blue-500 font-medium'>
                                    {user?.providerData?.[0]?.providerId || "Email/Password"}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;