import { useState } from "react";
import "./App.css";
import Header from "./Header";
import PrimaryMetricCard from "./PrimaryMc";
import SecondaryMetricCard from "./SecondaryMc";
function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <Header setTheme={setIsActive} theme={isActive}></Header>
        <PrimaryMetricCard theme={isActive}></PrimaryMetricCard>
        <SecondaryMetricCard theme={isActive}></SecondaryMetricCard>
      </div>
    </div>
  );
}

export default App;
