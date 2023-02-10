/**
 * Content module with primary information showcase.
 * @author Lucas Bubner, 2023
 */
import { createRef, useEffect, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./Main.css";

function Main() {
    const [isExplained, setIsExplained] = useState(false);
    const winRef = createRef<HTMLDivElement>();
    useEffect(() => {
        winRef.current?.scrollIntoView({ behavior: "auto" });
        setTimeout(() => {
            setIsExplained(true);
        }, 1400);
        const script = document.createElement("script");
        script.src = "/globe.js"
        document.body.appendChild(script);
    }, []);

    return (
        <>
            <div ref={winRef} />
            <div className="text-container">
                <p className="text-line">I am a self-taught,</p>
                <p className="text-line">young software developer.</p>
            </div>
            <img id="collar-l" src="/collar.png" />
            <img id="collar-r" src="/collar2.png" />
            <img id="extd-bg" src="/starbg2.png" />
            <div id="geo-globe">
                <img id="pfp" src="/transparent.png" />
                <canvas id="canvas" />
            </div>
            {isExplained && (
                <div id="maincontent">
                    <div className="text-element">
                        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeOutLeft">
                            <p>Powered by intuition, <br /> <br /> <br /> influenced by soul.</p>
                        </AnimationOnScroll>
                    </div>
                    <div className="text-element">
                        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeOutLeft">
                            <p>Stuff <br /> <br /> <br /> here</p>
                        </AnimationOnScroll>
                    </div>
                </div>
            )}
        </>
    );
}

export default Main;
