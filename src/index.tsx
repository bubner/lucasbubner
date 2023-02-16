/**
 * Top-level rendering module.
 * @author Lucas Bubner, 2023
 */

import React from "react";
import ReactDOM from "react-dom/client";
import AnimatedRoute from "./AnimatedRoute";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <AnimatedRoute />
        </BrowserRouter>
    </React.StrictMode>
);
