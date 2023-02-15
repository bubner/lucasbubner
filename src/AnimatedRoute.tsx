/**
 * Router module to handle switching between webpages
 * @author Lucas Bubner, 2023
 */
import { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { GotoContext } from "./GotoContext";
import App from "./App";
import Home from "./pages/Home";
import Accom from "./pages/Accom";
import Tech from "./pages/Tech";
import Honour from "./pages/Honour";
import Proj from "./pages/Proj";
import Links from "./pages/Links";

function AnimatedRoute() {
    const location = useLocation();
    const [lock, setLock] = useState(false);
    const nav = useNavigate();

    function goto(path: string) {
        if (lock) return;
        setLock(true);
        setTimeout(() => setLock(false), 1000);
        nav(path);
    }

    return (
        <GotoContext.Provider value={goto}>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path="/">
                        <Route index element={<App />} />
                    </Route>
                    <Route path="/i">
                        <Route index element={<Home />} />
                        <Route path="accomplishments" element={<Accom />} />
                        <Route path="technology" element={<Tech />} />
                        <Route path="honourables" element={<Honour />} />
                        <Route path="projects" element={<Proj />} />
                        <Route path="links" element={<Links />} />
                    </Route>
                    <Route path="*" element={<App />} />
                </Routes>
            </AnimatePresence>
        </GotoContext.Provider>
    );
}

export default AnimatedRoute;
