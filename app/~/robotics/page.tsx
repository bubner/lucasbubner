"use client";

import Box from "@/app/components/info-pages/Box";
import Background from "@/app/components/landing/Background";
import { Bubner, BunyipBellower, RightArrowWhite } from "@/app/images";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useCallback } from "react";

export default function Robotics() {
    const [embla, emblaApi] = useEmblaCarousel({ loop: true });
    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    return (
        <Box className="w-full h-full flex items-center justify-center flex-col xl:flex-row">
            <div className="embla w-full h-full">
                <div className="flex my-2 items-end justify-between">
                    <button
                        className="embla__prev flex text-gray-300 text-xs gap-2 items-center justify-center ml-4 p-1 hover:bg-gray-800 rounded-md transition-colors"
                        onClick={scrollPrev}
                    >
                        <Image src={RightArrowWhite} alt="Previous" className="rotate-180" />
                        Previous
                    </button>
                    {/* <span className="font-bold text-2xl">Robotics</span> */}
                    <button
                        className="embla__next flex text-gray-300 text-xs gap-2 items-center justify-center mr-4 hover:bg-gray-800 p-1 rounded-md transition-colors"
                        onClick={scrollNext}
                    >
                        Next
                        <Image src={RightArrowWhite} alt="Next" />
                    </button>
                </div>
                <div className="embla__viewport min-h-[80dvh]" ref={embla}>
                    <motion.div className="embla__container flex h-full w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3, delay: 0.75 }}>
                        <div className="embla__slide flex-shrink-0 w-full h-full flex items-center justify-center text-3xl font-bold">
                            1
                        </div>
                        <div className="embla__slide flex-shrink-0 w-full h-full flex items-center justify-center text-3xl font-bold">
                            2
                        </div>
                        <div className="embla__slide flex-shrink-0 w-full h-full flex items-center justify-center text-3xl font-bold">
                            3
                        </div>
                    </motion.div>
                </div>
            </div>
        </Box>
    );
}
