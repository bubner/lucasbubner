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
                <Box src="/reactts.png" size={85}>
                    <h1>React &amp; TypeScript</h1>
                    <p>
                        Experienced with the <b>React</b> framework to build applications with integrations on a
                        <b> full-stack</b> level with <b>Next.js</b>. Proficient with TypeScript to build
                        <b> type-safe</b>, <b>well-documented</b> and <b>maintainable</b> code.
                    </p>
                </Box>
                <Box src="/javakotlin.png" size={100}>
                    <h1>Java &amp; Kotlin</h1>
                    <p>
                        Experienced with <b>object-oriented design</b> and Java/Kotlin programming, in contexts of
                        <b> robotics</b> and <b>game modding</b>, using these languages as <b>teaching tools</b> for the
                        Bunyips Student Robotics Club.
                    </p>
                </Box>
                <Box src="/csu.png" size={105}>
                    <h1>C#</h1>
                    <p>
                        Currently learning C# to develop applications with the <b>Unity</b> platform, expanding upon
                        previous knowledge in <b>object-oriented design principles</b>, while expanding into skills
                        within game development.
                    </p>
                </Box>
                <Box src="/python.svg" size={50}>
                    <h1>Python</h1>
                    <p>
                        Experienced with the <b>Flask</b> and <b>Jinja</b> frameworks, as well as the usage of Python to
                        develop applications with computationally-intensive complexities and abstractions including
                        <b> artificial intelligence</b> systems.
                    </p>
                </Box>
                <Box src="/onshape.png" size={40}>
                    <h1>Computer Aided Design</h1>
                    <p>
                        Experienced with the usage of <b>industry-standard</b> CAD software such as <b>Onshape</b> to
                        design, develop, and prototype <b>3D-printed models</b> for use in robotics and other design
                        development applications.
                    </p>
                </Box>
                <Box src="/git.svg" size={120}>
                    <h1>Services &amp; workflows</h1>
                    <p>
                        Fluent with BaaS products such as <b>Firebase</b> and <b>Vercel</b> to build highly
                        <b> scalable</b> applications with <b>OAuth</b> and <b>relational databases</b>. Integrates the
                        <b> Git</b> workflow into projects and is proficient with branch, database, and end-user
                        protection rules to build <b>rigorous</b> applications.
                    </p>
                </Box>
            </div>
        </Layout>
    );
}

export default Technology;
