/**
 * My worked on projects display page.
 * @author Lucas Bubner, 2023
 */
import PageWrapper from "../PageWrapper";
import "./Boxes.css";

function Proj() {
    return (
        <PageWrapper>
            <div className="content-bg" />
            <div className="container no-mid">
                <div
                    className="box clk"
                    style={{ backgroundImage: "url('/fchess.png')", backgroundSize: "40%" }}
                    onClick={() => window.open("https://github.com/hololb/FusionChess/")}
                >
                    <h1>Fusion Chess</h1>
                    <span className="clicknoti">(click)</span>
                    <p>
                        A playable custom chess varient that changes the rules of the game to include piece fusion
                        instead of capturing. Built in React and TypeScript.
                    </p>
                </div>
                <div
                    className="box clk"
                    style={{ backgroundImage: "url('/bunyipsc.png')", backgroundSize: "40%" }}
                    onClick={() => window.open("https://github.com/hololb/BunyipsChatapp/")}
                >
                    <h1>Bunyips Chatapp</h1>
                    <span className="clicknoti">(click)</span>
                    <p>
                        A real-time Firebase chat application built for the members of the Murray Bridge Bunyips. Built
                        in React and TypeScript. Designed to solve our club's issue of internal communication.
                    </p>
                </div>
                <div
                    className="box clk"
                    style={{ backgroundImage: "url('/bunyipst.png')", backgroundSize: "40%" }}
                    onClick={() => window.open("https://github.com/Murray-Bridge-Bunyips/BunyipsFTC/")}
                >
                    <h1>BunyipsFTC</h1>
                    <span className="clicknoti">(click)</span>
                    <p>
                        Kotlin project containing all code used for FTC 15215's robots, involving control loops, robot
                        protocols, and routes used at official events and competitions.
                    </p>
                </div>
                <div
                    className="box clk"
                    style={{ backgroundImage: "url('/ceo.png')", backgroundSize: "40%" }}
                    onClick={() => window.open("https://github.com/hololb/Mind/")}
                >
                    <h1>Mind</h1>
                    <span className="clicknoti">(click)</span>
                    <p>
                        A Flask adventure game with over 65 endings, featuring autosaving savestates, sessions, and
                        password protection.
                    </p>
                </div>
                <div
                    className="box clk"
                    style={{ backgroundImage: "url('/transparent.png')", backgroundSize: "40%" }}
                    onClick={() => window.open("https://github.com/hololb/lucasbubner/")}
                >
                    <h1>lucasbubner v2</h1>
                    <span className="clicknoti">(click)</span>
                    <p>
                        This very website! Built in React and TypeScript, using features from react-router and
                        framer-motion.
                    </p>
                </div>
                <div
                    className="box clk"
                    style={{ backgroundImage: "url('/jsdos.png')", backgroundSize: "40%" }}
                    onClick={() => window.open("https://replit.com/@LUCASBUBNER/DosGames/")}
                >
                    <h1>DosGames</h1>
                    <span className="clicknoti">(click)</span>
                    <p>
                        Web-powered DosBox capable of playing a few games selectable at startup, utilising the JSDOS
                        framework. One of 50 winners for the Replit Creator Fund, August 2022.
                    </p>
                </div>
            </div>
        </PageWrapper>
    );
}

export default Proj;
