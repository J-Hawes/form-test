import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Movers from "./pages/movers";
import Property from "./pages/property";
import Thankyou from "./pages/thanks";
import Home from "./pages/home";
import NotFound from "./pages/notFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movers" element={<Movers />} />
        <Route path="/property-report" element={<Property />} />
        <Route path="/thanks" element={<Thankyou />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
