"use client";

import Image from "next/image";
import { useState } from "react";
import LoadingWheel from "./LoadingWheel";

/**
 * A `next/image` instance that will display a loading animation to inevitably load without shifting the page.
 * @author Lucas Bubner, 2025
 */
export default function LazyLoadedImage({ ...props }: React.ComponentProps<typeof Image> & React.ComponentProps<typeof LoadingWheel>) {
    const {containerHeight, containerWidth, iconHeight, iconWidth, ...imageProps} = props;
    const [imgLoaded, setImgLoaded] = useState(false);

    return (
        <div className="relative">
            {!imgLoaded && (
                <div className="absolute inset-0 flex items-center justify-center rounded __nsg bg-gray-800/10">
                    <LoadingWheel containerHeight={containerHeight} containerWidth={containerWidth} iconHeight={iconHeight} iconWidth={iconWidth} />
                </div>
            )}
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image onLoad={() => setImgLoaded(true)} {...imageProps} alt=" " />
            {props["alt"] && <p className="sr-only">{props["alt"]}</p>}
        </div>
    );
}
