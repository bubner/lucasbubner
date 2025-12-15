import Box from "@/app/components/info-pages/Box";
import Slides from "./Slides";
import { getLinkPreview } from "link-preview-js";
import { URLData } from "./Media";

export default async function Robotics() {
    const mediaTabUrlData = [
        await getLinkPreview("https://bubner.me"),
    ] as URLData[];

    return (
        <Box className="w-full h-full flex items-center justify-center flex-col xl:flex-row">
            <div className="embla w-full h-full">
                <Slides urlData={mediaTabUrlData} />
            </div>
        </Box>
    );
}
