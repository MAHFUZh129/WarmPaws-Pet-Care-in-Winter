
import R from '../assets/view-cats-dogs-being-friends.jpg';
import { Link, useLoaderData } from 'react-router';
import ServiceCard from '../components/ServiceCard';
import WinterTips from '../components/WinterTips';
import ExpertVets from '../components/ExpertVets';
import Slides from '../components/Slides';


const Homepage = () => {
  const data = useLoaderData();

  return (
    <div>
      <Slides></Slides>
      <div className="md:flex py-10 justify-between items-center">
        <div className="flex-1 space-y-5 ml-8">
          <h3 className="font-bold text-5xl">
            The World's Best Team for Pet Care Services
          </h3>
          <p className="text-sky-600 text-lg font-semibold">
            We’re proud to have a passionate and experienced team dedicated to
            giving your pets the best care possible. From grooming and nutrition
            to health and comfort, our experts ensure your furry friends are
            always happy, healthy, and loved.
          </p>

          <Link
            to="/services"
            className="btn mt-10 font-bold btn-active text-lg btn-primary"
          >
            Our Services
          </Link>
        </div>

        <img className="h-[350px] hidden md:block  " src={R} alt="Pet" />
      </div>

      <div className='bg-gradient-to-r from-blue-300 via-gray-200 to-teal-200 py-15'>
        <h4 className='text-center text-primary font-bold text-5xl'>Our Winter Pet Care Services</h4>
        <h4 className='text-center italic text-amber-700 mt-2 font-bold text-3xl'>From warmth to wellness — explore our full range of seasonal services.</h4>
        <div className="w-11/12 mx-auto my-10 gap-8 grid grid-cols-1 md:grid-cols-4">
          {data.map((card) => (
            <ServiceCard key={card.serviceId} card={card} />
          ))}
        </div>
      </div>

      {/* extra Section */}
      <section>
        <WinterTips />
        <ExpertVets />
      </section>
    </div>
  );
};

export default Homepage;



