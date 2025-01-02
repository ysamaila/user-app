import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import HomePage from "./pages/HomePage";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user/:id" element={<UserDetails />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
