import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Tablets from "./pages/Tablets";
import Mobiles from "./pages/Mobile";
import Laptops from "./pages/Laptops";
import AppLayout from "./AppLayout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Buy from "./pages/Buy";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="laptops" element={<Laptops />} />
            <Route path="mobiles" element={<Mobiles />} />
            <Route path="Tablets" element={<Tablets />} />
            {/* <Route path="/:category" element={<Listings />} /> */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/product-details" element={<ProductDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
