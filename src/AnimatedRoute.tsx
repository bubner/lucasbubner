import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import App from "./App";
import Info from "./Info";

function AnimatedRoute() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/">
                    <Route index element={<App />} />
                    <Route path="/i" element={<Info />} />
                </Route>
                <Route path="*" element={<App />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoute;
