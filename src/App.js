import "./App.css";
import Header from "./Header";
import PrimaryMetricCard from "./PrimaryMc";
import SecondaryMetricCard from "./SecondaryMc";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <PrimaryMetricCard></PrimaryMetricCard>
        <SecondaryMetricCard></SecondaryMetricCard>
      </div>
    </div>
  );
}

export default App;
