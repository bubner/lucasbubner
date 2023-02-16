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
                <div className="box">
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
                <div className="box">
                    <h1>Year 8 and 9 Dux of 2021 and 2022</h1>
                    <p>
                        <b>Murray Bridge High School</b> <br /> Attained in December 2021 and 2022, highest achieving
                        academic student.
                    </p>
                </div>
                <div className="box">
                    <h1>Academic Achievement</h1>
                    <p>
                        <b>Murray Bridge High School</b> <br /> Conferred multiple awards for high grade academic
                        achivement, scoring end of year grade point averages of A+ (14.9 / 15.0) in 2022 and 2023
                    </p>
                </div>
            </div>
        </PageWrapper>
    );
}

export default Honour;
