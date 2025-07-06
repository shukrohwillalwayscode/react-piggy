import React from "react";
import Header from "./Static/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Stories from "./Pages/Stories";
import Invest from "./Pages/Invest";
import Save from "./Pages/Save";
import FAQs from "./Pages/FAQs";
import Resources from "./Pages/Resources";
import Footer from "./Static/Footer";
import Piggybank from "./Pages/Piggybank";
import Safelock from "./Pages/Safelock";
import Target from "./Pages/Target";
import Flex from "./Pages/Flex";
import Dollar from "./Pages/Dollar";
import House from "./Pages/House";
import Store from "./Pages/Store";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Save" element={<Save />} />
          <Route path="/save/piggybank" element={<Piggybank />} />
          <Route path="/save/safelock" element={<Safelock />} />
          <Route path="/save/target" element={<Target />} />
          <Route path="/save/flex-naira" element={<Flex />} />
          <Route path="/save/flex-dollar" element={<Dollar />} />
          <Route path="/save/house-money" element={<House />} />
          <Route path="/Invest" element={<Invest />} />
          <Route path="/Stories" element={<Stories />} />
          <Route path="/FAQs" element={<FAQs />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/Store" element={<Store />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
