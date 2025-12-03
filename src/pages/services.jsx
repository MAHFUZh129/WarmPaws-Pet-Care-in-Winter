import React from 'react';
import { useLoaderData } from 'react-router';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
    // Assuming data is an array of service objects
    const data = useLoaderData();

    return (
        
                
        <div className="min-h-screen bg-gray-50 "> {/* Add a subtle background and padding */}
            
            {/* 🌟 Eye-Catching Header/Hero Section */}
            <header className="py-20 bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-xl ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    {/* Use a large, bold title */}
                    <h1 className="text-xl font-extrabold tracking-tight sm:text-6xl">
                        Our Specialized Services
                    </h1>
                    {/* Add a compelling subtitle */}
                    <p className="mt-4 text-xl opacity-90 max-w-2xl mx-auto">
                        Discover the solutions built for your success. Quality and expertise in every offering.
                    </p>
                    <div className="mt-8">
                        {/* Optional: Add a call-to-action button for a dynamic look */}
                        <a href="" className="inline-flex items-center text-2xl justify-center px-6 py-3 border border-transparent  font-medium rounded-full text-blue-600 bg-white hover:bg-gray-100 shadow-lg transition duration-300 ease-in-out">
                            Get a Free Consultation
                        </a>
                    </div>
                </div>
            </header>
            
            <div className='bg-gradient-to-r from-blue-200 to-teal-100 py-10  '> 
            <div className='max-w-11/12 mx-auto  '> 
                
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-2 ">
                    Explore Our Service Portfolio
                </h2>
                <h2 className="text-xl font-bold text-center italic text-amber-700  mb-12">
                    Expert Services Designed to Meet Your Needs.
                </h2>
                
                <div className=' w-full grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-7'>
                    {
                        // Check if data exists before mapping to prevent potential errors
                        data && data.map((card, index) => (
                            <ServiceCard key={index} card={card} />
                        ))
                    }
                </div>
                
                {/* 💡 Optional: Add a visual separator or footer element */}
                <div className="mt-10 border-t-4  border-dotted font-bold italic border-amber-500 pt-8 text-3xl text-center text-blue-700">
                    <p>Ready to get started? We are here to help.</p>
                </div>

            </div>
            </div>
        </div>
    );
};

export default Services;