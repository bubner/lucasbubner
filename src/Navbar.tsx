/**
 * Standard information module with links and other metadata.
 * @author Lucas Bubner, 2023
 */
import { useRef, FC } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Popup from "reactjs-popup";
import { PopupActions } from "../node_modules/reactjs-popup/dist/types";
import { Goto } from "./AnimatedRoute";
import "./Navbar.css";

function Navbar({ goto }: Goto) {
    const tref = useRef<PopupActions>(null);
    const tclose = () => tref.current?.close();
    const location = useLocation();

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
        { src: "/pfp.svg", alt: "Home", path: "/i" },
        { src: "/star.svg", alt: "Accomplishments", path: "/i/accomplishments" },
        { src: "/scr.svg", alt: "Technology", path: "/i/technology" },
        { src: "/annoc.svg", alt: "Honourables", path: "/i/honourables" },
        { src: "/at.svg", alt: "Projects", path: "/i/projects" },
        { src: "/link.svg", alt: "Links", path: "/i/links" },
    ];

    const buttons: PathMap[] = [
        { alt: "Home", path: "/i" },
        { alt: "Accomplishments", path: "/i/accomplishments" },
        { alt: "Technology", path: "/i/technology" },
        { alt: "Honourables", path: "/i/honourables" },
        { alt: "Projects", path: "/i/projects" },
        { alt: "Links", path: "/i/links" },
    ];

    const NavbarImage: FC<NavbarImageProps> = ({ src, alt, path, location }) => (
        <img
            onClick={() => goto(path)}
            className={location.pathname === path ? "navbar-img active" : "navbar-img"}
            src={src}
            alt={alt}
        />
    );

    const NavbarButton: FC<NavbarButtonProps> = ({ alt, path }) => (
        <button
            onClick={() => {
                tclose();
                goto(path);
            }}>
            {alt}
        </button>
    );

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}>
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
                    {/* Reused code from my Bunyips Chatapp. I couldn't be bothered implementing a new popup menu so this will do. */}
                    <Popup ref={tref} trigger={<img src="/bbq.svg" alt="Menu" />}>
                        <>
                            <div className="outer" onClick={tclose} />
                            <div className="inner">
                                {buttons.map((button) => (
                                    <div className="buttonarea">
                                        <NavbarButton key={button.alt} alt={button.alt} path={button.path} />
                                        <hr />
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
