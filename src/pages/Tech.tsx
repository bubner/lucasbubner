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
                        I am <b>experienced</b> in usage of industry-used programming tools and services, as well as a range of
                        programming languages in order to implement and design solutions to <b>real-world problems</b>.
                    </p>
                </div>
                <div className="box" style={{ backgroundImage: "url('/reactts.png')", backgroundSize: "100%" }}>
                    <h1>TypeScript & React</h1>
                    <p>
                        Experienced with the <b>React</b> framework to build single-page applications with integrations on
                        a <b>full-stack</b> level. Proficient with TypeScript to build <b>type-safe</b>, <b>well-documented</b> and <b>maintainable</b> code.
                    </p>
                </div>
                <div className="box" style={{ backgroundImage: "url('/kotlin.svg')", backgroundSize: "40%" }}>
                    <h1>Kotlin</h1>
                    <p>
                        Experienced with <b>object-oriented design</b> and Java/Kotlin programming, using these languages as <b>teaching
                        tools</b> for other members of the Bunyips Robotics Team.
                    </p>
                </div>
                <div className="box" style={{ backgroundImage: "url('/python.svg')", backgroundSize: "50%" }}>
                    <h1>Python</h1>
                    <p>
                        Experienced with the <b>Flask</b> and <b>Jinja</b> frameworks, as well as the usage of Python to develop
                        applications with computationally-intensive complexities and abstractions including <b>artificial intelligence</b> systems.
                    </p>
                </div>
                <div className="box" style={{ backgroundImage: "url('/onshape.png')", backgroundSize: "45%" }}>
                    <h1>Computer Aided Design</h1>
                    <p>
                        Experienced with the usage of <b>industry-standard</b> CAD software such as <b>Onshape</b> to design, develop, and prototype
                        <b> 3D-printed models</b> for use in robotics and other design development applications.
                    </p>
                </div>
                <div className="box" style={{ backgroundImage: "url('/git.svg')", backgroundSize: "40%" }}>
                    <h1>Services & workflows</h1>
                    <p>
                        Fluent with BaaS products such as <b>Firebase</b> and <b>Vercel</b> to build highly <b>scalable </b>
                        applications with <b>OAuth</b> and <b>relational databases</b>. Integrates the <b>Git</b> workflow into projects and
                        is proficient with branch, database, and end-user protection rules to build <b>rigourous </b>
                        applications.
                    </p>
                </div>
            </div>
        </PageWrapper>
    );
}

export default Tech;
