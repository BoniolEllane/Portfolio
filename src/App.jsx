import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Web from "/src/Web.jsx";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            exact path='/'
            element={<Web />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
