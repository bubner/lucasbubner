/**
 * My social links display page.
 * @author Lucas Bubner, 2023
 */
import PageWrapper from "../PageWrapper";
import "./Boxes.css";

function Links() {
    return (
        <PageWrapper>
            <div className="content-bg" />
            <div className="container no-mid">
                <a
                    className="box clk"
                    style={{ backgroundImage: "url('/github.svg')", backgroundSize: "40%" }}
                    href="https://github.com/hololb/"
                    target="_blank"
                >
                    <h1>GitHub</h1>
                    <span className="clicknoti">(click)</span>
                    <p className="small">Major projects and software.</p>
                </a>
                <a
                    className="box clk"
                    style={{ backgroundImage: "url('/replit.png')", backgroundSize: "50%" }}
                    href="https://replit.com/@LUCASBUBNER/"
                    target="_blank"
                >
                    <h1>Replit</h1>
                    <span className="clicknoti">(click)</span>
                    <p className="small">Smaller projects and proof-of-concept activities.</p>
                </a>
                <a
                    className="box clk"
                    style={{ backgroundImage: "url('/linkedin.png')", backgroundSize: "33%" }}
                    href="https://linkedin.com/in/lucas-bubner/"
                    target="_blank"
                >
                    <h1>LinkedIn</h1>
                    <span className="clicknoti">(click)</span>
                    <p className="small">Industry certifications and experiences.</p>
                </a>
                <a
                    className="box bsm clk"
                    style={{ backgroundImage: "url('/proton.png')", backgroundSize: "20%" }}
                    onClick={() => {
                        alert("lkbubner@proton.me");
                    }}
                    href="mailto:lkbubner@proton.me"
                    target="_blank"
                >
                    <h1>Contact Email</h1>
                    <span className="clicknoti">(click)</span>
                </a>
                <a
                    className="box bsm clk"
                    style={{ backgroundImage: "url('/insta.svg')", backgroundSize: "13%" }}
                    href="https://www.instagram.com/lucas.kbubner/"
                    target="_blank"
                >
                    <h1>Instagram</h1>
                    <span className="clicknoti">(click)</span>
                </a>
                <a
                    className="box bsm clk"
                    style={{ backgroundImage: "url('/discord.svg')", backgroundSize: "15%" }}
                    onClick={() => {
                        alert("username: holo911");
                    }}
                    href="https://discord.com/users/616524858746077184/"
                    target="_blank"
                >
                    <h1>Discord</h1>
                    <span className="clicknoti">(click)</span>
                </a>
            </div>
        </PageWrapper>
    );
}

export default Links;
