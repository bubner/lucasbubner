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
    
    useEffect(() => {
        const img = new Image();
        img.src = "/bgblur.png";
        img.onload = () => setLoaded(true);
    }, []);

    return (
        <Layout>
            <div className={loaded ? "fade-in content-bg" : "fade-out content-bg"} />
            <div className="container no-mid">
                <Box src={undefined} size={100}>
                    <h1>Hi!</h1>
                    <p>
                        I'm <b>Lucas Bubner</b>, a <b>16-year-old</b> software developer. <br /> I am currently in
                        high school as a<b> Year 11 student</b> passionate in the STEM/IT industries.
                        This website is a showcase of my work and achievements.
                    </p>
                </Box>
                <Box src={undefined} size={80}>
                    <h1>What I do</h1>
                    <p>
                        I specialise in <b>software and academics</b>, consistently striving to exceed expectations.
                        I am highly <b>self-motivated</b>, always looking to learn and teach new things in a range of IT industries.
                    </p>
                </Box>
            </div>
        </Layout>
    );
}

export default Home;
