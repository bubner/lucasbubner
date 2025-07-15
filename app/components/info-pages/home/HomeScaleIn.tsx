"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function HomeScaleIn({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    if (pathname != "/~") return children;
    return (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            {children}
        </motion.div>
    );
}
