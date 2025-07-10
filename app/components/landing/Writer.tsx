"use client";

import { useContext, useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { TreeStatus } from "../tree/TreeStatus";
import Image from "next/image";
import { DownArrow, RightArrow } from "@/app/images";
import Link from "next/link";
import useSound from "use-sound";

const shineVariants = {
    animate: {
        fontWeight: [700, 800, 700],
        backgroundPosition: ["100% 0", "-100% 0"],
        transition: {
            fontWeight: {
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
            },
            backgroundPosition: {
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
            },
        },
    },
};

/**
 * Blocking typewriter effect on landing.
 * @author Lucas Bubner, 2024
 */
export default function Writer() {
    const [shouldAnimate, setShouldAnimate] = useState(false);
    const writer = useContext(TreeStatus);
    const shineEffect = useAnimation();
    const [play] = useSound("/sounds/page.mp3");
    const strings = ["innovative.", "technical.", "collaborative.", "Lucas Bubner."];

    useEffect(() => {
        if (!shouldAnimate) return;
        // Shine effect is too distracting while it is writing, so we can start it once it's done
        shineEffect.start("animate");
    }, [shouldAnimate, shineEffect]);

    return (
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}>
            <motion.div layout className="text-center text-4xl/tight md:text-7xl/tight font-bold text-white flex justify-center">
                I am&nbsp;
                <motion.div
                    animate={shineEffect}
                    variants={shineVariants}
                    className="font-bold bg-clip-text [text-shadow:0_0_10px_rgba(255,255,255,0.5)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] bg-[linear-gradient(to_left,#ffffff,#cf8184,#f78488)] bg-[length:200%_100%] bg-[100%_0]"
                >
                    <noscript>
                        I am Lucas Bubner.
                        <br />
                        <nav className="flex items-center justify-center mt-6">
                            <Link href="~">
                                <Image src={DownArrow} alt="Continue" width={50} height={50} />
                            </Link>
                        </nav>
                    </noscript>
                    <Typewriter
                        options={{
                            cursor: "|",
                            delay: 70,
                        }}
                        onInit={(t) => {
                            t.pauseFor(250);
                            for (const string of strings) {
                                t.deleteAll().typeString(string).pauseFor(1000);
                            }
                            t.callFunction(() => {
                                // Increment the tree completion, which will allow the other components to start rendering
                                // as they are checking for an activityMet requirement
                                writer?.markDone();
                                setShouldAnimate(true);
                            }).start();
                        }}
                    />
                </motion.div>
            </motion.div>
            {!shouldAnimate && (
                <div className="m-3 text-[#727272] font-bold text-xs z-10 flex items-center justify-center opacity-50">
                    <motion.button
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 3, delay: 1 } }}
                        className="flex gap-1 p-4"
                        onClick={() => {
                            play();
                            writer?.markDone();
                            setShouldAnimate(true);
                        }}
                    >
                        <span>skip</span>
                        <Image className="translate-y-[0.5px]" src={RightArrow} alt="" width={16} height={16} />
                    </motion.button>
                </div>
            )}
        </motion.div>
    );
}
