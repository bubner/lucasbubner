/**
 * Router module to handle switching between webpages
 * @author Lucas Bubner, 2023
 */
import { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import App from "./App";
import Home from "./Home";

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
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/">
                    <Route index element={<App />} />
                </Route>
                <Route path="/i">
                    <Route index element={<Home goto={goto} />} />
                    <Route path="accomplishments" element={<Home goto={goto} />} />
                    <Route path="technology" element={<Home goto={goto} />} />
                    <Route path="honourables" element={<Home goto={goto} />} />
                    <Route path="projects" element={<Home goto={goto} />} />
                    <Route path="links" element={<Home goto={goto} />} />
                </Route>
                <Route path="*" element={<App />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoute;
