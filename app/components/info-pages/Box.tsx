"use client";

import { motion } from "framer-motion";
import useSound from "use-sound";

/**
 * An information box that animates on entry.
 * @author Lucas Bubner, 2025
 */
export default function Box({
    entryDelay,
    children,
    ...props
}: { entryDelay?: number | void; children: React.ReactNode } & React.ComponentProps<typeof motion.div>) {
    const [playAppearSound] = useSound("/sounds/tap.wav");
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: entryDelay || 0, type: "spring", damping: 20, stiffness: 200 }}
            onAnimationComplete={() => playAppearSound()}
            {...props}
            className={"__box " + props.className}
        >
            {children}
        </motion.div>
    );
}
