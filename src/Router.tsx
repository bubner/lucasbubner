/**
 * Router module to handle switching between webpages
 * @author Lucas Bubner, 2023
 */
import { useState } from "react";
import { Routes, Route, useLocation, useNavigate, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { GotoContext } from "./components/GotoContext";
import Landing from "./main/Landing";
import Home from "./pages/Home";
import Accomplishments from "./pages/content/Accomplishments";
import Technology from "./pages/content/Technology";
import Honourables from "./pages/content/Honourables";
import Projects from "./pages/content/Projects";
import Links from "./pages/content/Links";

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
                    <Route path="/pages">
                        <Route index path="*" element={<Navigate to="/pages/home" />} />
                        <Route path="home" element={<Home />} />
                        <Route path="accomplishments" element={<Accomplishments />} />
                        <Route path="technology" element={<Technology />} />
                        <Route path="honourables" element={<Honourables />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="links" element={<Links />} />
                    </Route>
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </AnimatePresence>
        </GotoContext.Provider>
    );
}

export default Router;
