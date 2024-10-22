import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-12">
        <h1 className="font-playfair mb-8 text-center text-5xl font-bold text-gray-800">
          Welcome to Things
        </h1>

        <div className="mx-auto mb-12 max-w-3xl rounded-lg bg-white p-8 shadow-lg">
          <p className="mb-6 text-center text-xl text-gray-600">
            Discover our curated collection of premium items, thoughtfully
            selected for you.
          </p>
          <div className="text-center">
            <Link
              to="/shop"
              className="inline-block rounded-lg bg-gray-800 px-8 py-3 font-semibold text-white transition-colors duration-300 hover:bg-gray-700"
            >
              Browse Collection
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <FeatureCard
            title="Timeless Design"
            description="Each piece in our collection is chosen for its enduring style and quality craftsmanship."
          />
          <FeatureCard
            title="Curated Selection"
            description="We carefully select each item to ensure it meets our standards for style and quality."
          />
          <FeatureCard
            title="Premium Quality"
            description="Every item in our collection is crafted with attention to detail and premium materials."
          />
        </div>
      </main>
    </div>
  );
};

const FeatureCard = ({ title, description }) => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105">
      <h2 className="font-playfair mb-3 text-xl font-semibold text-gray-800">
        {title}
      </h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Home;
