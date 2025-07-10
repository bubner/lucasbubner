
import Background from "./components/landing/Background";
import Pulse from "./components/landing/Pulse";
import Writer from "./components/landing/Writer";
import { TreeStatusProvider } from "./components/tree/TreeStatus";

import Next from "./components/landing/Next";
import ExitSlider from "./components/tree/ExitSlider";

/**
 * bubner.me main landing page.
 * @author Lucas Bubner, 2024
 */
export default function Index() {
    return (
        <ExitSlider exitDirection="up">
            <main role="main">
                <TreeStatusProvider resetRoot>
                    <Background />
                    <div className="w-full h-dvh flex items-center flex-col justify-center absolute">
                        <Pulse />
                        <Writer />
                    </div>
                    <Next />
                </TreeStatusProvider>
            </main>
        </ExitSlider>
    );
}
