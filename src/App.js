import './App.css';
import Counter from './Components/Counter';
import Card from "./Components/Card";
import Header from "./Components/Header";

function App() {
  const OSarr = ["Android", "Blackberry", "iPhone", "Windows Phone"];
  const manufArr = ["Samsanug", "HTC", "Micromax", "Apple"];
  return (
    <>
      <div className="App">
      <Counter/>
      </div>

      <div style={{margin:"30px 650px"}}>
      <Header title="Mobile Operating System" />
      <Card arr={OSarr} />

      <Header title="Mobile Manufacturers" />
      <Card arr={manufArr} />
    </div>
    </>

  );
}

export default App;
