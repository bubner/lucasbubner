import Background from "./components/landing/Background";
import Pulse from "./components/landing/Pulse";
import Writer from "./components/landing/Writer";
import { TreeStatusProvider } from "./components/TreeStatus";

import NextButton from "./components/landing/NextButton";
import ExitSlider from "./components/landing/ExitSlider";
import IconShowcase, { Icon } from "./components/landing/IconShowcase";
import {
    BunyipBellower,
    Bunyips,
    CSharp,
    Firebase,
    Flask,
    FTC,
    FusionChess,
    Git,
    GitHub,
    iAwards,
    iAwards23Merit,
    iAwards25,
    iAwards25Finalist,
    Java,
    Logbook,
    Next,
    Python,
    React,
    RoboRegistry,
    RoboticsLogos,
    Tailwind,
    TypeScript,
    Unity,
    Vercel,
} from "./images";

/**
 * bubner.me main landing page.
 * @author Lucas Bubner, 2024
 */
export default function Index() {
    function shuffle(array: Icon[]): Icon[] {
        return array
            .map((v) => ({ val: v, rand: Math.random() }))
            .sort((a, b) => a.rand - b.rand)
            .map((vp) => vp.val);
    }

    const topImages: Icon[] = shuffle([
        { src: FTC, alt: "Society: FIRST Tech Challenge Team Captain" },
        { src: RoboticsLogos, alt: "Society: Murray Bridge High School Student Robotics Club" },
        { src: iAwards, alt: "Society: iAwards 2023 Participant" },
        { src: iAwards23Merit, alt: "Society: iAwards 2023 National Merit" },
        { src: iAwards25, alt: "Society: iAwards 2025 Participant" },
        { src: iAwards25Finalist, alt: "Society: iAwards 2025 Finalist" },
        { src: Logbook, alt: "Project: Bunyip Logbook" },
        { src: BunyipBellower, alt: "Project: Bunyip Bellower" },
        { src: FusionChess, alt: "Project: Fusion Chess" },
        { src: RoboRegistry, alt: "Project: RoboRegistry" },
        { src: Bunyips, alt: "Project: BunyipsLib" },
    ]);

    const bottomImages: Icon[] = shuffle([
        { src: Firebase, alt: "Platform: Firebase" },
        { src: Vercel, alt: "Platform: Vercel" },
        { src: Unity, alt: "Platform: Unity" },
        { src: GitHub, alt: "Platform: GitHub" },
        { src: React, alt: "Framework: React" },
        { src: Flask, alt: "Framework: Flask" },
        { src: Next, alt: "Framework: Next.js" },
        { src: Tailwind, alt: "Framework: Tailwind CSS" },
        { src: CSharp, alt: "Language: C#" },
        { src: TypeScript, alt: "Language: TypeScript" },
        { src: Python, alt: "Language: Python" },
        { src: Java, alt: "Language: Java" },
        { src: Git, alt: "Tool: Git" },
    ]);

    return (
        <ExitSlider exitDirection="up">
            <main role="main">
                <TreeStatusProvider resetRoot>
                    <Background />
                    <div className="w-full h-dvh flex items-center flex-col justify-center absolute gap-24">
                        <IconShowcase icons={topImages} size={96} direction="right" />
                        <Pulse />
                        <Writer />
                        <IconShowcase icons={bottomImages} size={48} direction="left" />
                    </div>
                    <NextButton />
                </TreeStatusProvider>
            </main>
        </ExitSlider>
    );
}
