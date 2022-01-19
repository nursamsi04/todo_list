import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Component
import MainPage from "./pages/main";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import HomePage from "./pages/home";

// import Pagest

// Main Component
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

// export data
export default App;
