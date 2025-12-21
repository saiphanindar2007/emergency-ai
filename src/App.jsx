import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Emergency from "./pages/Emergency";
import Decision from "./pages/Decision";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/decision" element={<Decision />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
