import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Contract from "./pages/Contract";

function App() {
  return (
    <Routes>
      <Route path="/cadastro" element={<Register />} />
      <Route path="/resumo" element={<Contract />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
