/**
 * My worked on projects display page.
 * @author Lucas Bubner, 2023
 */
import { motion } from "framer-motion";
import { Goto } from "./AnimatedRoute";
import Navbar from "./Navbar";
import "./Boxes.css";

function Proj({ goto }: Goto) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}>
            <Navbar goto={goto} />
            <div className="content-bg" />
            <div className="container">
                <div className="box">
                    <h2>Projects</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default Proj;
