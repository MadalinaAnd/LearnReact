import Home from "./Pages/home";
import Navbar from "./Pages/navbar";
import Products from "./Pages/products";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div className="content">
        <Routes>
            <Route  path="/" element={<Home/>} />
            <Route  path="/products" element={<Products/>} />
          </Routes>
        </div>
      </div>
      </BrowserRouter>
   );
}

export default App;
