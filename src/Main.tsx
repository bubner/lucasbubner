/**
 * Content module with primary information showcase.
 * @author Lucas Bubner, 2023
 */
import { createRef, useEffect, useState } from "react";
import "./Main.css";

function Main() {
    const winRef = createRef<HTMLDivElement>();
    useEffect(() => {
        winRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    return (
        <>
            <div className="text-container">
                <p className="text-line">I build applications,</p>
                <p className="text-line">for the future.</p>
            </div>
            <div ref={winRef} />
        </>
    );
}

export default Main;
