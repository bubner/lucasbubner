import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
                    TODO
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
