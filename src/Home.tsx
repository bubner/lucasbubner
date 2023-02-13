/**
 * Homepage component after initial landing
 * @author Lucas Bubner, 2023
 */
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import "./Home.css";

function Home() {
    return (
        <motion.div
            initial={{ opacity: location.pathname !== "/i" ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <Navbar />
            <div className="content-bg" />
        </motion.div>
    );
}

export default Home;
