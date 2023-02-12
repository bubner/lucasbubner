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
            const script = document.createElement("script");
            script.src = "/globe.js";
            document.body.appendChild(script);
        }, 1000);
    }, []);

    return (
        <div id="main">
            <div ref={winRef} />
            <div className="text-container">
                <p className="text-line">I am a self-taught,</p>
                <p className="text-line">young software developer.</p>
            </div>
            {isExplained && (
                <div id="maincontent">
                <div id="extd-bg" />
                    <div id="collarband">
                        {/* <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
                            <img id="collar-l" src="/collar.png" />
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={true}>
                            <img id="collar-r" src="/collar2.png" />
                        </AnimationOnScroll> */}
                        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
                            <div id="geo-globe">
                                <img id="pfp" src="/transparent.png" />
                                <canvas id="canvas" />
                            </div>
                        </AnimationOnScroll>
                    </div>
                    <div className="text-element">
                        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeOutLeft">
                            <p>
                                Powered by intuition, <br /> <br /> <br /> influenced by soul.
                            </p>
                        </AnimationOnScroll>
                    </div>
                    <div className="text-element">
                        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeOutLeft">
                            <p>
                                Stuff <br /> <br /> <br /> here
                            </p>
                        </AnimationOnScroll>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Main;
