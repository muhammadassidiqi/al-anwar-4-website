import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Pendaftaran from "./pages/Pendaftaran";
import Profil from "./pages/Profil";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pendaftaran" element={<Pendaftaran />} />
        <Route path="/Profil" element={<Profil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
