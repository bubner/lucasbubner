"use client";

import { DownArrow } from "@/app/images";
import { motion } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { TreeStatus } from "../TreeStatus";
import SoundLink from "../SoundLink";
import LazyLoadedImage from "../info-pages/LazyLoadedImage";

/**
 * Next page and scroll down arrow.
 * @author Lucas Bubner, 2024
 */
export default function NextButton() {
    const nextPage = useRef<HTMLAnchorElement>(null);
    const writer = useContext(TreeStatus);

    function next() {
        // Allow users to scroll to activate the next page
        nextPage.current?.click();
    }

    useEffect(() => {
        // Should not let them move to the next page if the writer is still writing
        if (!writer?.activityMet() || nextPage.current == null) {
            return;
        }
        window.addEventListener("wheel", next);
        return () => window.removeEventListener("wheel", next);
    }, [writer, nextPage]);

    // Block render until the phrase has been fully written
    if (!writer?.activityMet()) return;

    return (
        <nav className="absolute bottom-10 left-[50%] translate-x-[-50%] opacity-80">
            <SoundLink href="/~" ref={nextPage}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ y: [0, -30, 0], opacity: 1 }}
                    transition={{ y: { duration: 2, repeat: Infinity }, opacity: { duration: 5 } }}
                    className="pt-10 px-2"
                >
                    <LazyLoadedImage src={DownArrow} alt="Continue" width={50} height={50} />
                </motion.div>
            </SoundLink>
        </nav>
    );
}
