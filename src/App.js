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
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
