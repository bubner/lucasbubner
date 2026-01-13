"use client";
import { motion } from "framer-motion";

export default function RiseInAnimation({ children, className, entryDelay }: { children: React.ReactNode; className: string; entryDelay: number }) {
    return (
        <motion.div
            className={className}
            transition={{ delay: entryDelay, ease: "easeInOut" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
        >
            {children}
        </motion.div>
    );
}
