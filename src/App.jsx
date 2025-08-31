import React from 'react';
import StarryBackground from './StarryBackground';
import PortfolioContent from "./PortfolioContent";
import Home from './Components/Pages/Home';

function App() {
  return (
    <div className="relative">
      <StarryBackground />
      <PortfolioContent />
      <Home />
    </div>
  );
}

export default App;
