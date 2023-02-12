/**
 * Top-level rendering module.
 * @author Lucas Bubner, 2023
 */

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Info from "./Info";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<App />} />
                    <Route path="/i" element={<Info />} />
                    <Route path="*" element={<App />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
