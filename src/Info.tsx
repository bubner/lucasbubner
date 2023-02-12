/**
 * Standard information module with links and other metadata.
 * @author Lucas Bubner, 2023
 */
import { motion } from "framer-motion";
import "./Info.css";

function Info() {
    return (
      <motion.div
        id="App"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <div id="navbar" />
        todo
      </motion.div>
    )
  }
  

export default Info;