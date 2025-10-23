import { TiStarHalfOutline } from 'react-icons/ti';
import { Link } from 'react-router';

const ServiceCard = ({card}) => {
    return (
            <div className=' rounded-md p-5 bg-base-300'>
            <img className='h-50 rounded-md w-full' src={card.image} alt="" />
            <h1 className='text-blue-950 font-semibold text-xl'>{card.serviceName}</h1>
            <div className='flex justify-between my-4'>
                <span className='flex items-center font-extrabold text-lg gap-2'><TiStarHalfOutline size={22} />{card.rating}</span>
                <span className='font-semibold text-blue-800 text-2xl'>{card.price}</span>
            </div>
              <Link to={`/servicesDetails/${card.serviceId}`}  className="btn btn-accent">View Details</Link>
            </div>
       
    );
};

export default ServiceCard;