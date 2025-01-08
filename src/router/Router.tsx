import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { Basket } from "../pages/Basket";
import { Main } from "../pages/Main";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";

const AppRouter: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Router>
          <Header />
          <main className="main">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/basket" element={<Basket />} />
              <Route path="/product/:id" element={<Main />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </>
  );
};

export default AppRouter;
