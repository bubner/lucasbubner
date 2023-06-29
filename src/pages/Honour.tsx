/**
 * My honourables display page.
 * @author Lucas Bubner, 2023
 */
import PageWrapper from "../PageWrapper";
import "./Boxes.css";

function Honour() {
    return (
        <PageWrapper>
            <div className="content-bg" />
            <div className="container no-mid">
                <div className="box" style={{ backgroundImage: "url('/iawards.png')", backgroundSize: "75%" }}>
                    <h1>SA/NT iAwards Winner</h1>
                    <p>
                        <b>Australian Information Industry Association</b> <br /> Winner of the 2023 SA/NT Student & Education iAward, for the development
                        of the Bunyip Bellower project.
                        <br />
                        <a
                            style={{ color: "white" }}
                            href="https://aiia.com.au/iaward/2023-sa-nt-winners-and-merit-recipients/"
                            target="_blank"
                        >
                            aiia.com.au/iaward/2023-sa-nt-winners-and-merit-recipients
                        </a>
                    </p>
                </div>
                <div className="box" style={{ backgroundImage: "url('/harvard.png')", backgroundSize: "50%" }}>
                    <h1>CS50 Certificate</h1>
                    <p>
                        <b>CS50's Introduction to Computer Science Certificate</b> <br /> Attained in December 2022
                        <br />
                        <a
                            style={{ color: "white" }}
                            href="https://cs50.harvard.edu/certificates/62d6f9dd-7d87-49a0-a437-f6cd334cdc45"
                            target="_blank"
                        >
                            cs50.harvard.edu/certificates/62d6f9dd-7d87-49a0-a437-f6cd334cdc45
                        </a>
                    </p>
                </div>
                <div className="box" style={{ backgroundImage: "url('/mbhs.png')", backgroundSize: "75%" }}>
                    <h1>
                        Year 8 Dux of 2021 <br /> Year 9 Dux of 2022
                    </h1>
                    <p>
                        <b>Murray Bridge High School</b> <br /> Attained in December of 2021 and 2022, highest achieving
                        academic student for grade point averages.
                    </p>
                </div>
                <div className="box" style={{ backgroundImage: "url('/mbhs.png')", backgroundSize: "75%" }}>
                    <h1>Academic Achievement</h1>
                    <p>
                        <b>Murray Bridge High School</b> <br /> Conferred multiple awards for high grade academic
                        achivement, scoring end of year grade point averages of A+ (14.9 / 15.0) in 2021 and 2022
                    </p>
                </div>
                <div className="box" style={{ backgroundImage: "url('/bunyipst.png')", backgroundSize: "50%" }}>
                    <h1>Murray Bridge Bunyips Captain</h1>
                    <p>
                        <b>May 2022 - Present</b> <br /> Mentored and lead teams of many students in the FIRST Tech
                        Challenge robotics competition, while developing software solutions targetting a wide range of
                        problems.
                    </p>
                </div>
            </div>
        </PageWrapper>
    );
}

export default Honour;
