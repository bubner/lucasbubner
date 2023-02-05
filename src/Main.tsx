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
        winRef.current?.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
            setIsExplained(true);
        }, 2000);
    }, []);

    return (
        <>
            <div className="text-container">
                <p className="text-line">I am a self-taught,</p>
                <p className="text-line">young software developer.</p>
            </div>
            <div ref={winRef} />
            {isExplained && (
                <>
                    <img id="extd-bg" src="/swl.png" />
                    <div className="text-element">
                        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeOutLeft">
                            <p>Powered by intuition, <br /> <br /> <br /> influenced by soul.</p>
                        </AnimationOnScroll>
                    </div>
                </>
            )}
        </>
    );
}

export default Main;
