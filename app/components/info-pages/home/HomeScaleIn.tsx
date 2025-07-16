"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { IndicatorPosition } from "../../PageIndicator";

export default function HomeScaleIn({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const indicator = useContext(IndicatorPosition);
    if (pathname != "/~" || indicator?.hasSeenPathname("/~")) return children;
    return (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            {children}
        </motion.div>
    );
}
