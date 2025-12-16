import Box from "@/app/components/info-pages/Box";
import Slides from "./Slides";
import { getLinkPreview } from "link-preview-js";
import { URLData } from "./Media";

export const fetchCache = "force-cache";

export default async function Robotics() {
    const mediaTabUrlData = [
        await getLinkPreview("https://www.5mu.com.au/local-news/murray-bridge-robotics-teams-fundraise-for-nationals/"),
        await getLinkPreview("https://www.murraybridge.news/robotics-students-are-on-a-roll-at/"),
        await getLinkPreview("https://murrayvalleystandard.com.au/news/2025/12/16/robotics-success-continues/"),
        await getLinkPreview("https://murrayvalleystandard.com.au/news/2024/11/20/robotics-teams-go-for-gold/"),
        await getLinkPreview("https://murrayvalleystandard.com.au/news/2023/12/20/community-gives-team-a-special-chance/"),
        await getLinkPreview("https://murrayvalleystandard.com.au/news/2023/12/07/students-hit-robotic-highs/"),
        await getLinkPreview("https://murrayvalleystandard.com.au/news/2023/10/31/technological-support/"),
        await getLinkPreview("https://www.murraybridge.news/robotics-students-are-on-a-roll-at/"),
        await getLinkPreview("https://www.murraybridge.news/can-you-help-murray-bridges-robotics-teams-get-to-the-nationals/"),
        await getLinkPreview("https://www.murraybridge.news/murray-bridge-high-school-hosts-successful-robotics-scrimmage/"),
    ] as URLData[];
    // TODO: some other links (not robotics)
    // https://www.murraybridge.news/students-recognised-with-2025-barker-shield-awards/
    // https://www.murraybridge.news/murray-bridge-high-school-students/
    // https://www.murraybridgelawnbowls.com.au/gallery
    // https://www.mbhs.sa.edu.au/?wtCmd=viewnewsletter&guid=19346
    // https://www.mbhs.sa.edu.au/news-events?article=54746
    // https://www.instagram.com/p/DDWAcTyJKlZ/?img_index=4
    // https://www.mbhs.sa.edu.au/?wtCmd=viewnewsletter&guid=52877

    return (
        <Box className="w-full h-full flex items-center justify-center flex-col xl:flex-row">
            <div className="embla w-full h-full">
                <Slides urlData={mediaTabUrlData} />
            </div>
        </Box>
    );
}
