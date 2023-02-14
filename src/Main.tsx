/**
 * Content module with primary information showcase.
 * @author Lucas Bubner, 2023
 */
import { createRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

    const comments = [
        "I have a strong passion for technology and innovation.",
        "I build and develop to solve problems.",
        "I have a dedicated work ethic.",
        "I ensure my projects are to only of the highest standards.",
        "I have a strong sense of responsibility and always strive to exceed expectations.",
        "I have skills in a wide range of hardware and software tools.",
        "I have experience communicating complex ideas in an innovative way.",
        "I captain and program for FTC Robotics Team 15215.",
        "I create intellectual property to improve and provide.",
        "I have experience in project management and delivering on time.",
        "I desire to positively impact the world through technology",
        "I am a high-achieving academic student.",
        "I am a critical thinker.",
        "I am proficient in multiple programming languages.",
        "I am a self-directed learner.",
        "I am committed to continuous learning and professional growth.",
        "I am dedicated to learning and improvement.",
        "I am a quick learner and able to adapt to new technologies and environments.",
        "I am an adaptive problem solver.",
    ];

    return (
        <div id="main">
            <div ref={winRef} />
            <div className="text-container">
                <p className="text-line">I am a self-driven,</p>
                <p className="text-line">young software developer.</p>
            </div>
            {isExplained && (
                <div id="maincontent">
                    <div id="stars-bg" />
                    <div id="extd-bg" />
                    <div id="collarband">
                        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
                            <img id="collar-l" src="/collar.png" />
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={true}>
                            <img id="collar-r" src="/collar2.png" />
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
                            <div id="geo-globe">
                                <img id="pfp" src="/transparent.png" />
                                <canvas id="canvas" />
                            </div>
                        </AnimationOnScroll>
                    </div>
                    <div className="text-element big">
                        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                            <p className="content">Powered by intuition,</p>
                            <p className="content">influenced by soul.</p>
                        </AnimationOnScroll>
                    </div>
                    {comments.map((comment, index) => (
                        <div className="text-element" key={index}>
                            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
                                <p className="content sm">{comment}</p>
                            </AnimationOnScroll>
                        </div>
                    ))}
                    <AnimationOnScroll style={{ animationDelay: "1s" }} animateIn="animate__fadeIn" animateOnce={true}>
                        <div className="text-element">
                            <p className="content huge">I am Lucas Bubner.</p>
                        </div>
                        <div className="mini-element">
                            <Link to="/i" id="next">
                                View more information <img src="/rightarrow.svg" className="rightarrow" />
                            </Link>
                        </div>
                    </AnimationOnScroll>
                </div>
            )}
        </div>
    );
}

export default Main;
