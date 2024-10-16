import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import "./App_style.css";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Theme from "./components/Theme";
import LoadingScreen from "./components/loading/LoadingScreen";
import CategoriesGrid from "./components/categories/Categories";
import ProductItem from "./pages/ProductItem";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import AllProductsPage from "./pages/AllProductsPage";
import ErrorPage from "./pages/ErrorPage";
import ProductByCategoryPage from "./pages/ProductByCategoryPage";
import SalePage from "./pages/SalePage";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Theme>
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pages/home" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/pages/categories" element={<CategoriesGrid />} />
              <Route path="/category/:id" element={<ProductByCategoryPage />} />
              <Route path="discounted-products" element={<SalePage />} />
              <Route
                path="/pages/allProductsPage"
                element={<AllProductsPage />}
              />
              <Route path="/pages/salePage" element={<SalePage />} />
              <Route path="/product/:productId" element={<ProductItem />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </Provider>
    </Theme>
  );
}

export default App;
