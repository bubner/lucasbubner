"use client";

import { RightArrowWhite } from "@/app/images";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Suspense, useCallback } from "react";
import BunyipsLib from "./BunyipsLib";
import Impact from "./Impact";
import Media, { URLData } from "./Media";
import LoadingWheel from "@/app/components/info-pages/LoadingWheel";
import useSound from "use-sound";

function Slide({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="embla__slide flex-shrink-0 w-full h-full flex items-center justify-center text-3xl font-bold">
            <div className="flex flex-col">
                <span className="text-bold text-xl">{title}</span>
                {children}
            </div>
        </div>
    );
}

export default function Slides({ urlData }: { urlData: Promise<URLData | null>[] }) {
    const [embla, emblaApi] = useEmblaCarousel({ loop: true });
    const [playSound] = useSound("/sounds/tap.wav");
    const scrollPrev = useCallback(() => {
        emblaApi?.scrollPrev();
        playSound();
    }, [emblaApi, playSound]);
    const scrollNext = useCallback(() => {
        emblaApi?.scrollNext();
        playSound();
    }, [emblaApi, playSound]);

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
                <span className="font-bold text-2xl">Robotics</span>
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
                    <Slide title="Media">
                        <Suspense fallback={<LoadingWheel containerHeight="600px" />}>
                            <Media urlData={urlData} />
                        </Suspense>
                    </Slide>
                    <Slide title="BunyipsLib">
                        <BunyipsLib />
                    </Slide>
                    <Slide title="Impact">
                        <Impact />
                    </Slide>
                </motion.div>
            </div>
        </>
    );
}
