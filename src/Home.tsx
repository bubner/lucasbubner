/**
 * Homepage component after initial landing
 * @author Lucas Bubner, 2023
 */
import Navbar from "./Navbar";
import "./Home.css";

function Home() {
    return (
        <>
            <Navbar />
            <div className="content-bg" />
        </>
    );
}

export default Home;
