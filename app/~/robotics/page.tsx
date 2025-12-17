import Box from "@/app/components/info-pages/Box";
import Slides from "./Slides";
import { getLinkPreview } from "link-preview-js";
import { URLData } from "./Media";
import pLimit from "p-limit";

export const fetchCache = "force-cache";

export default function Robotics() {
    const urls = [
        "https://www.5mu.com.au/local-news/murray-bridge-robotics-teams-fundraise-for-nationals/",
        "https://www.murraybridge.news/robotics-students-are-on-a-roll-at/",
        "https://murrayvalleystandard.com.au/news/2025/12/16/robotics-success-continues/",
        "https://murrayvalleystandard.com.au/news/2024/11/20/robotics-teams-go-for-gold/",
        "https://murrayvalleystandard.com.au/news/2023/12/20/community-gives-team-a-special-chance/",
        "https://murrayvalleystandard.com.au/news/2023/12/07/students-hit-robotic-highs/",
        "https://murrayvalleystandard.com.au/news/2023/10/31/technological-support/",
        "https://www.murraybridge.news/can-you-help-murray-bridges-robotics-teams-get-to-the-nationals/",
        "https://www.murraybridge.news/murray-bridge-high-school-hosts-successful-robotics-scrimmage/",
    ];
    const rateLimit = pLimit(2);
    const mediaTabUrlData = urls.map((url) => rateLimit(() => getLinkPreview(url).catch(() => null))) as Promise<URLData | null>[];

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
