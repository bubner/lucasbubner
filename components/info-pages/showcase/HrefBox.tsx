"use client";

import { StaticImageData } from "next/image";
import Image from "next/image";
import { RefObject, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import useSound from "use-sound";
import SoundLink from "@/components/SoundLink";

interface BoxProps {
    src?: StaticImageData;
    size?: number;
    extraBlur?: boolean;
    href: string;
    small?: boolean;
    entryDelay?: number | void;
    children: React.ReactNode;
}

/**
 * An information box with a background image and animation.
 *
 * Ported back from v2.1 to only include `href` boxes.
 *
 * @author Lucas Bubner, 2024
 */
export default function HrefBox({ src, size, extraBlur, href, small, entryDelay, children, className }: BoxProps & { className?: string }) {
    const [playAppearSound] = useSound("/sounds/tap.wav");
    const root = useRef<HTMLElement>(null);
    const img = useRef<HTMLImageElement>(null);

    // This effect is used to blur the image when the entire box is being hovered. This property is not
    // able to be set directly through a hover:blur CSS class because the blur effect is scoped to whatever that element
    // is hovering. This was the proposed solution in v2 and since it works it has been cleaned up (refs instead of using `document`) and kept.
    useEffect(() => {
        if (!root.current || !img.current) return;
        const rootRef = root.current;
        const imgRef = img.current;

        function increaseBlur() {
            imgRef.style.setProperty("filter", "blur(5px)");
        }

        function decreaseBlur() {
            const blurAmount = extraBlur ? 3 : 1;
            imgRef.style.setProperty("filter", `blur(${blurAmount}px)`);
        }

        rootRef.addEventListener("mouseover", increaseBlur);
        rootRef.addEventListener("mouseout", decreaseBlur);

        // Call at least once to set initial state
        decreaseBlur();

        return () => {
            rootRef?.removeEventListener("mouseover", increaseBlur);
            rootRef?.removeEventListener("mouseout", decreaseBlur);
        };
    }, [extraBlur]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: entryDelay || 0, type: "spring", damping: 20, stiffness: 200 }}
            onAnimationComplete={() => playAppearSound()}
            className={className}
        >
            <SoundLink
                ref={root as RefObject<HTMLAnchorElement>}
                draggable={false}
                className="__box hover:shadow-[0_0_20px_#ed1c24]"
                style={{ minHeight: small ? "fit-content" : "30vh" }}
                href={href}
                target="_blank"
            >
                {src && (
                    <div className="absolute -z-10">
                        <LazyLoadedImage
                            ref={img}
                            alt=""
                            draggable={false}
                            src={src!}
                            className="h-auto relative top-1/2 left-1/2 -translate-x-1/2 transition-[filter] duration-500"
                            style={{ width: `${size ?? 100}%` }}
                        />
                    </div>
                )}
                {children}
            </SoundLink>
        </motion.div>
    );
}
