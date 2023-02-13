/**
 * Router module to handle switching between webpages
 * @author Lucas Bubner, 2023
 */
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import App from "./App";
import Home from "./Home";

function AnimatedRoute() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/">
                    <Route index element={<App />} />
                </Route>
                <Route path="/i">
                    <Route index element={<Home />} />
                </Route>
                <Route path="*" element={<App />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoute;
