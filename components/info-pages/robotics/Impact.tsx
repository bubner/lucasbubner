import SoundLink from "@/components/SoundLink";
import {
    BunyipBellower,
    BunyipsLibGif,
    DriveChart,
    HoldableActuator,
    iAwards23Merit,
    iAwards25Finalist,
    Logbook,
    Ranking,
    RRShowcase,
} from "@/images";
import { motion } from "framer-motion";
import { useRef } from "react";
import Big from "../Big";
import LazyLoadedImage from "../LazyLoadedImage";

export default function Impact() {
    const attributes = [
        "Event Management Systems",
        "Team Management",
        "Leadership",
        "Software Mentoring",
        "Library Development",
        "Student Engagement",
    ];
    // Doubled for infinite scroll
    const mappedAttributes = attributes.map((attribute, index) => (
        <div key={index} className="flex items-center">
            <span className="px-4">{attribute}</span>
            {index < attributes.length && <span>•</span>}
        </div>
    ));

    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <div className="flex flex-col items-center">
            <div
                ref={scrollRef}
                className="relative flex overflow-hidden whitespace-nowrap bg-black/50 h-12 rounded-xl text-gray-300 w-[calc(100%-32px)]"
            >
                <motion.div
                    className="flex"
                    animate={{ x: [0, -(scrollRef.current?.scrollWidth ?? 0) / 2] }}
                    transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
                >
                    {mappedAttributes}
                    {mappedAttributes}
                </motion.div>
            </div>
            <div className="flex flex-col w-full xl:*:w-1/3 xl:flex-row text-xl p-4 divide-x divide-white divide-opacity-0 xl:divide-opacity-100 *:flex *:*:w-full *:flex-col">
                <div>
                    <span className="text-2xl p-2">Systems</span>
                    <ul className="list-disc ml-3 font-normal text-base text-left p-4">
                        <li>
                            Designed <b>reliable</b>, <b>scalable</b> systems to survive <b>competition pressure</b> and be <b>reused</b> between
                            seasons
                        </li>
                        <li>
                            Long-term <b>open-source</b> robotics infrastructure improving <b>efficiency</b>, <b>fault tolerance</b>, and reducing
                            overhead
                        </li>
                    </ul>
                    <div className="flex flex-col w-full *:p-2 *:text-2xl">
                        <div className="w-[95%]">
                            <Big scale={5}>30</Big> autonomous routines coordinated
                        </div>
                        <div className="w-[95%]">
                            <Big scale={5}>10</Big> implemented reusable robot subsystems
                        </div>
                        <div className="flex justify-around items-center mt-4">
                            <LazyLoadedImage src={BunyipsLibGif} alt="BunyipsLib auto" className="rounded-2xl" containerClassName="w-1/2" />
                            <div className="text-base italic w-1/2 px-2">
                                A 67 point Autonomous program written{" "}
                                <SoundLink
                                    target="_blank"
                                    className="underline text-blue-400"
                                    href="https://github.com/Murray-Bridge-Bunyips/BunyipsFTC/blob/a7861c863a5b31bfa8c0a04e1120aa371d452a3a/TeamCode/Proto/src/main/java/au/edu/sa/mbhs/studentrobotics/ftc15215/proto/autonomous/QuadBasketPlacer.kt"
                                >
                                    in 118 lines.
                                </SoundLink>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <LazyLoadedImage src={HoldableActuator} alt="HoldableActuator chart" />
                            <div className="text-base italic w-3/4">
                                <b>Reusable</b>{" "}
                                <SoundLink
                                    target="_blank"
                                    className="underline text-blue-400"
                                    href="https://github.com/Murray-Bridge-Bunyips/BunyipsLib/blob/39f628e7d71113586cb98aaf0f106318c7b63a39/src/main/java/au/edu/sa/mbhs/studentrobotics/bunyipslib/subsystems/HoldableActuator.java"
                                >
                                    actuator subsystem
                                </SoundLink>{" "}
                                architecture demonstrating state, safety, and recovery control.
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <LazyLoadedImage src={DriveChart} alt="Drive system chart" />
                            <div className="text-base italic w-3/4">
                                Unique <b>modular</b>{" "}
                                <SoundLink
                                    target="_blank"
                                    className="underline text-blue-400"
                                    href="https://github.com/Murray-Bridge-Bunyips/BunyipsLib/tree/39f628e7d71113586cb98aaf0f106318c7b63a39/src/main/java/au/edu/sa/mbhs/studentrobotics/bunyipslib/subsystems/drive"
                                >
                                    drive interfaces
                                </SoundLink>{" "}
                                decoupling{" "}
                                <SoundLink
                                    target="_blank"
                                    className="underline text-blue-400"
                                    href="https://github.com/Murray-Bridge-Bunyips/BunyipsLib/tree/39f628e7d71113586cb98aaf0f106318c7b63a39/src/main/java/au/edu/sa/mbhs/studentrobotics/bunyipslib/localization/accumulators"
                                >
                                    accumulator
                                </SoundLink>
                                -based pose estimation and <b>composable</b>{" "}
                                <SoundLink
                                    target="_blank"
                                    className="underline text-blue-400"
                                    href="https://github.com/Murray-Bridge-Bunyips/BunyipsLib/tree/39f628e7d71113586cb98aaf0f106318c7b63a39/src/main/java/au/edu/sa/mbhs/studentrobotics/bunyipslib/localization"
                                >
                                    localizers
                                </SoundLink>
                                .
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="text-2xl p-2">Tooling</span>
                    <div className="flex flex-col">
                        <h3 className="text-lg pb-1 pt-1">Bunyip Bellower</h3>
                        <ul className="list-disc ml-3 font-normal text-base text-left p-4 pt-0">
                            <li>
                                Identified <b>structural communication limitations</b> impacting engagement and coordination
                            </li>
                            <li>
                                Pitched the <b>Bunyip Bellower</b> utilising <b>secure</b>, Department of Education aware practices,{" "}
                                <b>highlighting</b> how chat systems can <b>safely</b> be used in an enterprise
                            </li>
                            <li>
                                Recognised in the <b>AIIA iAwards</b> for innovating workflows and bringing <b>permanent change</b> to collaboration
                                within robotics
                            </li>
                        </ul>
                        <div className="flex items-center justify-center">
                            <LazyLoadedImage src={BunyipBellower} alt="Bunyip Bellower" width={150} />
                            <LazyLoadedImage src={iAwards23Merit} alt="2023 iAwards winner" width={150} />
                        </div>
                        <h3 className="text-lg pb-1 pt-6">RoboRegistry</h3>
                        <ul className="list-disc ml-3 font-normal text-base text-left p-4 pt-0">
                            <li>
                                Built <b>automation</b> systems reducing manual labour and human error in event management <b>tailored to FIRST®</b>
                            </li>
                            <li>
                                OWASP-aligned, <b>secure platform</b> for live events and data organisation
                            </li>
                            <li>
                                Registration, check-in, and <b>data visualisation</b> utilities to meet <b>robust</b> tooling requirements
                            </li>
                        </ul>
                        <div className="flex items-center justify-center">
                            <LazyLoadedImage src={RRShowcase} alt="RoboRegistry" className="px-5" />
                        </div>
                        <h3 className="text-lg pb-1 pt-6">Bunyip Logbook</h3>
                        <ul className="list-disc ml-3 font-normal text-base text-left p-4 pt-0">
                            <li>
                                Designed within <b>strict external constraints</b> to improve documentation in FTC engineering
                            </li>
                            <li>
                                Selected <b>compliant</b> backend architecture despite simpler implementation paths
                            </li>
                            <li>
                                <b>Extensible</b> format pitched to <b>iAwards</b> judges demonstrating <b>rigour</b> and{" "}
                                <b>translating technical requirements</b> into non-technical outcomes
                            </li>
                        </ul>
                        <div className="flex items-center justify-center">
                            <LazyLoadedImage src={Logbook} alt="Bunyip Logbook" width={150} />
                            <LazyLoadedImage src={iAwards25Finalist} alt="iAwards 2025 finalist" width={150} />
                        </div>
                    </div>
                </div>
                <div>
                    <span className="text-2xl p-3">Education</span>
                    <div className="w-[95%] p-3">
                        <Big scale={6}>4</Big> teams mentored
                    </div>
                    <div className="w-[95%] p-3">
                        <Big scale={6}>1,350+</Big> hours dedicated
                    </div>
                    <div className="w-[95%] p-3">
                        <Big scale={6}>5</Big> mentored robots developed
                    </div>
                    <ul className="list-disc ml-4 font-normal text-base text-left p-4 pt-2">
                        <li>
                            Delivered <b>peer-to-peer</b> student mentoring in programming and robot design
                        </li>
                        <li>
                            Introduced <b>new rookies</b> into robot and systems programming, encouraging <b>independent application of skills</b>
                        </li>
                        <li>
                            Drove significant <b>competitive performance improvements</b> through direct member upskilling
                        </li>
                    </ul>
                    <div className="flex flex-col items-center justify-center">
                        <LazyLoadedImage src={Ranking} alt="HoldableActuator chart" containerClassName="lg:px-6 lg:ml-3" className="rounded-2xl" />
                        <div className="text-base italic w-full p-4">
                            <b>Year-by-year improvement</b> of FTC 15215, 22407, and 24736 in qualification ranking at the{" "}
                            <b>Australian National Championship</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
