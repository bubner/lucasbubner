"use client";

import { useState } from "react";
import LoadingWheel from "./LoadingWheel";

/**
 * An iframe that will display a loading animation to inevitably load.
 * @author Lucas Bubner, 2025
 */
export default function LazyLoadedIFrame({ ...props }: React.ComponentProps<"iframe"> & React.ComponentProps<typeof LoadingWheel>) {
    const [frameLoaded, setFrameLoaded] = useState(false);

    return (
        <div className="relative w-full h-full">
            <iframe onLoad={() => setFrameLoaded(true)} {...props} />
            {!frameLoaded && (
                <div className="absolute inset-0 flex items-center justify-center rounded-[2rem] __nsg bg-gray-800/10 -z-10">
                    <LoadingWheel {...props} />
                </div>
            )}
        </div>
    );
}
