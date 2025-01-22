import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

const RestaurantDetail = () => {
  const slug = useParams().name;
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/restaurants.json")
      .then((response) => response.json())
      .then((data) => {
        const foundRestaurant = data.find((r) => r.slug === slug);
        setRestaurant(foundRestaurant);
        setLoading(false);
      });
  }, [slug]);

  const Rating = ({ rating }) => (
    <div className="text-xl flex items-center mb-2">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={` ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
        >
          ★
        </span>
      ))}
    </div>
  );

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  if (!restaurant) {
    return <div className="text-center text-lg">Restaurant not found.</div>;
  }

  return (
    <div className="py-8 px-4 max-w-7xl mx-auto">
      <div className="mb-6">
        <button
          onClick={() => navigate(-1)}
          className="text-blue-600 hover:text-blue-800 font-semibold"
        >
          &#8592; Back to Restaurants
        </button>
      </div>
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="flex flex-col sm:w-2/3 m-4 pr-5">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold text-gray-800">
              {restaurant.name}
            </h1>
            <p
              className={`text-xl font-bold mt-2 px-4 rounded-xl ${
                restaurant.status === "open"
                  ? "text-green-500 bg-green-300"
                  : "text-red-500 bg-red-300"
              }`}
            >
              {restaurant.status === "open" ? "OPEN NOW" : "CLOSED"}
            </p>
          </div>

          <p className="text-xl text-gray-600 mt-8 mb-4">
            {restaurant.description}
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-lg rounded-lg">
              <thead>
                <tr className="text-left text-gray-600">
                  <th className="py-2 px-4 border-b">Category</th>
                  <th className="py-2 px-4 border-b">Price</th>
                  <th className="py-2 px-4 border-b">Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-gray-800">
                  <td className="py-2 px-4 border-b">{restaurant.cuisine}</td>
                  <td className="py-2 px-4 border-b">{restaurant.price}</td>
                  <td className="py-2 px-4 border-b">
                    <Rating rating={restaurant.rating} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <img
          src={
            `/assets/restaurants/${restaurant.slug}.jpg` ||
            "https://via.placeholder.com/300"
          }
          alt={restaurant.name}
          className="h-120 w-full sm:w-1/2 rounded-lg shadow-lg"
        />
      </div>
      <div className="border-t m-4 mt-8">
        <p className="text-2xl font-bold mt-2">Review</p>
        {restaurant.reviews.length > 0 ? (
          restaurant.reviews.map((review, index) => (
            <div key={index} className="mt-4 border rounded-lg p-2 px-6 m-6">
              <div className="flex items-center space-x-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-yellow-500">
                    {"⭐".repeat(review.rating)}
                  </p>
                  <p className="text-gray-600">{review.text}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantDetail;
