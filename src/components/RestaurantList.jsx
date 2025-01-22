import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';

const RestaurantList = ({ filterOpenNow, filterPrice, filterCategory }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [visibleRestaurants, setVisibleRestaurants] = useState(8);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('/restaurants.json')
        .then(response => response.json())
        .then(data => {
          setRestaurants(data);
          setLoading(false);
        });
    }, 300);
  }, []);

  const filteredRestaurants = restaurants.filter(restaurant => {
    const isOpenNow = filterOpenNow ? restaurant.status === 'open' : true;
    const isPriceValid = filterPrice ? restaurant.price === filterPrice : true;
    const isCategoryValid = filterCategory ? restaurant.cuisine.toLowerCase() === filterCategory.toLowerCase() : true;
    return isOpenNow && isPriceValid && isCategoryValid;
  });

  const handleShowMore = () => {
    setShowAll(true);
    setVisibleRestaurants(filteredRestaurants.length);
  };

  const handleShowLess = () => {
    setShowAll(false);
    setVisibleRestaurants(8);
  };

  return (
    <div className="py-4">
      <h1 className="text-3xl font-bold mb-6">All Restaurants</h1>

      {loading ? (
        <div className="flex justify-center items-center">
          <span>Loading...</span>
        </div>
      ) : (
        <>
          {filteredRestaurants.length === 0 ? (
            <p>No restaurants found based on the selected filters.</p>
          ) : (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredRestaurants.slice(0, visibleRestaurants).map((restaurant) => (
                  <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                ))}
              </div>

              {filteredRestaurants.length > 8 && !showAll && (
                <div className="flex justify-center mt-6">
                  <button onClick={handleShowMore} className="px-32 py-2 border rounded-md hover:bg-gray-100">
                    SHOW MORE
                  </button>
                </div>
              )}

              {showAll && (
                <div className="flex justify-center mt-6">
                  <button onClick={handleShowLess} className="px-32 py-2 border rounded-md hover:bg-gray-100">
                    SHOW LESS
                  </button>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default RestaurantList;
