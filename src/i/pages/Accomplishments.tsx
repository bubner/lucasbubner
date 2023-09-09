/**
 * Accomplishments display page.
 * @author Lucas Bubner, 2023
 */
import Layout from "../Layout";
import "../../css/Boxes.css";

function Accomplishments() {
    return (
        <Layout>
            <div className="content-bg" />
            <div className="container">
                <div className="box">
                    <h1>My accomplishments</h1>
                    <p>
                        Accredited <b>self-motivation</b> to learn complex topics by intuition; shown levels of <b>leadership</b> and <b>management</b> through captaincy of the
                        MBHS Student Robotics Club; developed multiple <b>real-use</b> applications to solve <b>real-world problems</b>; winner at iAwards SA/NT 2023.
                    </p>
                </div>
                <div className="box">
                    <h1>What I'm proud of</h1>
                    <p>
                        <b>Development</b> and continuous integration of <b>industry-standard</b> applications using <b>leading-edge </b>
                        technologies, which include my Bunyip Bellower project which underwent discussion and
                        presentation with <b>school and government entities</b>. This project was <b>recognised by the AIIA</b> at the 2023 iAwards.
                    </p>
                </div>
                <div className="box">
                    <h1>Murray Bridge Bunyips</h1>
                    <p>
                        Developed <b>team management</b>, <b>leadership</b>, and <b>software development</b> skills through being a member of the
                        Bunyips FTC Robotics Team 15215. <b>Outreached</b> to multiple students as a <b>mentor of
                        programming</b>, developed advanced control loops for robotic locomotion and <b>autonomous operation.</b>
                    </p>
                </div>
                <div className="box">
                    <h1>Academics</h1>
                    <p>
                        <b>High-achieving</b> student and <b>multi-year</b> Dux at Murray Bridge High School, awarded for high understanding
                        of <b>innovation</b>, evaluation, and intellectual <b>capability</b>. Proven to have <b>negotiated</b> with school and non-school based
                        administration on a wide matter of <b>enterprise implementations</b>.
                    </p>
                </div>
                <div className="box">
                    <h1>Programming</h1>
                    <p>
                        <b>Comprehensive</b> and <b>in-depth</b> understanding of programming structures involving object-oriented
                        design, functional patterns, and module based constructs. Proficiency in <b>multiple</b> programming
                        languages appropriate for a <b>wide range</b> of projects.
                    </p>
                </div>
                <div className="box">
                    <h1>Capabilities</h1>
                    <p>
                        Able to work in a <b>high-stress</b> environment, while producing intellectual property to which
                        quality is not lost, proven to have capabilities to <b>lead and construct</b> large projects with
                        <b> complex</b> implementations. Able to <b>self-reflect</b> and <b>discover</b> vulnerabilities in workflow
                        environments and <b>communicate</b> these ideas to others.
                    </p>
                </div>
            </div>
        </Layout>
    );
}

export default Accomplishments;
