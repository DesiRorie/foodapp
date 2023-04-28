import "./App.css";
import Navbar from "./components/Navbar";
import TopMenu from "./components/TopMenu";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <TopMenu />
      <HomePage />
      <Navbar />
    </>
  );
}

export default App;
