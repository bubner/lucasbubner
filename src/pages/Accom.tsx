/**
 * Accomplishments display page.
 * @author Lucas Bubner, 2023
 */
import PageWrapper from "../PageWrapper";
import "./Boxes.css";

function Accom() {
    return (
        <PageWrapper>
            <div className="content-bg" />
            <div className="container">
                <div className="box">
                    <h1>My accomplishments</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam</p>
                </div>
                <div className="box">
                    <h1>What I'm proud for</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam</p>
                </div>
                <div className="box">
                    <h1>Murray Bridge Bunyips</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam</p>
                </div>
                <div className="box">
                    <h1>Academics</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam</p>
                </div>
                <div className="box">
                    <h1>Programming</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam</p>
                </div>
                <div className="box">
                    <h1>Capabilities</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam</p>
                </div>
            </div>
        </PageWrapper>
    );
}

export default Accom;
