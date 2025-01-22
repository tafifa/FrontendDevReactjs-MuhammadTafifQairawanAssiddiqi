import { Routes, Route } from "react-router";
import Beranda from "./pages/Beranda";
import RestaurantDetail from "./pages/RestaurantDetail";

function App() {
  return (
    <Routes>
      <Route index element={<Beranda />} />
      <Route path="/:name" element={<RestaurantDetail />} />
    </Routes>
  );
}

export default App;
