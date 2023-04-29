import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import TopMenu from "./components/TopMenu";
import HomePage from "./pages/HomePage";
import FoodPage from "./pages/FoodPage";

function App() {
  return (
    <>
      {/* <TopMenu /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/foodpage" element={<FoodPage />} />
      </Routes>

      <Navbar />
    </>
  );
}

export default App;
