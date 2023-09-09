/**
 * Router module to handle switching between webpages
 * @author Lucas Bubner, 2023
 */
import { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { GotoContext } from "./components/GotoContext";
import Landing from "./main/Landing";
import Home from "./i/Home";
import Accomplishments from "./i/pages/Accomplishments";
import Technology from "./i/pages/Technology";
import Honourables from "./i/pages/Honourables";
import Projects from "./i/pages/Projects";
import Links from "./i/pages/Links";

function Router() {
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
                        <Route index element={<Landing />} />
                    </Route>
                    <Route path="/i">
                        <Route index element={<Home />} />
                        <Route path="accomplishments" element={<Accomplishments />} />
                        <Route path="technology" element={<Technology />} />
                        <Route path="honourables" element={<Honourables />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="links" element={<Links />} />
                    </Route>
                    <Route path="*" element={<Landing />} />
                </Routes>
            </AnimatePresence>
        </GotoContext.Provider>
    );
}

export default Router;
