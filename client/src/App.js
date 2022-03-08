import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Movers from "./pages/movers";
import Property from "./pages/property";
import Thankyou from "./pages/thanks";
import Form from "./components/Form";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/movers" element={<Movers />} />
        <Route path="property-report" element={<Property />} />
        <Route path="thanks" element={<Thankyou />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
