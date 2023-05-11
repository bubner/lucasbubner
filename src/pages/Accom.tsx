/**
 * Accomplishments display page.
 * @author Lucas Bubner, 2023
 */
import PageWrapper from "../PageWrapper";
import "./Boxes.css";

function Accom() {
    return (
        <PageWrapper>
            <div className="content-bg" />
            <div className="container">
                <div className="box">
                    <h1>My accomplishments</h1>
                    <p>
                        Attained knowledge of multiple programming langugages through multiple CS50 online courses and
                        through self-motivation; shown levels of leadership and evaluation through captaincy of FTC
                        Robotics Team 15215; given multi-year Murray Bridge High School Dux awards.
                    </p>
                </div>
                <div className="box">
                    <h1>What I'm proud of</h1>
                    <p>
                        Development and continuous integration of industry-standard web applications using leading-edge
                        technologies, which include my Bunyips Chatapp project which underwent negotiation and
                        presentation with Murray Bridge High School administration.
                    </p>
                </div>
                <div className="box">
                    <h1>Murray Bridge Bunyips</h1>
                    <p>
                        Developed captaincy, leadership, and software development skills through being a member of the
                        Murray Bridge Bunyips FTC Team 15215. Outreached to multiple students as a teacher of
                        programming, developed advanced control loops for robotic locomotion and autonomous operation.
                    </p>
                </div>
                <div className="box">
                    <h1>Academics</h1>
                    <p>
                        High achieving student and multi-year Dux at Murray Bridge High School, averaging grade of A+
                        across all subjects, awarded for high understanding of reflection, innovation, and intellectual
                        capability. Proven to have negotiated with school administration on a wide matter of enterprise
                        implementations.
                    </p>
                </div>
                <div className="box">
                    <h1>Programming</h1>
                    <p>
                        Comphrehension and proficient understanding of programming structures involving object oriented
                        design, functional patterns, and module based constructs. Proficiency in multiple programming
                        languages appropriate for a wide range of projects.
                    </p>
                </div>
                <div className="box">
                    <h1>Capabilities</h1>
                    <p>
                        Able to work in a high-stress environment, while producing intellectual property to which
                        quality is not lost, proven to have capabilities to lead and construct large projects with
                        complex implementations. Able to self-reflect and discover vulnerabilities in workflow
                        environments and communicate these ideas to others.
                    </p>
                </div>
            </div>
        </PageWrapper>
    );
}

export default Accom;
