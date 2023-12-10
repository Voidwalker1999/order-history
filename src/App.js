import './App.css';
import Navbar from "./components/Navbar";
import Orderhistory from "./components/Orderhistory";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <Orderhistory/>
    </div>
  );
}

export default App;
