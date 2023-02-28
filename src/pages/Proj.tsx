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
                    style={{ backgroundImage: "url('/bunyipsc.png')", backgroundSize: "40%" }}
                    onClick={() => window.open("https://github.com/holo-lb/BunyipsChatapp/")}
                >
                    <h1>Bunyips Chatapp</h1>
                    <p>
                        A real-time chat application built for the members of the Murray Bridge Bunyips. Built in React
                        and TypeScript. Integrated as an official and approved application at Murray Bridge High School.
                    </p>
                </div>
                <div
                    className="box clk"
                    style={{ backgroundImage: "url('/bunyipst.png')", backgroundSize: "40%" }}
                    onClick={() => window.open("https://github.com/Murray-Bridge-Bunyips/BunyipsFTC/")}
                >
                    <h1>BunyipsFTC</h1>
                    <p>
                        Kotlin project containing all code used for FTC 15215's robots, involving control loops, robot
                        protocols, and routes.
                    </p>
                </div>
                <div
                    className="box clk"
                    style={{ backgroundImage: "url('/ceo.png')", backgroundSize: "40%" }}
                    onClick={() => window.open("https://github.com/holo-lb/Mind/")}
                >
                    <h1>Mind</h1>
                    <p>
                        A Flask adventure game with over 65 endings, featuring autosaving savestates, sessions, and
                        password protection.
                    </p>
                </div>
                <div
                    className="box clk"
                    style={{ backgroundImage: "url('/transparent.png')", backgroundSize: "40%" }}
                    onClick={() => window.open("https://github.com/holo-lb/lucasbubner/")}
                >
                    <h1>lucasbubner v2</h1>
                    <p>This very website! Built in React and TypeScript.</p>
                </div>
                <div
                    className="box clk"
                    style={{ backgroundImage: "url('/jsdos.png')", backgroundSize: "40%" }}
                    onClick={() => window.open("https://replit.com/@LUCASBUBNER/DosGames/")}
                >
                    <h1>DosGames</h1>
                    <p>
                        HTML+JS+CSS DosBox capable of playing a few games selectable at startup, utilising the JSDOS
                        framework.
                    </p>
                </div>
            </div>
        </PageWrapper>
    );
}

export default Proj;
