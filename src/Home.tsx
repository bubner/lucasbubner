/**
 * Homepage component after initial landing
 * @author Lucas Bubner, 2023
 */
import { motion } from "framer-motion";
import { Goto } from "./AnimatedRoute";
import Navbar from "./Navbar";
import "./Boxes.css";

function Home({ goto }: Goto) {
    // Gets a quote from my text, "Computational Brilliance."
    const quotes = [
        "Reality's stones cannot be taken under clear circumstances, in which controlling the natural gateway is the beholder's responsibility to make a powerful abstraction of their own understanding.",
        "Alas, the one comprehension of our reality must command the reign of a new era under high authority, for which it must be solely up to one to control.",
        "The concept of existence is still merely a perception of reality, an abstraction of reality's true meanings and life. Language is an abstraction to deep neurological links and is in itself an abstraction to the greater hidden light.",
        "An interstellar revolution constructed by the adolescent soul meres not to cross the boundary of the unmarked territory, for it has not found the method to travel without seeing the light in the tunnel.",
        "In this, the next intercepting and forever subsequent actions are guided under a plethora of oaths and dignities, to where the new era sustains eminently superior to the theorem of perception.",
        "Change, the differences in what we know; the hollow abstractions of life described now and forever as the constant to drive the universal understanding of the next world.",
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}>
            <Navbar goto={goto} />
            <div className="content-bg" />
            <div className="container">
                <div className="box">
                    <h2>Hi!</h2>
                    <p>
                        My name is Lucas Bubner. I am an aspiring software developer and current secondary student. I
                        started programming and development in 2022, before being promoted to the captain of FTC
                        Robotics Team 15215 in May 2022. Ever since, I have been passionate about a wide range of
                        computer science topics and continued to expand my knowledge through courses, projects, and
                        content.
                    </p>
                </div>
                <div className="box">
                    <h2>A word about me</h2>
                    <p>
                        I specialise in technologies and innovation, looking to develop high-quality applications that
                        target real-world problems. I am vastly improving my toolkit per day, learning the new
                        leading-edge technologies and tech stacks, in spite of better development. I am highly
                        self-motivated and self-directed in what I do, and I'm more than passionate about what I enjoy.
                    </p>
                </div>
                <div className="box">
                    <h2>
                        <i>"Computational Brilliance."</i>
                    </h2>
                    <p>
                        <i>{quotes[Math.floor(Math.random() * quotes.length)]}</i>
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default Home;
