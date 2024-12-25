import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { Flights } from "./pages/Flights";
import { Hotels } from "./pages/Hotels";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/flights" element={<Flights />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="*" element={<Hotels />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
