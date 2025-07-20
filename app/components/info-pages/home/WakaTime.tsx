"use client";

import { useState } from "react";
import Image from "next/image";
import LoadingWheel from "../LoadingWheel";

export default function WakaTime() {
    const [imgLoaded, setImgLoaded] = useState(false);
    return (
        <a target="_blank" href="https://wakatime.com/@bubner">
            <div style={{ width: 600, height: 100, position: "relative" }}>
                {!imgLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center rounded-[2rem]">
                        <LoadingWheel containerHeight="100px" />
                    </div>
                )}
                <Image
                    alt="WakaTime activity"
                    width={600}
                    height={100}
                    placeholder="blur"
                    className="h-full w-full rounded-[2rem]"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    priority
                    src="https://wakatime.com/share/@bubner/5e5091a6-e447-4c50-88f8-0c7c9205ef93.png"
                    draggable={false}
                    onLoad={() => setImgLoaded(true)}
                    onError={() => setImgLoaded(true)}
                />
            </div>
        </a>
    );
}
