import "./App.css";
import Navbar from "./components/Navbar";
import AllRoutes from "./pages/AllRoutes";

function App() {
  return (
    <div>
      <div className="App">
        <Navbar />
      </div>
      <AllRoutes />
    </div>
  );
}

export default App;
