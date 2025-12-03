import React from 'react';
import { Link } from 'react-router'; 
import { FaExclamationTriangle, FaHome, FaSearch } from 'react-icons/fa';

// This component uses Tailwind CSS for styling

const ErrorPage = ({ errorCode = 404, errorMessage = "Page Not Found" }) => {

    let titleText = "";
    let descriptionText = "";

    switch (errorCode) {
        case 404:
            titleText = "Oops! Page Not Found";
            descriptionText = "We couldn't locate the specific page you were looking for. It might have been moved, deleted, or you may have mistyped the address.";
            break;
        case 500:
            titleText = "Internal Server Error";
            descriptionText = "Something went wrong on our end. We apologize for the inconvenience and are working to fix this immediately.";
            break;
        default:
            titleText = "An Unexpected Error Occurred";
            descriptionText = "Something went wrong. Please try refreshing the page or navigating back to the homepage.";
            break;
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-gray-800 p-4">
            
            <div className="text-center max-w-xl">
                
                {/* Error Code and Icon */}
                <div className="flex items-center justify-center mb-6">
                    <FaExclamationTriangle className="text-red-500 text-6xl mr-4 animate-pulse" />
                    <h1 className="text-8xl font-extrabold text-gray-900 border-l-4 border-red-500 pl-4">
                        {errorCode}
                    </h1>
                </div>

                {/* Main Title and Message */}
                <h2 className="text-4xl font-bold mb-4 tracking-tight text-red-600">
                    {titleText}
                </h2>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {descriptionText}
                </p>

                {/* Helpful Actions Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                    <p className="text-lg font-semibold mb-4 text-gray-700">What you can do next:</p>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        
                        {/* Go Home Button */}
                        <Link 
                            to="/" 
                            className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out transform hover:scale-105"
                        >
                            <FaHome className="mr-2" /> Go to Homepage
                        </Link>

                        {/* Search/Help Button */}
                        <Link 
                            to="/help" 
                            className="flex items-center justify-center px-6 py-3 border border-blue-600 text-base font-medium rounded-full text-blue-600 bg-white hover:bg-blue-50 transition duration-150 ease-in-out"
                        >
                            <FaSearch className="mr-2" /> Search or Get Help
                        </Link>
                    </div>

                    <p className="mt-6 text-sm text-gray-500">
                        If the issue persists, please contact our support team.
                    </p>
                </div>
                
            </div>
            
        </div>
    );
};

export default ErrorPage;