/**
 * Primary application module for the end-user.
 * @author Lucas Bubner, 2023
 */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Main from "./Main";
import "./App.css";

function App() {
    const [isWritten, setIsWritten] = useState(false);
    const [introDone, setIntroDone] = useState(false);
    const [shouldMove, setShouldMove] = useState(false);

    const handleIntroFinish = () => {
        window.removeEventListener("scroll", handleIntroFinish);
        setShouldMove(true);
        setTimeout(() => {
            setIntroDone(true);
        }, 400);
    };

    useEffect(() => {
        if (!isWritten) return;
        const script = document.createElement("script");
        script.src = "/stars.js";
        document.body.appendChild(script);
        window.addEventListener("scroll", handleIntroFinish);
    }, [isWritten]);

    return (
        <div id="App">
            <div id="intro" style={{ transform: shouldMove ? "translateY(-150vh)" : "translate(0)" }}>
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
            </div>
            {!introDone && (
                <>
                    <Link id="skip" to="/i" style={{ opacity: shouldMove ? "0" : "1" }}>
                        Skip sequence ⮞
                    </Link>
                    <div id="heading" style={{ transform: shouldMove ? "translate(-50vw, -200vh)" : "reset" }}>
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
                </>
            )}
            {isWritten && !introDone && <div style={{ height: "1px", display: introDone ? "none" : "block" }} />}
            {introDone && <Main />}
        </div>
    );
}

export default App;
