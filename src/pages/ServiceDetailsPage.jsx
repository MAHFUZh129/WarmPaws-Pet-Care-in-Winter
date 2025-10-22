import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import DetailsCard from '../components/DetailsCard';

const ServiceDetailsPage = () => {
    const data =useLoaderData();
    const {id}=useParams();
    const [details , setDetails]=useState({});

    console.log(id,details)
    useEffect(()=>{
          const serviceDetails=data.find((detail)=>detail.serviceId==id)
          setDetails(serviceDetails)
        },[data,id])
    return (
        <div>        
            <DetailsCard details={details}></DetailsCard>    
         </div>
            
    );
};

export default ServiceDetailsPage;