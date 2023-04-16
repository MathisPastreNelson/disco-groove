import React from "react";
/* Package pour la création/gestion des routes*/
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Freeze from "./pages/Freeze";
import Kaaris from "./pages/Kaaris";
import Kalash from "./pages/Kalash";
import Pnl from "./pages/Pnl";
import Hugotsr from "./pages/Hugotsr";
import Sadek from "./pages/Sadek";
import Charles from "./pages/Charles";

import Georges from "./pages/Georges";
import Jacques from "./pages/Jacques";
import Renaud from "./pages/Renaud";
import Serge from "./pages/Serge";
import Mitsouko from "./pages/Mitsouko";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/disco-groove/" element={<Home />} />
          <Route path="/disco-groove/artist" element={<Freeze />} />
          <Route path="/disco-groove/artist1" element={<Kaaris />} />
          <Route path="/disco-groove/artist2" element={<Kalash />} />
          <Route path="/disco-groove/artist3" element={<Pnl />} />
          <Route path="/disco-groove/artist4" element={<Hugotsr />} />
          <Route path="/disco-groove/artist5" element={<Sadek />} />
          <Route path="/disco-groove/artist6" element={<Charles />} />
          <Route path="/disco-groove/artist7" element={<Georges />} />
          <Route path="/disco-groove/artist8" element={<Jacques />} />
          <Route path="/disco-groove/artist9" element={<Renaud />} />
          <Route path="/disco-groove/artist10" element={<Serge />} />
          <Route path="/disco-groove/artist11" element={<Mitsouko />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
