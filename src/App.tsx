/**
 * Primary application module for the end-user.
 * @author Lucas Bubner, 2023
 */
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import Main from "./Main";
import "./App.css";

function App() {
    const [isWritten, setIsWritten] = useState(false);
    const [introDone, setIntroDone] = useState(false);

    const handleIntroFinish = () => {
        window.removeEventListener("scroll", handleIntroFinish);
        window.scroll({
            top: window.innerHeight,
            behavior: "smooth",
        });
        setTimeout(() => {
            setIntroDone(true);
        }, 500);
    };

    useEffect(() => {
        if (!isWritten) return;
        const script = document.createElement("script");
        script.src = "/stars.js";
        document.body.appendChild(script);
        window.addEventListener("scroll", handleIntroFinish);
    }, [isWritten]);

    return (
        <>
            {isWritten && !introDone && (
                <>
                    <div className="bg-elem">
                        <div className="dots" />
                        <canvas id="stars" />
                        <canvas id="pulse" />
                        <img id="bg" src="/starbg2.png" />
                        <div className="arrow-container">
                            <svg className="arrow" onClick={() => handleIntroFinish()} />
                        </div>
                    </div>
                </>
            )}
            {!introDone && (
                <div id="heading">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(500)
                                .typeString("computational<br />brilliance.")
                                .callFunction(() => {
                                    setIsWritten(true);
                                })
                                .start();
                        }}
                    />
                </div>
            )}
            {isWritten && <div style={{"height": "100vh", "display": introDone ? "none" : "block"}} />}
            {introDone && <Main />}
        </>
    );
}

export default App;
