import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">Welcome to Sudsy Delights</h1>
        
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <p className="text-xl text-gray-700 mb-4">
            Discover our luxurious handcrafted soaps, made with all-natural ingredients for a truly refreshing experience.
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
            title="All Natural" 
            description="Our soaps are made with 100% natural ingredients, kind to your skin and the environment."
          />
          <FeatureCard 
            title="Handcrafted" 
            description="Each bar is carefully handcrafted to ensure the highest quality and attention to detail."
          />
          <FeatureCard 
            title="Variety" 
            description="From lavender to citrus, we offer a wide range of scents to suit every preference."
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

export default Home;