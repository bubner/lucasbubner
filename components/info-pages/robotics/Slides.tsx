"use client";

import Box from "@/components/info-pages/Box";
import { RightArrowWhite } from "@/images";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { useCallback } from "react";
import useSound from "use-sound";
import LazyLoadedImage from "../LazyLoadedImage";
import BunyipsLib from "./BunyipsLib";
import Impact from "./Impact";
import Media, { OpenGraphData } from "./Media";

function Slide({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="embla__slide flex-shrink-0 w-full h-full flex text-3xl font-bold">
            <div className="flex flex-col h-full w-full max-h-[100dvh]">
                <span className="text-bold text-xl pb-2">{title}</span>
                <div className="overflow-y-scroll pb-12">{children}</div>
            </div>
        </div>
    );
}

export default function Slides({ ogData }: { ogData: OpenGraphData[] }) {
    const [embla, emblaApi] = useEmblaCarousel({ loop: true });
    const [playAppearSound] = useSound("/sounds/tap.wav");
    const scrollPrev = useCallback(() => {
        emblaApi?.scrollPrev();
        playAppearSound();
    }, [emblaApi, playAppearSound]);
    const scrollNext = useCallback(() => {
        emblaApi?.scrollNext();
        playAppearSound();
    }, [emblaApi, playAppearSound]);

    return (
        <Box className="w-full h-full flex items-center justify-center flex-col xl:flex-row">
            <div className="embla w-full h-full max-h-dvh">
                <div className="flex my-2 items-end justify-between">
                    <button
                        className="embla__prev flex text-gray-300 text-xs gap-2 items-center justify-center ml-4 p-2 hover:bg-black/20 rounded-2xl transition-colors"
                        onClick={scrollPrev}
                    >
                        <LazyLoadedImage src={RightArrowWhite} alt="Previous" className="rotate-180 min-w-2" />
                        Back
                    </button>
                    <span className="font-bold text-2xl mx-2">Robotics</span>
                    <button
                        className="embla__next flex text-gray-300 text-xs gap-2 items-center justify-center mr-4 hover:bg-black/20 p-2 rounded-2xl transition-colors"
                        onClick={scrollNext}
                    >
                        Next
                        <LazyLoadedImage src={RightArrowWhite} alt="Next" className="min-w-2" />
                    </button>
                </div>
                <div className="embla__viewport min-h-[80dvh]" ref={embla}>
                    <motion.div
                        className="embla__container flex h-full w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 3, delay: 0.75 }}
                    >
                        <Slide title="Media">
                            <Media ogData={ogData} />
                        </Slide>
                        <Slide title="BunyipsLib">
                            <BunyipsLib />
                        </Slide>
                        <Slide title="Impact">
                            <Impact />
                        </Slide>
                    </motion.div>
                </div>
            </div>
        </Box>
    );
}
