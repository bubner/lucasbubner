/**
 * My honourables display page.
 * @author Lucas Bubner, 2023
 */
import Layout from "../Layout";
import Box from "../../components/Box";
import "../../css/Boxes.css";

function Honourables() {
    document.title = "Lucas Bubner • Honourables";
    return (
        <Layout>
            <div className="content-bg" />
            <div className="container">
                <Box src="/iawards.png" size={50}>
                    <h1>SA/NT iAwards Winner</h1>
                    <p>
                        <b>Australian Information Industry Association</b> <br /> Winner of the 2023 SA/NT Student &
                        Education category at the iAwards, developing the Bunyip Bellower project.
                        <br />
                        <a
                            className="internallink"
                            href="https://www.murraybridge.news/p/murray-bridge-high-school-students"
                            target="_blank"
                        >
                            https://www.murraybridge.news/p/murray-bridge-high-school-students
                        </a>
                    </p>
                </Box>
                <Box src="/iawards.png" size={50}>
                    <h1>National iAwards Merit</h1>
                    <p>
                        <b>Australian Information Industry Association</b> <br /> Merit recipient of the 2023 National
                        Student &amp; Education category at the iAwards, undergoing Stage II judging against other
                        prestigious projects at a <b>tertiary level</b>.
                        <br />
                        <a
                            className="internallink"
                            href="https://www.linkedin.com/feed/update/urn:li:activity:7106212481345212417/"
                            target="_blank"
                        >
                            https://www.linkedin.com/feed/update/urn:li:activity:7106212481345212417/
                        </a>
                    </p>
                </Box>
                <Box src="/harvard.png" size={40} extrablur>
                    <h1>CS50 Certificate</h1>
                    <p>
                        <b>CS50's Introduction to Computer Science Certificate</b> <br /> Attained in
                        <b> December 2022</b> for successful completion of <b>CS50x</b> offered by Harvard University.
                        <br />
                        <a
                            className="internallink"
                            href="https://cs50.harvard.edu/certificates/62d6f9dd-7d87-49a0-a437-f6cd334cdc45"
                            target="_blank"
                        >
                            https://cs50.harvard.edu/certificates/62d6f9dd-7d87-49a0-a437-f6cd334cdc45
                        </a>
                    </p>
                </Box>
                <Box src="/mbhs.png" size={70}>
                    <h1>Year 8/9 Dux of 2021/2022</h1>
                    <p>
                        <b>Murray Bridge High School</b> <br /> <b>Multi-year</b> Dux student at MBHS; highest achieving
                        academic student for grade point average across multiple years. Striving student in
                        <b> Specialist and Methods Mathematics</b>, <b>Physics</b>, and <b>Digital Technology</b>.
                    </p>
                </Box>
                <Box src="/bunyipst.png" size={45}>
                    <h1>Murray Bridge Bunyips Captain</h1>
                    <p>
                        <b>May 2022 - Present</b> <br /> Club captain of multiple registered FIRST Tech Challenge teams.
                        Presented and spoke to councils and entities for needs and requests, representing the club as a
                        whole.
                        <br />
                        <a
                            className="internallink"
                            href="https://www.murraybridge.news/p/robotics-students-are-on-a-roll-at"
                            target="_blank"
                        >
                            https://www.murraybridge.news/p/robotics-students-are-on-a-roll-at
                        </a>
                    </p>
                </Box>
            </div>
        </Layout>
    );
}

export default Honourables;
