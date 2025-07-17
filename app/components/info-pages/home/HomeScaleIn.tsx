"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { IndicatorPosition } from "../../PageIndicator";

export default function HomeScaleIn({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const indicator = useContext(IndicatorPosition);
    // Not the greatest way to do this since it scales poorly but we have a fixed page count referenced elsewhere so this is fine
    // This is to ensure the scaling only fires once and holds context to keep it that way
    if (pathname != "/~" || indicator?.hasSeenPathname("/~/showcase") || indicator?.hasSeenPathname("/~/robotics") || indicator?.hasSeenPathname("/~/cv"))
        return children;
    return (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            {children}
        </motion.div>
    );
}
