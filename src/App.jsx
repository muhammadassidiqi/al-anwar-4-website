import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Pendaftaran from "./pages/Pendaftaran";
import Profil from "./pages/Profil";
import Kontak from "./pages/Kontak";
import Program from "./pages/Program";
import Galeri from "./pages/Galeri";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pendaftaran" element={<Pendaftaran />} />
        <Route path="/Profil" element={<Profil />} />
        <Route path="/Kontak" element={<Kontak />} />
        <Route path="/Program" element={<Program />} />
        <Route path="/Galeri" element={<Galeri />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
