import Box from "@/app/components/info-pages/Box";
import Slides from "./Slides";
import { getLinkPreview } from "link-preview-js";
import { URLData } from "./Media";
import pLimit from "p-limit";

export const fetchCache = "force-cache";

const media: { url: string; year: number }[] = [
    { url: "https://www.murraybridge.news/robotics-students-are-on-a-roll-at/", year: 2023 },
    { url: "https://murrayvalleystandard.com.au/news/2023/10/31/technological-support/", year: 2023 },
    { url: "https://murrayvalleystandard.com.au/news/2023/12/07/students-hit-robotic-highs/", year: 2023 },
    { url: "https://murrayvalleystandard.com.au/news/2023/12/20/community-gives-team-a-special-chance/", year: 2023 },
    { url: "https://www.murraybridge.news/murray-bridge-high-school-hosts-successful-robotics-scrimmage/", year: 2024 },
    { url: "https://murrayvalleystandard.com.au/news/2024/11/20/robotics-teams-go-for-gold/", year: 2024 },
    { url: "https://www.murraybridge.news/can-you-help-murray-bridges-robotics-teams-get-to-the-nationals/", year: 2024 },
    { url: "https://www.5mu.com.au/local-news/murray-bridge-robotics-teams-fundraise-for-nationals/", year: 2024 },
    { url: "https://murrayvalleystandard.com.au/news/2025/12/16/robotics-success-continues/", year: 2025 },
];
export function getYear(url: string) {
    return media.find((m) => m.url === url)?.year;
}

export default function Robotics() {
    const rateLimit = pLimit(2);
    const mediaTabUrlData = media.map((m) => rateLimit(() => getLinkPreview(m.url).catch(() => null))) as Promise<URLData | null>[];

    // TODO: some other links (not robotics)
    // https://murrayvalleystandard.com.au/news/2025/12/21/high-score-for-bubner/
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
