import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// general components
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./components/404";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";

// admin components
import Admin from "./components/Admin/Admin";
import Login from "./components/Admin/Login";

// user components
import ItemPage from "./components/User/ItemPage";
import Cart from "./components/User/Cart/Cart";
import Checkout from "./components/User/Checkout";
import Success from "./components/User/Success";
import ItemCards from "./components/ItemCards";
// import Payment from "./components/User/Payment";

function App() {

  const token = useSelector((state) => state.admin.token);
  const cart = useSelector((state) => state.order.cart);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="*" element={<NotFound />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/products" element={<ItemCards />} />

        <Route exact path="/cart" element={<Cart />} />
        
        { cart.length > 0 && 
        <Route exact path="/checkout" element={<Checkout />} />
        }

        <Route exact path="/success/:id" element={<Success />} />

        <Route exact path ="/product/:id" element={<ItemPage />} />

        {/* {token ? 
        ( <Route exact path ="/admin/products" element={<Admin />} /> ) 
        : ( <Route exact path ="/admin/login" element={<Login />} /> )
        } */}

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
