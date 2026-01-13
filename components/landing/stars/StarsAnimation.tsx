"use client";

import { useEffect, useRef } from "react";
import Stars, { Config } from "./components/stars";

/**
 * Stars Animation
 *
 * Inspired by Steve Courtney's poster art for Celsius GS's Drifter - http://celsiusgs.com/drifter/posters.php
 * by Cory Hughart - http://coryhughart.com
 *
 * Ported to a React component - Lucas Bubner, 2024
 */
export default function StarsAnimation() {
    const canvas = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const config: Config = {
            particleCount: 20,
            flareCount: 0,
            motion: 0.03,
            color: "#ed1c24",
            particleSizeBase: 1.5,
            particleSizeMultiplier: 0.8,
            flareSizeBase: 0,
            flareSizeMultiplier: 0,
            lineWidth: 3,
            linkChance: 10,
            linkLengthMin: 2,
            linkLengthMax: 3,
            linkOpacity: 0.2,
            linkFade: 25,
            linkSpeed: 0.5,
            glareAngle: -60,
            glareOpacityMultiplier: 0.01,
            renderParticles: true,
            renderParticleGlare: false,
            renderFlares: false,
            renderLinks: true,
            renderMesh: false,
            flicker: false,
            flickerSmoothing: 0,
            blurSize: 0.5,
            randomMotion: true,
            noiseLength: 500,
            noiseStrength: 1,
        };

        // Reduce settings if on mobile
        if (/Mobi/.test(navigator.userAgent)) {
            config.particleCount = 10;
        }

        if (!canvas.current) return;

        // The animation calls are handled through the Stars class, which will internally use the context
        // provided by the canvas element to draw the stars. We simply have to initialise and destroy it here.
        const stars = new Stars(canvas.current, config);
        stars.init();

        return () => stars.destroy();
    }, []);

    return <canvas ref={canvas} className="absolute w-screen h-dvh -z-10" />;
}
