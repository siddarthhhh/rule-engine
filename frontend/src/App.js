import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateRule from "./components/create-rule.component";
import RulesList from "./components/rules-list.component";
import EvaluateRules from "./components/evaluate-rules.component";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">Rule Engine</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Rules</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Rule</Link>
              </li>
              <li className="navbar-item">
                <Link to="/evaluate" className="nav-link">Evaluate Rules</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br/>
        <Routes>
          <Route path="/" element={<RulesList />} />
          <Route path="/create" element={<CreateRule />} />
          <Route path="/evaluate" element={<EvaluateRules />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;