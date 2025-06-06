import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import DevCheck from "./pages/DevCheck/DevCheck";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";

import { Toaster } from "react-hot-toast";
import TopMost from "./pages/Home/TopMost";
import NavBar from "./pages/Home/NavBar";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Toaster position="top-center" reverseOrder={false} />
      <TopMost />
      <NavBar />

      <Routes>
        <Route path="/" element={<DevCheck />} />
        <Route path="/home" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
};

export default App;
