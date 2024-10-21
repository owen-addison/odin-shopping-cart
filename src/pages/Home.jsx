import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">Welcome to Things</h1>
        
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <p className="text-xl text-gray-700 mb-4">
            Discover our wide array of items, objects and things.
          </p>
          <Link 
            to="/shop" 
            className="inline-block bg-indigo-600 text-white font-semibold px-6 py-2 rounded hover:bg-indigo-700 transition-colors duration-300"
          >
            Shop Now
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            title="Fashion Forward" 
            description="Stay on trend with our curated selection of clothing and accessories for every style and occasion."
          />
          <FeatureCard 
            title="Tech Essentials" 
            description="Upgrade your digital life with our range of electronic devices and storage solutions."
          />
          <FeatureCard 
            title="Timeless Jewellery" 
            description="Add a touch of elegance to any outfit with our exquisite collection of jewellery pieces."
          />
        </div>
      </main>
    </div>
  );
};

const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold text-indigo-600 mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Home;