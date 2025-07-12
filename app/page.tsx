
import Background from "./components/landing/Background";
import Pulse from "./components/landing/Pulse";
import Writer from "./components/landing/Writer";
import { TreeStatusProvider } from "./components/tree/TreeStatus";

import Next from "./components/landing/Next";
import ExitSlider from "./components/tree/ExitSlider";
import IconShowcase, { Icon } from "./components/landing/IconShowcase";
import { Bubner } from "./images";

/**
 * bubner.me main landing page.
 * @author Lucas Bubner, 2024
 */
export default function Index() {
    const topImages: Icon[] = [
        // TODO: use actual icons
        { src: Bubner, alt: "Bubner" },
        { src: Bubner, alt: "Bubner" },
        { src: Bubner, alt: "Bubner" },
        { src: Bubner, alt: "Bubner" },
        { src: Bubner, alt: "Bubner" },
        { src: Bubner, alt: "Bubner" },
        { src: Bubner, alt: "Bubner" },
        { src: Bubner, alt: "Bubner" },
        { src: Bubner, alt: "Bubner" },
        { src: Bubner, alt: "Bubner" },
        { src: Bubner, alt: "Bubner" },
        { src: Bubner, alt: "Bubner" },
        { src: Bubner, alt: "Bubner" },
        { src: Bubner, alt: "Bubner" },
        { src: Bubner, alt: "Bubner" },
        { src: Bubner, alt: "Bubner" },
    ];
    const bottomImages: Icon[] = [
        { src: Bubner, alt: "Bubner" },
        { src: Bubner, alt: "Bubner" },
        { src: Bubner, alt: "Bubner" },
        { src: Bubner, alt: "Bubner" },
        { src: Bubner, alt: "Bubner" },
        { src: Bubner, alt: "Bubner" },
        { src: Bubner, alt: "Bubner" },
        { src: Bubner, alt: "Bubner" },
        { src: Bubner, alt: "Bubner" },
        { src: Bubner, alt: "Bubner" },
        { src: Bubner, alt: "Bubner" },
        { src: Bubner, alt: "Bubner" },
        { src: Bubner, alt: "Bubner" },
        { src: Bubner, alt: "Bubner" },
        { src: Bubner, alt: "Bubner" },
        { src: Bubner, alt: "Bubner" },
    ];
    return (
        <ExitSlider exitDirection="up">
            <main role="main">
                <TreeStatusProvider resetRoot>
                    <Background />
                    <div className="w-full h-dvh flex items-center flex-col justify-center absolute gap-24">
                        <IconShowcase icons={topImages} direction="right" />
                        <Pulse />
                        <Writer />
                        <IconShowcase icons={bottomImages} direction="left" />
                    </div>
                    <Next />
                </TreeStatusProvider>
            </main>
        </ExitSlider>
    );
}
