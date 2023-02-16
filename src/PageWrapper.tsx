/**
 * Page wrapper to support Navbar and Framer Motion compatibility.
 * @author Lucas Bubner, 2023
 */
import { motion } from "framer-motion";
import Navbar from "./Navbar";

function PageWrapper({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{ willChange: "opacity" }}
        >
            <Navbar />
            {children}
        </motion.div>
    );
}

export default PageWrapper;
