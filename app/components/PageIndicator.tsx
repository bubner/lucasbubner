"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

interface IndicatorPosition {
    indicatorPosition: number;
    setIndicatorPosition: (page: number, pathname: string) => void;
    hasSeenPathname: (path: string) => boolean;
}

export const IndicatorPosition = createContext<IndicatorPosition | undefined>(undefined);

/**
 * Provider for the current page indicator position, needed to know where the indicator should be
 * when the page is changed. This component has to be placed high in the tree as the AnimationWrapper clears context and state
 * due to the nature of the workaround.
 * @author Lucas Bubner, 2024
 */
export function IndicatorPositionProvider({ children }: { children: React.ReactNode }) {
    const [indicatorPosition, setStateIndicatorPosition] = useState(0);
    const [seen, setSeen] = useState<Set<string>>(new Set());

    function hasSeenPathname(path: string): boolean {
        return seen.has(path);
    }

    function setIndicatorPosition(page: number, pathname: string) {
        // TODO: is updated too early
        setSeen(prev => new Set(prev).add(pathname));
        setStateIndicatorPosition(page);
    }

    return (
        <IndicatorPosition.Provider value={{ indicatorPosition, setIndicatorPosition, hasSeenPathname }}>
            {children}
        </IndicatorPosition.Provider>
    );
}

/**
 * Current page indicator for the navbar.
 * @author Lucas Bubner, 2024
 */
export default function PageIndicator() {
    const pathname = usePathname();
    const last = useContext(IndicatorPosition);
    const [x, setX] = useState(0);

    useEffect(() => {
        function calculatePosition() {
            const pathOrder = [
                "/~",
                "/~/showcase",
                "/~/robotics",
                "/~/cv",
            ];
            const index = pathOrder.indexOf(pathname);
            if (index === -1) return;
            // y=79x+19 and y=50x+17
            setX(window.innerWidth >= 640 ? 79 * index + 19 : 50 * index + 17);
        }
        window.addEventListener("resize", calculatePosition);
        calculatePosition();
        return () => window.removeEventListener("resize", calculatePosition);
    }, [pathname]);

    return (
        <div className="w-full __nsi">
            <motion.div
                initial={{ x: last?.indicatorPosition }}
                animate={{ x: x }}
                transition={{ type: "spring", stiffness: 200, damping: 30, delay: 0.2 }}
                onAnimationComplete={() => last?.setIndicatorPosition(x, pathname)}
                className="bg-red-600 py-[2px] w-4 px-1 rounded-2xl mb-[1px]"
            />
        </div>
    );
}
