import { Link } from "react-router";

const Rating = ({ rating }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`text-xl ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ))}
  </div>
);

const RestaurantCard = ({ restaurant }) => (
  <div className="border p-4 rounded-sm shadow-sm flex flex-col justify-between">
    <div>
      <img
          src={`/assets/restaurants/${restaurant.slug}.jpg` || 'https://via.placeholder.com/300'}
          alt={restaurant.name}
          className="h-32 w-full rounded-md shadow-lg mb-4"
        />
      <h2 className="text-md font-bold text-left">{restaurant.name}</h2>
      <Rating rating={restaurant.rating} />
      <div className="flex justify-between">
        <p className="text-xs text-gray-600 mt-2">
          {restaurant.cuisine} - {restaurant.price}
        </p>
        <p
          className={`text-xs font-bold mt-2 ${
            restaurant.status === "open" ? "text-green-500" : "text-red-500"
          }`}
        >
          {restaurant.status === "open" ? "OPEN NOW" : "CLOSED"}
        </p>
      </div>
    </div>

    <Link
      to={`/${restaurant.slug}`}
      className="mt-4 px-4 py-2 bg-blue-800 text-white text-sm rounded-sm hover:bg-blue-900 block text-center"
    >
      View Details
    </Link>
  </div>
);

export default RestaurantCard;
