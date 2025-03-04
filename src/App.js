// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import TherapistDashboard from "./components/TherapistDashboard";
// import ForestTheme from './components/Forest';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/therapist-dashboard" element={<TherapistDashboard />} />
//       </Routes>
//     </Router>
//     <div>
//       ForestTheme
//     </div>
//   );
// }


// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TherapistDashboard from "./components/TherapistDashboard";
import Forest from "./components/Forest";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/therapist-dashboard" element={<TherapistDashboard />} />
        <Route path="/forest-theme" element={<Forest />} />
      </Routes>
    </Router>
  );
}

export default App;

