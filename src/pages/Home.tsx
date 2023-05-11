/**
 * Homepage component after initial landing
 * @author Lucas Bubner, 2023
 */
import { useEffect, useState } from "react";
import PageWrapper from "../PageWrapper";
import "./Boxes.css";

function Home() {
    // Ensure that the background image is loaded before displaying anything
    // We only have to do this on the main page as it will be the landing page and subsequent pages will be loaded after the main page
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = "/bgblur.png";
        img.onload = () => setLoaded(true);
    }, []);

    return (
        <PageWrapper>
            <div className={loaded ? "fade-in content-bg" : "fade-out content-bg"} />
            <div className="container no-mid">
                <div className="box" style={{ backgroundImage: "url('/hololine.png')", backgroundSize: "100%" }}>
                    <h1>Hi!</h1>
                    <p>
                        I'm Lucas Bubner, a 16-year-old software developer. <br /> I am currently in high school as a
                        Year 10 student and am looking to pursue a career in software development and the STEM pathways.
                        This website is a showcase of my work and achievements.
                    </p>
                </div>
                <div className="box" style={{ backgroundImage: "url('/holov2te2.png')", backgroundSize: "55%" }}>
                    <h1>What I do</h1>
                    <p>
                        I specialise in digital technologies and innovation, looking to develop high-quality
                        applications that target real-world problems. I am highly self-motivated in what I do, always
                        looking to learn new things.
                    </p>
                </div>
            </div>
        </PageWrapper>
    );
}

export default Home;
