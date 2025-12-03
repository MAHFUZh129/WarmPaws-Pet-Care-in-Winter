import React from 'react';

const About = () => {
  return (
    <div className="about-us-container p-10 mt-18 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      
      {/* 1. High-Impact Hero Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-teal-600 dark:text-teal-400">
          🐾 About Us: The Heart of Winter Pet Care
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Dedicated to ensuring every pet is safe, healthy, and cozy when the temperatures drop.
        </p>
      </header>

      {/* 2. Our Mission Section */}
      <section className="mission-section bg-teal-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg mb-12">
        <h2 className="text-3xl font-bold text-teal-700 dark:text-teal-400 mb-4">
          Our Mission: Warm Paws, Happy Pets
        </h2>
        <div className="flex flex-col md:flex-row items-start md:space-x-8">
          <div className="md:w-2/3">
            <p className="text-lg leading-relaxed">
              Our dedication stems from a simple, core belief: <strong className="text-orange-500">every pet deserves to be safe, healthy, and comfortable, regardless of the weather.</strong>
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              We understand that winter brings unique challenges—from dry skin and chapped paws to the dangers of freezing temperatures. Our mission is to provide you, the pet parent, with the <strong className="text-teal-600 dark:text-teal-300">reliable knowledge, premium products, and compassionate advice</strong> necessary to keep your furry family members thriving all season long.
            </p>
          </div>
          <div className="md:w-1/3 mt-6 md:mt-0 w-full">
            {/* Placeholder for an image or a compelling icon graphic */}
            <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400 italic">
                
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why We Exist - Responsive Table/Grid */}
      <section className="why-we-exist mb-12">
        <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-200 mb-6 text-center">
          ❄️ Why We Exist: Addressing Winter Challenges
        </h2>
        
        {/* Responsive Grid/Table for Eye-Catching Data */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Cold Exposure */}
          <ChallengeCard 
            title="Cold Exposure" 
            commitment="Providing expert guides on safe outdoor limits and proper pet winter apparel." 
            icon="🌬️" 
          />
          
          {/* Card 2: Dry Skin/Coat */}
          <ChallengeCard 
            title="Dry Skin/Coat" 
            commitment="Curating high-quality supplements and moisturizing balms to soothe winter dryness." 
            icon="🧴" 
          />

          {/* Card 3: Injury Prevention */}
          <ChallengeCard 
            title="Injury Prevention" 
            commitment="Offering protective paw waxes, booties, and de-icing safety tips." 
            icon="🩹" 
          />

          {/* Card 4: Nutrition Needs */}
          <ChallengeCard 
            title="Nutrition Needs" 
            commitment="Sharing tailored advice on adjusting your pet's diet for cold weather energy." 
            icon="🍲" 
          />

        </div>

        <blockquote className="mt-8 p-4 border-l-4 border-orange-500 bg-gray-50 dark:bg-gray-800 text-lg italic">
          <p className="text-gray-700 dark:text-gray-300">
            "Our Promise: We are more than just a resource; we are your partners in proactive pet health. We believe in prevention over treatment."
          </p>
        </blockquote>
      </section>

      {/* 4. Meet the Team Section */}
      <section className="team-section mb-12 bg-blue-50 dark:bg-gray-800 p-8 rounded-xl">
        <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-200 mb-6 text-center">
          💖 Meet the Team Behind the Care
        </h2>
        <ul className="space-y-4 max-w-2xl mx-auto">
          <TeamPillar 
            title="Veterinary Advisory" 
            description="Ensuring all our care guides and product recommendations are medically sound and based on the latest research." 
            icon="🩺" 
          />
          <TeamPillar 
            title="Product Curators" 
            description="Vetting every item (from sweaters to supplements) for quality, safety, and effectiveness in winter conditions." 
            icon="🔍" 
          />
          <TeamPillar 
            title="Pet Parents Like You" 
            description="Our content and tips are written from a place of real-world experience, knowing exactly what challenges you face." 
            icon="👨‍👩‍👧‍👦" 
          />
        </ul>
      </section>

      {/* 5. Call to Action (CTA) */}
      <section className="cta-section text-center p-8 bg-teal-600 rounded-lg shadow-2xl">
        <h3 className="text-3xl font-bold text-white mb-4">Ready to Prioritize Winter Pet Safety?</h3>
        <p className="text-white mb-6 text-lg">
          Explore our expert guides and curated products today to give your pet the best winter yet.
        </p>
        <button className="px-8 py-3 text-lg font-semibold bg-orange-500 hover:bg-orange-600 text-white rounded-full transition duration-300 shadow-md">
          Start Caring Now →
        </button>
      </section>

    </div>
  );
};

// Helper component for the Challenge Cards (Improves readability and responsiveness)
const ChallengeCard = ({ title, commitment, icon }) => (
  <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-xl transition duration-300">
    <div className="flex items-center mb-3">
      <span className="text-2xl mr-3">{icon}</span>
      <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400">{title}</h3>
    </div>
    <p className="text-gray-600 dark:text-gray-300">{commitment}</p>
  </div>
);

// Helper component for the Team Pillars
const TeamPillar = ({ title, description, icon }) => (
  <li className="flex items-start bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm hover:shadow-md transition duration-200">
    <span className="text-2xl mr-4 mt-1">{icon}</span>
    <div>
      <h4 className="font-semibold text-gray-800 dark:text-gray-100">{title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  </li>
);

export default About