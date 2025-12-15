"use client";

import Box from "@/app/components/info-pages/Box";
import { RightArrowWhite } from "@/app/images";
import { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import BunyipsLib from "./BunyipsLib";
import Impact from "./Impact";
import Media, { URLData } from "./Media";

export default function Slides({ urlData }: { urlData: URLData[] }) {
    const [embla, emblaApi] = useEmblaCarousel({ loop: true });
    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
    const [title, setTitle] = useState("Robotics");

    useEffect(() => {
        const slidesInView = (e: EmblaCarouselType) => {
            const inView = JSON.stringify(e.slidesInView());
            switch (inView) {
                case "[0,1]":
                    setTitle("Robotics — Media");
                    break;
                case "[0,1,2]":
                    setTitle("Robotics — BunyipsLib");
                    break;
                case "[1,2]":
                    setTitle("Robotics — Impact");
                    break;
                default:
                    setTitle("Robotics");
                    break;
            }
        };
        emblaApi?.on("slidesInView", slidesInView);
        return () => {
            emblaApi?.off("slidesInView", slidesInView);
        };
    }, [emblaApi]);

    return (
        <>
            <div className="flex my-2 items-end justify-between">
                <button
                    className="embla__prev flex text-gray-300 text-xs gap-2 items-center justify-center ml-4 p-2 hover:bg-black rounded-md transition-colors"
                    onClick={scrollPrev}
                >
                    <Image src={RightArrowWhite} alt="Previous" className="rotate-180" />
                    Back
                </button>
                <motion.span
                    key={title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="font-bold text-2xl"
                >
                    {title}
                </motion.span>
                <button
                    className="embla__next flex text-gray-300 text-xs gap-2 items-center justify-center mr-4 hover:bg-black p-2 rounded-md transition-colors"
                    onClick={scrollNext}
                >
                    Next
                    <Image src={RightArrowWhite} alt="Next" />
                </button>
            </div>
            <div className="embla__viewport min-h-[80dvh]" ref={embla}>
                <motion.div
                    className="embla__container flex h-full w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 3, delay: 0.75 }}
                >
                    <div className="embla__slide flex-shrink-0 w-full h-full flex items-center justify-center text-3xl font-bold">
                        <Media urlData={urlData} />
                    </div>
                    <div className="embla__slide flex-shrink-0 w-full h-full flex items-center justify-center text-3xl font-bold">
                        <BunyipsLib />
                    </div>
                    <div className="embla__slide flex-shrink-0 w-full h-full flex items-center justify-center text-3xl font-bold">
                        <Impact />
                    </div>
                </motion.div>
            </div>
        </>
    );
}
