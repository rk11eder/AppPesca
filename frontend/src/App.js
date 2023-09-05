//React
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Page & Components
import HomePage from "../src/HomePage/HomePage";
import Navbar from "../src/Components/Navbar/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
