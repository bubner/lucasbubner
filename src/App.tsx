/**
 * Primary application module for the end-user.
 * @author Lucas Bubner, 2023
 */
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import "./App.css";

function App() {
    const [isWritten, setIsWritten] = useState(false);

    useEffect(() => {
        if (!isWritten) return;
        const script = document.createElement("script");
        script.src = "/stars.js";
        document.body.appendChild(script);
    }, [isWritten]);

    return (
        <>
            {isWritten && (
                <div className="bg-elem">
                    <canvas id="stars" />
                    <canvas id="pulse" />
                    <img id="bg" src="/starbg2.png" />
                    <div className="arrow-container">
                        <svg className="arrow" />
                    </div>
                </div>
            )}
            <div id="heading">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                        .typeString("computational<br />brilliance.")
                        .callFunction(() => {
                            setIsWritten(true);
                        })
                        .start();
                    }}
                />
            </div>
        </>
    );
}

export default App;
