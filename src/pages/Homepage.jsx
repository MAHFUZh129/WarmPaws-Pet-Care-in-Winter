import React from 'react';
import R from '../assets/view-cats-dogs-being-friends.jpg';
import { Link, useLoaderData } from 'react-router';
import ServiceCard from '../components/ServiceCard';
import WinterTips from '../components/WinterTips';
import ExpertVets from '../components/ExpertVets';

const Homepage = () => {
    const data =useLoaderData();
    // console.log(data)
    return (
            <div>
             <div className=' md:flex mt-25  justify-between items-center '>
            
            <div className='flex-1 space-y-5 ml-8'>
             <h3 className='  font-bold text-5xl'>The World's Best Team  for Pet Care Services</h3>
            <p className=' text-blue-950'> we’re proud to have a passionate and experienced team dedicated to giving  your pets the best care possible. From grooming and nutrition to health and comfort, our experts ensure your furry friends are always happy, healthy, and loved</p>
            
            <Link to='/sevices' className="btn mt-10  font-bold btn-active text-lg  btn-primary">Our Services</Link>

            </div>
            <img className='h-[350px] flex-col ' src={R} alt="" />
            </div>
            <div className=' w-11/12 mx-8 my-10 gap-8 grid grid-cols-1 md:grid-cols-3'>
                {
                    data.map((card)=><ServiceCard card={card}></ServiceCard>)
                }
               </div> 
            {/* extra section */}
       <section>
        <WinterTips></WinterTips>
        <ExpertVets></ExpertVets>
       </section>
            </div>
        
    ); 
};

export default Homepage;