/**
 * Standard navigation module with page linking functionality for both mobile and desktop.
 * @author Lucas Bubner, 2023
 */
import { useRef, FC, useContext, Ref } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Popup from "reactjs-popup";
import { PopupActions } from "reactjs-popup/dist/types";
import { GotoContext } from "./GotoContext";
import "../css/Navbar.css";

function Navbar() {
    const tref = useRef<PopupActions>();
    const tclose = () => tref.current?.close();
    const location = useLocation();
    const goto = useContext(GotoContext);

    interface PathMap {
        alt: string;
        path: string;
    }

    interface Image extends PathMap {
        src: string;
    }

    interface NavbarImageProps {
        src: string;
        alt: string;
        path: string;
        location: {
            pathname: string;
        };
    }

    interface NavbarButtonProps {
        alt: string;
        path: string;
    }

    const images: Image[] = [
        { src: "/pfp.svg", alt: "Home", path: "/pages/home" },
        { src: "/star.svg", alt: "Accomplishments", path: "/pages/accomplishments" },
        { src: "/scr.svg", alt: "Technology", path: "/pages/technology" },
        { src: "/annoc.svg", alt: "Honourables", path: "/pages/honourables" },
        { src: "/at.svg", alt: "Projects", path: "/pages/projects" },
        { src: "/link.svg", alt: "Links", path: "/pages/links" },
    ];

    const buttons: PathMap[] = [
        { alt: "Home", path: "/pages/home" },
        { alt: "Accomplishments", path: "/pages/accomplishments" },
        { alt: "Technology", path: "/pages/technology" },
        { alt: "Honourables", path: "/pages/honourables" },
        { alt: "Projects", path: "/pages/projects" },
        { alt: "Links", path: "/pages/links" },
    ];

    const NavbarImage: FC<NavbarImageProps> = ({ src, alt, path, location }) => (
        <div className="navbar">
            <img
                onClick={() => goto(path)}
                className={location.pathname === path ? "navbar-img active" : "navbar-img"}
                src={src}
                alt={alt}
            />
            {location.pathname === path ? <div id="locator" /> : null}
        </div>
    );

    const NavbarButton: FC<NavbarButtonProps> = ({ alt, path }) => (
        <button
            onClick={() => {
                tclose();
                goto(path);
            }}
        >
            {alt}
        </button>
    );

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div id="navbar">
                <div id="imagebuttons">
                    {images.map((image) => (
                        <NavbarImage
                            key={image.src}
                            src={image.src}
                            alt={image.alt}
                            path={image.path}
                            location={location}
                        />
                    ))}
                </div>
                <div id="mobileheader">
                    {/* Reused code from my Bunyip Bellower project. I couldn't be bothered implementing a new popup menu so this will do. */}
                    <Popup ref={tref as Ref<PopupActions>} trigger={<img src="/bbq.png" alt="Menu button" />}>
                        <>
                            <div className="outer" onClick={tclose} />
                            <div className="inner">
                                <div className="buttonarea">
                                    <p
                                        onClick={(e) => e.preventDefault()}
                                        style={{ textAlign: "center", fontStyle: "italic" }}
                                    >
                                        lucasbubner.me
                                    </p>
                                </div>
                                {buttons.map((button, index) => (
                                    <div
                                        className="buttonarea"
                                        style={{ fontWeight: location.pathname === button.path ? "800" : "revert" }}
                                        key={index}
                                    >
                                        <NavbarButton key={button.alt} alt={button.alt} path={button.path} />
                                        {index !== buttons.length - 1 ? <hr /> : null}
                                    </div>
                                ))}
                            </div>
                        </>
                    </Popup>
                </div>
            </div>
        </motion.div>
    );
}

export default Navbar;
