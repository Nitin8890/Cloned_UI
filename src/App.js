import Navbar from "./Components/Navbar"
import Library from "./Components/Library";
import BottomBar from "./Components/BottomBar";
import Center from "./Components/Center";
import './App.css';

function App() {
  return (
    <div className="bg-black">
      <Navbar/>
      <div className="flex ">
      <Library/>
      <Center/>
      </div>
      <BottomBar/>
    </div>
  );
}

export default App;
