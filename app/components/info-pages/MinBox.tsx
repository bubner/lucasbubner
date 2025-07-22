"use client";

import { AnimationProps, motion } from "framer-motion";

/**
 * Minimal animated box for custom box creation.
 * @author Lucas Bubner, 2024
 */
export default function MinBox({ children, className, ...props }: { children: React.ReactNode; className?: string } & AnimationProps) {
    return (
        <motion.div className={"__box" + (className ? " " + className : "")} {...props}>
            {children}
        </motion.div>
    );
}
