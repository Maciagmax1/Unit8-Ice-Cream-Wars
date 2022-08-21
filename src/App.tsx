import "./App.css";
import Ad from "./components/Ad";
import AdDesigner from "./components/AdDesigner";
import Header from "./components/Header";
import Votes from "./components/Votes";

function App() {
  return (
    <div className="App">
      <Header user="Chirpus" />
      <div className="ad-container">
        <Ad flavor="Vanilla" fontSize={45} darkMode={true} />
        <Ad flavor="Chocolate" fontSize={45} darkMode={false} />
        <Ad flavor="Strawberry" fontSize={45} darkMode={true} />
      </div>
      <div className="container">
        <AdDesigner />
        <Votes />
      </div>
    </div>
  );
}

export default App;
