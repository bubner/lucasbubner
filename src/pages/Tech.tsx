/**
 * Technologies I work with display page.
 * @author Lucas Bubner, 2023
 */
import "./Boxes.css";
import PageWrapper from "../PageWrapper";

function Tech() {
    return (
        <PageWrapper>
            <div className="content-bg" />
            <div className="container">
                <div className="box" style={{ backgroundImage: "url('/scrmod.svg')", backgroundSize: "40%" }}>
                    <h1>Technology</h1>
                    <p>
                        I am experienced in usage of industry-used programming tools and services, as well as a range of
                        programming languages in order to implement and design solutions to real-world problems.
                    </p>
                </div>
                <div className="box" style={{ backgroundImage: "url('/reactts.png')", backgroundSize: "100%" }}>
                    <h1>TypeScript & React</h1>
                    <p>
                        Utilising TypeScript in complex web development environments mixed with the React framework to
                        develop dynamic applications.
                    </p>
                </div>
                <div className="box" style={{ backgroundImage: "url('/kotlin.svg')", backgroundSize: "40%" }}>
                    <h1>Kotlin</h1>
                    <p>
                        Utilising to develop robot software with complex control-loops for autonomy and locomotion,
                        while using these control-loops to teach others about programming concepts.
                    </p>
                </div>
                <div className="box" style={{ backgroundImage: "url('/python.svg')", backgroundSize: "50%" }}>
                    <h1>Python</h1>
                    <p>
                        Utilising to develop web application backends and computationally intensive applications to
                        compute complex matters, including analysis of data and usage of artificial intelligence.
                    </p>
                </div>
                <div className="box" style={{ backgroundImage: "url('/ai.svg')", backgroundSize: "50%" }}>
                    <h1>Artificial Intelligence</h1>
                    <p>
                        Currently learning about the usage and implementation of artificial intelligence in real-world
                        applications, including the usage of neural networks and machine learning to solve complex
                        problems.
                    </p>
                </div>
                <div className="box" style={{ backgroundImage: "url('/git.svg')", backgroundSize: "40%" }}>
                    <h1>Services & workflows</h1>
                    <p>
                        Utilised Backend-as-a-Service products such as Google's Firebase to build highly scalable
                        applications with OAuth and relational databases. Integrates the Git workflow into projects and
                        is proficient with branch, database, and end-user protection rules to build rigourous
                        applications.
                    </p>
                </div>
            </div>
        </PageWrapper>
    );
}

export default Tech;
