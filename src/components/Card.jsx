import PropTypes from "prop-types";

const Card = ({ description, name, images }) => {
  
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      {/* Card Parent Div */}
      <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        
        {/* Content Section */}
        <div className="flex flex-col justify-between p-4">
          <h4 className="text-2xl font-semibold text-gray-800 mb-4">{name}</h4>
          <p className="text-gray-600 text-lg mb-6">
            {description} 
          </p>
          <button className="py-2 px-4 bg-orange-600 text-white rounded-lg">Learn More</button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src={images}
            alt="Project Preview"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>


      </div>
    </div>
  );
};

Card.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  images: PropTypes.oneOfType([
    PropTypes.string, // Single image URL
    PropTypes.arrayOf(PropTypes.string) // Array of image URLs
  ])
};

export default Card;
