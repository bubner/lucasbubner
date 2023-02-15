/**
 * Router module to handle switching between webpages
 * @author Lucas Bubner, 2023
 */
import { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import App from "./App";
import Home from "./Home";
import Accom from "./Accom";
import Tech from "./Tech";
import Honour from "./Honour";
import Proj from "./Proj";
import Links from "./Links";

export interface Goto {
    goto: (path: string) => void;
}

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
        <div>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path="/">
                        <Route index element={<App />} />
                    </Route>
                    <Route path="/i">
                        <Route index element={<Home goto={goto} />} />
                        <Route path="accomplishments" element={<Accom goto={goto} />} />
                        <Route path="technology" element={<Tech goto={goto} />} />
                        <Route path="honourables" element={<Honour goto={goto} />} />
                        <Route path="projects" element={<Proj goto={goto} />} />
                        <Route path="links" element={<Links goto={goto} />} />
                    </Route>
                    <Route path="*" element={<App />} />
                </Routes>
            </AnimatePresence>
        </div>
    );
}

export default AnimatedRoute;
