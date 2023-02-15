/**
 * My honourables display page.
 * @author Lucas Bubner, 2023
 */
import PageWrapper from "../PageWrapper";
import "./Boxes.css";

function Honour() {
    return (
        <PageWrapper>
            <div className="content-bg" />
            <div className="container">
                <div className="box">
                    <h1>Honourables</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam</p>
                </div>
            </div>
        </PageWrapper>
    );
}

export default Honour;
