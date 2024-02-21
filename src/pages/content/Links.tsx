/**
 * My social links display page.
 * @author Lucas Bubner, 2023
 */
import Layout from "../Layout";
import Box from "../../components/Box";
import "../../css/Boxes.css";

function Links() {
    document.title = "Lucas Bubner • Links";
    return (
        <Layout>
            <div className="content-bg" />
            <div className="container no-mid">
                <Box src="/github.svg" size={150} href="https://github.com/hololb/">
                    <h1>GitHub</h1>
                    <span className="clicknoti">(click)</span>
                    <p className="small">All my software projects and code repositories.</p>
                </Box>
                <Box src="/linkedin.png" size={30} href="https://linkedin.com/in/lucas-bubner/">
                    <h1>LinkedIn</h1>
                    <span className="clicknoti">(click)</span>
                    <p className="small">My industry certifications and experiences.</p>
                </Box>
                <Box src="/wakatime.svg" size={40} href="https://wakatime.com/@hololb">
                    <h1>WakaTime</h1>
                    <span className="clicknoti">(click)</span>
                    <p className="small">My programming usage tracking since July 2023.</p>
                </Box>
                <Box
                    src="/proton.png"
                    size={20}
                    href="mailto:lkbubner@proton.me"
                    small
                    onClick={() => {
                        alert("lkbubner@proton.me");
                    }}
                >
                    <h1>Contact Email</h1>
                    <span className="clicknoti">(click)</span>
                </Box>
                <Box src="/insta.svg" size={12} href="https://www.instagram.com/lucas.kbubner/" small>
                    <h1>Instagram</h1>
                    <span className="clicknoti">(click)</span>
                </Box>
                <Box
                    src="/discord.svg"
                    size={20}
                    href="https://discord.com/users/616524858746077184/"
                    small
                    onClick={() => {
                        alert("username: holo911");
                    }}
                >
                    <h1>Discord</h1>
                    <span className="clicknoti">(click)</span>
                </Box>
            </div>
        </Layout>
    );
}

export default Links;
