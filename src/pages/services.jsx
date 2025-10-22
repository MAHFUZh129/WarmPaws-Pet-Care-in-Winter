import React from 'react';
import { useLoaderData } from 'react-router';
import ServiceCard from '../components/ServiceCard';

const services = () => {
        const data =useLoaderData();
        // console.log(data)

    return (
        <div className='w-11/12 py-10 mx-auto'>
             <h3 className='text-4xl text-center font-bold'>Our Services</h3>
            <div className=' w-11/12 mx-8 my-10 gap-8 grid grid-cols-1 md:grid-cols-3'>
                {
                    data.map((card)=><ServiceCard card={card}></ServiceCard>)
                }
               </div>
        </div>
    );
};

export default services;