import FilterNavigation from "../components/FilterNavigation";
import Header from "../components/Header";
import RestaurantList from "../components/RestaurantList";

import { useState } from 'react';

function BerandaPage() {
  const [filterOpenNow, setFilterOpenNow] = useState(false);
  const [filterPrice, setFilterPrice] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const handleOpenNowChange = (event) => {
    setFilterOpenNow(event.target.checked);
  };

  const handlePriceChange = (event) => {
    setFilterPrice(event.target.value);
  };

  const handleCategoryChange = (event) => {
    console.log(event.target.value);
    
    setFilterCategory(event.target.value);
  };

  const handleClearFilters = () => {
    setFilterOpenNow(false);
    setFilterPrice('');
    setFilterCategory('');
  };

  return (
    <main className="font-poppins p-6 max-w-5xl mx-auto">
      <Header/>
      <FilterNavigation 
        filterOpenNow={filterOpenNow}
        filterPrice={filterPrice}
        filterCategory={filterCategory}
        onOpenNowChange={handleOpenNowChange}
        onPriceChange={handlePriceChange}
        onCategoryChange={handleCategoryChange}
        onClearFilters={handleClearFilters}
      />
      <RestaurantList 
        filterOpenNow={filterOpenNow} 
        filterPrice={filterPrice}
        filterCategory={filterCategory}
      />
    </main>
  );
}

export default BerandaPage;
