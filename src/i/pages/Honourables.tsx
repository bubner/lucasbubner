/**
 * My honourables display page.
 * @author Lucas Bubner, 2023
 */
import Layout from "../Layout";
import Box from "../../components/Box";
import "../../css/Boxes.css";

function Honourables() {
    return (
        <Layout>
            <div className="content-bg" />
            <div className="container">
                <Box src="/iawards.png" size={110}>
                    <h1>SA/NT iAwards Winner</h1>
                    <p>
                        <b>Australian Information Industry Association</b> <br /> Winner of the 2023 SA/NT Student & Education category at the iAwards, developing
                        the Bunyip Bellower project.
                        <br />
                        <a
                            className="internallink"
                            href="https://aiia.com.au/iaward/2023-sa-nt-winners-and-merit-recipients/"
                            target="_blank"
                        >
                            aiia.com.au/iaward/2023-sa-nt-winners-and-merit-recipients
                        </a>
                    </p>
                </Box>
                <Box src="/iawards.png" size={110}>
                    <h1>National iAwards Merit</h1>
                    <p>
                        <b>Australian Information Industry Association</b> <br /> Merit recipient of the 2023 National Student & Education category at the iAwards, undergoing
                        Stage II judging against other prestigious projects at a tertiary level.
                        {/* <br />
                        <a
                            className="internallink"
                            href=""
                            target="_blank"
                        >
                            anicelink.com
                        </a> */}
                    </p>
                </Box>
                <Box src="/harvard.png" size={40} extrablur>
                    <h1>CS50 Certificate</h1>
                    <p>
                        <b>CS50's Introduction to Computer Science Certificate</b> <br /> Attained in December 2022
                        <br />
                        <a
                            className="internallink"
                            href="https://cs50.harvard.edu/certificates/62d6f9dd-7d87-49a0-a437-f6cd334cdc45"
                            target="_blank"
                        >
                            cs50.harvard.edu/certificates/62d6f9dd-7d87-49a0-a437-f6cd334cdc45
                        </a>
                    </p>
                </Box>
                <Box src="/mbhs.png" size={70}>
                    <h1>
                        Year 8/9 Dux of 2021/2022
                    </h1>
                    <p>
                        <b>Murray Bridge High School</b> <br /> Multi-year Dux student at MBHS; highest achieving
                        academic student for grade point average across multiple years.
                    </p>
                </Box>
                <Box src="/bunyipst.png" size={45}>
                    <h1>Murray Bridge Bunyips Captain</h1>
                    <p>
                        <b>May 2022 - Present</b> <br /> Mentored and led teams of many students in the FIRST Tech
                        Challenge robotics competition, while developing software solutions targeting a wide range of
                        problems.
                    </p>
                </Box>
            </div>
        </Layout>
    );
}

export default Honourables;
