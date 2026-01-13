"use client";

import { Stars } from "@/images";
import { motion } from "framer-motion";
import { useContext } from "react";
import { TreeStatus } from "../TreeStatus";
import StarsAnimation from "./stars/StarsAnimation";

/**
 * Node and dots background.
 * @author Lucas Bubner, 2024
 */
export default function Background() {
    const writer = useContext(TreeStatus);

    // Block render until the phrase has been fully written
    if (!writer?.activityMet()) return;

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }} className="absolute">
            <StarsAnimation />
            <div className="w-screen __scrolling-anim h-dvh object-cover bg-repeat" style={{ backgroundImage: "url(" + Stars.src + ")" }} />
        </motion.div>
    );
}
