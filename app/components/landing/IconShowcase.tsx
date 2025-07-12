"use client";

import { StaticImageData } from "next/image";
import { TreeStatus } from "../tree/TreeStatus";
import { useContext } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export type Icon = {
    src: StaticImageData;
    alt: string;
}

/**
 * Landing page "scrolling" effect for grayscale icons.
 * @author Lucas Bubner, 2025
 */
export default function IconShowcase({ icons, direction }: { icons: Icon[]; direction: "left" | "right" }) {
    const writer = useContext(TreeStatus);
    if (!writer?.activityMet()) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 1 }}
            className="group w-full md:w-2/3 overflow-hidden flex [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
            {[0, 1].map((i) => (
                <div key={i} className={"h-12 flex items-center justify-center group-hover:anim-pause " + (direction == "left" ? "__anim_slide_left" : "__anim_slide_right")}>
                    {icons.map((icon, i) => (
                        <div key={i} className="mx-4 h-12 w-12">
                            <Image draggable={false} src={icon.src} alt={icon.alt} title={icon.alt} width={48} height={48} className="grayscale" />
                        </div>
                    ))}
                </div>
            ))}
        </motion.div>
    );
}
