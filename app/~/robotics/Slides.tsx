"use client";

import stepAccumulate from "@/app/components/info-pages/timing";
import { Bellower, FIRSTDeansList, PowerFM, RightArrowWhite } from "@/app/images";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useCallback } from "react";
import useSound from "use-sound";
import BunyipsLib from "./BunyipsLib";
import Impact from "./Impact";
import Media, { URLData } from "./Media";

function Slide({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="embla__slide flex-shrink-0 w-full h-full flex items-center justify-center text-3xl font-bold">
            <div className="flex flex-col h-full max-h-[100dvh]">
                <span className="text-bold text-xl pb-2">{title}</span>
                <div className="overflow-y-scroll pb-12">{children}</div>
            </div>
        </div>
    );
}

export default function Slides({ urlData }: { urlData: Promise<URLData | null>[] }) {
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
    const entryDelay = stepAccumulate(0.4);
    const initialDelay = 1.25;

    function Briefing({
        alignRight,
        image,
        title,
        children,
    }: {
        alignRight?: boolean;
        image: StaticImageData;
        title: string;
        children: React.ReactNode;
    }) {
        return (
            <motion.div
                initial={{ opacity: 0, x: -100 * (alignRight ? -1 : 1) }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: initialDelay + entryDelay.next().value!!, type: "tween" }}
                onAnimationComplete={() => playAppearSound()}
                className={`flex gap-4 my-12 xl:my-6 flex-col ${alignRight ? "xl:flex-row-reverse" : "xl:flex-row"}`}
            >
                <Image src={image} className="rounded-xl object-cover w-full xl:w-1/2 max-w-[400px]" width={400} height={300} alt={title} />
                <div className="flex flex-col">
                    <div className={`text-2xl ${alignRight ? "text-right" : "text-left"}`}>{title}</div>
                    {children}
                </div>
            </motion.div>
        );
    }

    return (
        <>
            <div className="flex my-2 items-end justify-between">
                <button
                    className="embla__prev flex text-gray-300 text-xs gap-2 items-center justify-center ml-4 p-2 hover:bg-black/20 rounded-2xl transition-colors"
                    onClick={scrollPrev}
                >
                    <Image src={RightArrowWhite} alt="Previous" className="rotate-180" />
                    Back
                </button>
                <span className="font-bold text-2xl">Robotics</span>
                <button
                    className="embla__next flex text-gray-300 text-xs gap-2 items-center justify-center mr-4 hover:bg-black/20 p-2 rounded-2xl transition-colors"
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
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full md:w-1/2 p-4 pt-0 text-base font-normal text-left">
                                <motion.p
                                    className="text-4xl w-full !max-w-full border border-t-0 border-l-0 border-r-0 !pl-0 mb-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.5 }}
                                >
                                    <strong>Empowering</strong> regional high-school students through FIRST® Robotics
                                </motion.p>
                                <Briefing image={FIRSTDeansList} title="FIRST® Dean's List Finalist">
                                    <ul className="list-disc ml-4">
                                        <li>
                                            <b>Nationally recognised</b> as one of three students within Australia for upholding the FIRST®{" "}
                                            <b>core values</b>
                                        </li>
                                        <li>
                                            Demonstrated impact as a <b>four-year club captain</b> through <b>leadership</b>, <b>technical ability</b>
                                            , <b>mentoring teammates</b>, and
                                            <b> fostering collaboration</b>
                                        </li>
                                        <li>
                                            Advanced <b>STEM participation</b> in <b>regional communities</b>, expanding access to
                                            <b> student robotics in SA</b>
                                        </li>
                                    </ul>
                                </Briefing>
                                <Briefing alignRight image={Bellower} title="iAwards Innovations">
                                    <ul className="list-disc ml-4">
                                        <li>
                                            <b>Multi-year</b> award winning entries from the <b>AIIA iAwards</b> for STEM innovation inspired through
                                            robotics
                                        </li>
                                        <li>
                                            Developed the <b>Bunyip Bellower</b> to win the <b>SA/NT Student & Education</b> category, and nationally
                                            merited as a final contender against <b>national university entries</b> in 2023
                                        </li>
                                        <li>
                                            Designed the <b>Bunyip Logbook</b> in assistance to document the <b>engineering design process</b> within
                                            robotics workshops, recognised as an SA/NT finalist in 2025
                                        </li>
                                    </ul>
                                </Briefing>
                                <Briefing image={PowerFM} title="Media Outreach">
                                    <ul className="list-disc ml-4">
                                        <li>
                                            Featured across <b>radio, school events, and public platforms</b> promoting
                                            <b> robotics and STEM pathways</b>
                                        </li>
                                        <li>
                                            Directly contributed to <b>$24,000+ in funding</b> for visibility of <b>student robotics programs</b> in
                                            regional Australia
                                        </li>
                                        <li>
                                            Represented <b>student-led robotics innovation</b> as <b>club captain</b> across public and media
                                            platforms
                                        </li>
                                    </ul>
                                </Briefing>
                            </div>
                            <Media urlData={urlData} />
                        </div>
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
