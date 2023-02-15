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
            <div className="container">
                <div
                    className="box clk"
                    style={{ backgroundImage: "url('/github.svg')", backgroundSize: "40%" }}
                    onClick={() => window.open("https://github.com/holo-lb/")}
                >
                    <h1>GitHub</h1>
                    <p>Development of all my major projects and software.</p>
                </div>
                <div
                    className="box clk"
                    style={{ backgroundImage: "url('/replit.png')", backgroundSize: "50%" }}
                    onClick={() => window.open("https://replit.com/@LUCASBUBNER/")}
                >
                    <h1>Replit</h1>
                    <p>Development of smaller projects and proof-of-concept activities.</p>
                </div>
                <div
                    className="box clk"
                    style={{ backgroundImage: "url('/linkedin.png')", backgroundSize: "33%" }}
                    onClick={() => window.open("https://linkedin.com/in/lucas-bubner/")}
                >
                    <h1>LinkedIn</h1>
                    <p>Portfolio with my awarded certifications and certificates.</p>
                </div>
                <div
                    className="box bsm clk"
                    style={{ backgroundImage: "url('/proton.png')", backgroundSize: "25%" }}
                    onClick={() => {
                        alert("lkbubner@proton.me");
                        window.open("mailto:lkbubner@proton.me");
                    }}
                >
                    <h1>Personal Email</h1>
                </div>
                <div
                    className="box bsm clk"
                    style={{ backgroundImage: "url('/insta.svg')", backgroundSize: "15%" }}
                    onClick={() => window.open("https://www.instagram.com/lucas.kbubner/")}
                >
                    <h1>Instagram</h1>
                </div>
                <div
                    className="box bsm clk"
                    style={{ backgroundImage: "url('/discord.svg')", backgroundSize: "15%" }}
                    onClick={() => {
                        alert("holo#0911");
                        window.open("https://discord.com/users/616524858746077184/");
                    }}
                >
                    <h1>Discord</h1>
                </div>
            </div>
        </PageWrapper>
    );
}

export default Links;
