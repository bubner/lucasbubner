/**
 * Homepage component after initial landing
 * @author Lucas Bubner, 2023
 */
import { useEffect, useState } from "react";
import Layout from "./Layout";
import Box from "../components/Box";
import "../css/Boxes.css";

function Home() {
    document.title = "Lucas Bubner • Home";

    // Ensure that the background image is loaded before displaying anything
    // We only have to do this on the main page as it will be the landing page and subsequently will be loaded after the main page
    const [loaded, setLoaded] = useState(false);
    const age = Math.abs(new Date(Date.now() - new Date("2007-05-03").getTime()).getUTCFullYear() - 1970);

    useEffect(() => {
        const img = new Image();
        img.src = "/bgblur.png";
        img.onload = () => setLoaded(true);
    }, []);

    return (
        <Layout>
            <div className={loaded ? "fade-in content-bg" : "fade-out content-bg"} />
            <div className="container no-mid">
                <Box src="/hololine.png" size={100}>
                    <h1>Hi!</h1>
                    <p>
                        I'm <b>Lucas Bubner</b>, a <b>{age}-year-old</b> software developer. <br /> I am currently in high school as a
                        <b> Year 10 student</b> and am looking to pursue a career in <b>software development</b> and the STEM pathways.
                        This website is a showcase of my work and achievements.
                    </p>
                </Box>
                <Box src="/holov2te2.png" size={80}>
                    <h1>What I do</h1>
                    <p>
                        I specialise in <b>digital technologies and innovation</b>, striving to develop high-quality
                        applications that target real-world problems. I am highly <b>self-motivated</b> in what I do, always
                        looking to learn and teach new things.
                    </p>
                </Box>
            </div>
        </Layout>
    );
}

export default Home;
