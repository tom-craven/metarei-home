import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import UniverseRoot from "./pages/Universe/UniverseRoot";
import Token from "./pages/Metaverse/Token";
import Landing from "./pages/Global/Landing";
import DeclarationRoot from "./pages/Metaverse/declaration/DeclarationRoot";
import RoadmapRoot from "./pages/Metaverse/roadmap/RoadmapRoot";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/metaverse/rei" element={<Token/>}/>
                <Route path="/universe" element={<UniverseRoot/>}/>
                <Route path="/metaverse/declaration" element={<DeclarationRoot/>}/>
                <Route path="/metaverse/roadmap" element={<RoadmapRoot/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

