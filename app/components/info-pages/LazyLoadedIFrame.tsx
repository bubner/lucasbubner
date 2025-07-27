"use client";

import Image from "next/image";
import { useState } from "react";
import LoadingWheel from "./LoadingWheel";

/**
 * An iframe that will display a loading animation to inevitably load.
 * @author Lucas Bubner, 2025
 */
export default function LazyLoadedIFrame({ ...props }: React.ComponentProps<"iframe"> & React.ComponentProps<typeof LoadingWheel>) {
    const [frameLoaded, setFrameLoaded] = useState(false);

    return (
        <>
            {!frameLoaded && (
                <div className="absolute inset-0 flex items-center justify-center rounded __nsg bg-gray-800/10">
                    <LoadingWheel {...props} />
                </div>
            )}
            <iframe onLoad={() => setFrameLoaded(true)} {...props} />
        </>
    );
}
