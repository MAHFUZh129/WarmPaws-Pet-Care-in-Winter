import React from 'react';

const ExpertVets = () => {
    return (
        <div>
            <section className="my-16 text-center">
  <h2 className="text-4xl font-bold text-blue-900 mb-8">Meet Our Expert Vets</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12 mx-auto">
    {/* Vet 1 */}
    <div className="card bg-base-100 p-2 shadow-xl">
      <figure>
        <img className='h-52 rounded-md w-full' src="https://i.ibb.co.com/1t3DTYnN/download-9.jpg" alt="Dr. Sarah" />
      </figure>
      <div className="card-body">
        <h3 className="card-title">Dr. Sarah Johnson</h3>
        <p className='font-bold'>Specialist in Pet Nutrition & Winter Health</p>
      </div>
    </div>

    {/* Vet 2 */}
    <div className="card p-2 bg-base-100 shadow-xl">
      <figure>
        <img className='h-52 rounded-md w-full'  src="https://i.ibb.co.com/q3fV0mBH/download-10.jpg" alt="Dr. Mark" />
      </figure>
      <div className="card-body">
        <h3 className="card-title">Dr. Mark Daniels</h3>
        <p  className='font-bold'>Veterinary Surgeon & Skin Care Expert</p>
      </div>
    </div>

    {/* Vet 3 */}
    <div className="card p-2 bg-base-100 shadow-xl">
      <figure>
        <img className='h-52 rounded-md w-full'  src="https://i.ibb.co.com/wNPw9ZMv/download-11.jpg" alt="Dr. Emily" />
      </figure>
      <div className="card-body">
        <h3 className="card-title">Dr. Emily Carter</h3>
        <p  className='font-bold'>Behavior Specialist & Cold-Weather Trainer</p>
      </div>
    </div>
  </div>
</section> 
        </div>
    );
};

export default ExpertVets;