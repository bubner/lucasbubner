/**
 * Technologies I work with display page.
 * @author Lucas Bubner, 2023
 */
import "../../css/Boxes.css";
import Layout from "../Layout";
import Box from "../../components/Box";

function Technology() {
    document.title = "Lucas Bubner • Technology";
    return (
        <Layout>
            <div className="content-bg" />
            <div className="container">
                <Box src="/scrmod.svg" size={40}>
                    <h1>Technology</h1>
                    <p>
                        I am <b>experienced</b> in usage of industry-used programming tools and services, as well as a range of
                        programming languages in order to implement and design solutions to <b>real-world problems</b>.
                    </p>
                </Box>
                <Box src="/reactts.png" size={85}>
                    <h1>TypeScript & React</h1>
                    <p>
                        Experienced with the <b>React</b> framework to build single-page applications with integrations on
                        a <b>full-stack</b> level. Proficient with TypeScript to build <b>type-safe</b>, <b>well-documented</b> and <b>maintainable</b> code.
                    </p>
                </Box>
                <Box src="/kotlin.svg" size={40}>
                    <h1>Kotlin</h1>
                    <p>
                        Experienced with <b>object-oriented design</b> and Java/Kotlin programming, using these languages as <b>teaching
                        tools</b> for other members of the Bunyips Robotics Team.
                    </p>
                </Box>
                <Box src="/python.svg" size={50}>
                    <h1>Python</h1>
                    <p>
                        Experienced with the <b>Flask</b> and <b>Jinja</b> frameworks, as well as the usage of Python to develop
                        applications with computationally-intensive complexities and abstractions including <b>artificial intelligence</b> systems.
                    </p>
                </Box>
                <Box src="/onshape.png" size={40}>
                    <h1>Computer Aided Design</h1>
                    <p>
                        Experienced with the usage of <b>industry-standard</b> CAD software such as <b>Onshape</b> to design, develop, and prototype
                        <b> 3D-printed models</b> for use in robotics and other design development applications.
                    </p>
                </Box>
                <Box src="/git.svg" size={120}>
                    <h1>Services & workflows</h1>
                    <p>
                        Fluent with BaaS products such as <b>Firebase</b> and <b>Vercel</b> to build highly <b>scalable </b>
                        applications with <b>OAuth</b> and <b>relational databases</b>. Integrates the <b>Git</b> workflow into projects and
                        is proficient with branch, database, and end-user protection rules to build <b>rigorous </b>
                        applications.
                    </p>
                </Box>
            </div>
        </Layout>
    );
}

export default Technology;
