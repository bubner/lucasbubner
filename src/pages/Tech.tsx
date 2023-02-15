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
                <div className="box" style={{ backgroundImage: "url('/technology.svg')", backgroundSize: "40%" }}>
                    <h1>Technology</h1>
                    <p>
                        I am experienced in usage of industry-used programming tools and services, as well as a range of
                        programming languages in order to implement solutions.
                    </p>
                </div>
                <div className="box" style={{ backgroundImage: "url('/reactts.png')", backgroundSize: "100%" }}>
                    <h1>TypeScript & React</h1>
                    <p>
                        Utilising TypeScript in complex web development environments mixed with the React framework to
                        develop dynamic applications.
                    </p>
                </div>
                <div className="box" style={{ backgroundImage: "url('/kotlin.svg')" }}>
                    <h1>Kotlin</h1>
                    <p>
                        Utilising to develop robot software with complex control-loops for autonomy and locomotion,
                        while using these control-loops to teach others about programming concepts.
                    </p>
                </div>
                <div className="box" style={{ backgroundImage: "url('/python.svg')", backgroundSize: "50%" }}>
                    <h1>Python</h1>
                    <p>
                        Utilising to develop computationally intensive applications such as data management or simple
                        applications. Able to solve and construct solutions through implementing features and
                        constraints throughout a workflow.
                    </p>
                </div>
                <div className="box" style={{ backgroundImage: "url('/scrmod.svg')", backgroundSize: "50%" }}>
                    <h1>Linux systems</h1>
                    <p>
                        Familiar with the Bash command line and a deep understanding of internal computer system kernels
                        and low-level implementations such as hardware operations.
                    </p>
                </div>
                <div className="box" style={{ backgroundImage: "url('/git.svg')", backgroundSize: "40%" }}>
                    <h1>Services & workflows</h1>
                    <p>
                        Utilised Backend-as-a-Service products such as Google's Firebase to build highly scalable
                        applications. Integrates the Git workflow into projects and is familiar with branch and database
                        protection rules.
                    </p>
                </div>
            </div>
        </PageWrapper>
    );
}

export default Tech;
