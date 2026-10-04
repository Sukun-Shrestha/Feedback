import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import HomePage from "./pages/Homepage";
import DetailPage from "./pages/DetailPage";
import RoadmapPage from "./pages/RoadmapPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 p-4 md:p-6">
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/feedback/:id"
            element={<DetailPage />}
          />

          <Route
            path="/roadmap"
            element={<RoadmapPage />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;