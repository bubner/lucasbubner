/**
 * My worked on projects display page.
 * @author Lucas Bubner, 2023
 */
import Layout from "../Layout";
import Box from "../../components/Box";
import "../../css/Boxes.css";

function Projects() {
    document.title = "Lucas Bubner • Projects";
    return (
        <Layout>
            <div className="content-bg" />
            <div className="container">
                <Box src="/rre.png" size={45} href="https://github.com/bubner/RoboRegistry/">
                    <h1>RoboRegistry</h1>
                    <span className="clicknoti">(click)</span>
                    <p>
                        A <b>digital registrar</b> for FIRST scrimmage event coordinators to handle school and entity
                        registration and manage logistics with <b>event registration</b> and <b>QR code check-ins</b>.
                        Built with <b>Flask</b> and <b>Firebase</b>.
                    </p>
                </Box>
                <Box src="/bunyipsc.png" size={45} href="https://github.com/Murray-Bridge-Bunyips/BunyipBellower">
                    <h1>Bunyip Bellower</h1>
                    <span className="clicknoti">(click)</span>
                    <p>
                        A <b>real-time</b> Firebase chat application built for the members of the Murray Bridge Bunyips.
                        Built in <b>React</b> and <b>TypeScript</b>. Winner of the <b>2023 Australian SA/NT iAwards </b>
                        for the Student &amp; Education category.
                    </p>
                </Box>
                <Box src="/bunyipst.png" size={45} href="https://github.com/Murray-Bridge-Bunyips/BunyipsFTC/">
                    <h1>BunyipsFTC</h1>
                    <span className="clicknoti">(click)</span>
                    <p>
                        Java/Kotlin project containing contributed code used for the Bunyips team robots; contributed
                        <b> SDK abstraction</b> to make programming robot code faster and more
                        <b> educational for new programmers</b>.
                    </p>
                </Box>
                <Box src="/fchess.png" size={45} href="https://github.com/bubner/FusionChess/">
                    <h1>Fusion Chess</h1>
                    <span className="clicknoti">(click)</span>
                    <p>
                        A playable <b>custom chess variant</b> that changes the rules of the game to include
                        <b> piece fusion</b> instead of capturing. Built in <b>React</b> and <b>TypeScript</b>.
                    </p>
                </Box>
                <Box src="/ceo.png" size={45} href="https://github.com/bubner/Mind/">
                    <h1>Mind</h1>
                    <span className="clicknoti">(click)</span>
                    <p>
                        A <b>Flask</b> adventure game with over 65 endings, featuring <b>auto-saving</b> user progress,
                        <b> sessions</b>, and password protection.
                    </p>
                </Box>
                <Box src="/transparent.png" size={45} href="https://github.com/bubner/lucasbubner/">
                    <h1>lucasbubner v2</h1>
                    <span className="clicknoti">(click)</span>
                    <p>
                        This very website! Built in <b>React</b> and <b>TypeScript</b>, using features from
                        <b> react-router</b> and <b>framer-motion</b>.
                    </p>
                </Box>
            </div>
        </Layout>
    );
}

export default Projects;
