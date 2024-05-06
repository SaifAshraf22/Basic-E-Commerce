import Navbar from "./Components/Navbar";
import ProductList from "./Components/Productlist";
import Slider from "./Components/Slider";
import { Route, Routes } from "react-router-dom";
import About from "./Components/about";
import ProductDetails from "./Components/ProductDetails";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductList />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
