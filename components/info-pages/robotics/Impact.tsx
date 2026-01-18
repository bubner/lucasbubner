import SoundLink from "@/components/SoundLink";
import { BunyipsLibGif, DriveChart, HoldableActuator } from "@/images";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Big from "../Big";

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
                    <span>Systems</span>
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
                        <div>
                            <Big>30</Big> autonomous routines coordinated
                        </div>
                        <div>
                            <Big>10</Big> implemented reusable robot subsystems
                        </div>
                        <div className="flex justify-around items-center">
                            <Image src={BunyipsLibGif} alt="BunyipsLib auto" className="w-1/2 rounded-2xl" />
                            <div className="text-base italic w-1/2">
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
                            <Image src={HoldableActuator} alt="HoldableActuator chart" className="rounded-2xl p-2" />
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
                            <Image src={DriveChart} alt="Drive system chart" className="rounded-2xl p-2" />
                            <div className="text-base italic w-3/4">
                                Unique <b>modular</b>{" "}
                                <SoundLink
                                    target="_blank"
                                    className="underline text-blue-400"
                                    href="https://github.com/Murray-Bridge-Bunyips/BunyipsLib/tree/39f628e7d71113586cb98aaf0f106318c7b63a39/src/main/java/au/edu/sa/mbhs/studentrobotics/bunyipslib/subsystems/drive"
                                >
                                    drive interfaces
                                </SoundLink>{" "}
                                decoupling <SoundLink
                                    target="_blank"
                                    className="underline text-blue-400"
                                    href="https://github.com/Murray-Bridge-Bunyips/BunyipsLib/tree/39f628e7d71113586cb98aaf0f106318c7b63a39/src/main/java/au/edu/sa/mbhs/studentrobotics/bunyipslib/localization/accumulators"
                                >accumulator</SoundLink>-based pose estimation and <b>composable</b>{" "}
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
                    <span>Tooling</span>
                    TODO
                </div>
                <div>
                    <span>Education</span>
                    TODO
                </div>
            </div>
        </div>
    );
}
