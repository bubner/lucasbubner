import { shuffle } from "@/lib/util";
import { OpenGraphData } from "../../../components/info-pages/robotics/Media";
import Slides from "../../../components/info-pages/robotics/Slides";

export const fetchCache = "force-cache";

// Open Graph requests often fail or are bot-limited when hosted on prod. Since this data changes so infrequently (to not at all),
// it is simpler to just keep a local copy of the media tab URL data from performing the Open Graph fetch.
const media: OpenGraphData[] = shuffle([
    {
        year: 2025,
        url: "https://murrayvalleystandard.com.au/news/2025/12/16/robotics-success-continues/",
        title: "Robotics success continues",
        siteName: "The Murray Valley Standard",
        description:
            "The Murray Bridge High School (MBHS) Robotics Club has wrapped up another season, with students celebrating impressive results and continued [...]",
        author: "https://murrayvalleystandard.com.au/author/jimjin/",
        mediaType: "article",
        contentType: "text/html",
        images: [
            "https://murrayvalleystandard.com.au/wp-content/uploads/2025/12/MBHSrobots_522283_03.jpg",
            "https://murrayvalleystandard.com.au/wp-content/uploads/2025/12/mbhsrobots_524080_01.jpg",
        ],
        videos: [],
        favicons: [
            "https://murrayvalleystandard.com.au/wp-content/uploads/2023/04/murrayvalleystandard-favicon.png",
        ],
        charset: "UTF-8",
    },
    {
        year: 2024,
        url: "https://murrayvalleystandard.com.au/news/2024/11/20/robotics-teams-go-for-gold/",
        title: "Robotics teams go for gold",
        siteName: "The Murray Valley Standard",
        description:
            "Murray Bridge will be well represented at the FIRST Tech Challenge Australian National Championships in Sydney next month, with three [...]",
        author: "https://murrayvalleystandard.com.au/author/jimjin/",
        mediaType: "article",
        contentType: "text/html",
        images: ["https://murrayvalleystandard.com.au/wp-content/uploads/2024/11/mbhsrobots_445025_01.jpg"],
        videos: [],
        favicons: [
            "https://murrayvalleystandard.com.au/wp-content/uploads/2023/04/murrayvalleystandard-favicon.png",
        ],
        charset: "UTF-8",
    },
    {
        year: 2024,
        url: "https://www.murraybridge.news/murray-bridge-high-school-hosts-successful-robotics-scrimmage/",
        title: "Murray Bridge High School hosts successful robotics scrimmage",
        siteName: "Murray Bridge News",
        description:
            "The school has showcased a new, cutting-edge match field acquired thanks to a grant from the Freemasons.",
        mediaType: "article",
        contentType: "text/html",
        images: [
            "https://storage.ghost.io/c/86/d4/86d46695-6a8a-4e07-941b-6b7f408473bd/content/images/2024/06/robotics---1200-x-675.jpg",
        ],
        videos: [],
        favicons: [
            "https://storage.ghost.io/c/86/d4/86d46695-6a8a-4e07-941b-6b7f408473bd/content/images/size/w256h256/2026/01/MBN-logo--PNG-.png",
        ],
        charset: "utf-8",
    },
    {
        year: 2024,
        url: "https://www.5mu.com.au/local-news/murray-bridge-robotics-teams-fundraise-for-nationals/",
        title: "Murray Bridge Robotics Teams Fundraise for Nationals - 5MU",
        siteName: "5MU",
        description:
            "Murray Bridge High School is raising funds to get some of their brightest minds over to Sydney for a national...",
        author: "Jennie Lenman",
        mediaType: "article",
        contentType: "text/html",
        images: [
            "https://www.5mu.com.au/wp-content/uploads/sites/38/2024/11/robotics-clubs-from-murray-bridge-high.jpg",
        ],
        videos: [],
        favicons: [
            "https://www.5mu.com.au/wp-content/uploads/sites/38/2023/05/cropped-5MU_512x512-favicon.png?w=32",
            "https://www.5mu.com.au/wp-content/uploads/sites/38/2023/05/cropped-5MU_512x512-favicon.png?w=192",
            "https://www.5mu.com.au/wp-content/uploads/sites/38/2023/05/cropped-5MU_512x512-favicon.png?w=180",
        ],
        charset: "UTF-8",
    },
    {
        year: 2023,
        url: "https://www.murraybridge.news/robotics-students-are-on-a-roll-at/",
        title: "Robotics students are on a roll at Murray Bridge High School",
        siteName: "Murray Bridge News",
        description:
            "A $20,000 donation from the South Australian and Northern Territory Freemasons will help a local team compete in a national competition.",
        mediaType: "article",
        contentType: "text/html",
        images: [
            "https://storage.ghost.io/c/86/d4/86d46695-6a8a-4e07-941b-6b7f408473bd/content/images/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https_3a_2f_2fsubstack-post-media.s3.amazonaws.com_2fpublic_2fimages_2f8d6b53d5-2b94-444b-bf12-8ecabf393893_1200x675.jpg",
        ],
        videos: [],
        favicons: [
            "https://storage.ghost.io/c/86/d4/86d46695-6a8a-4e07-941b-6b7f408473bd/content/images/size/w256h256/2026/01/MBN-logo--PNG-.png",
        ],
        charset: "utf-8",
    },
    {
        year: 2023,
        url: "https://murrayvalleystandard.com.au/news/2023/12/20/community-gives-team-a-special-chance/",
        title: "Community gives team a special chance",
        siteName: "The Murray Valley Standard",
        description:
            "While Murray Bridge has been preparing for Christmas, some students from the Murray Bridge High School (MBHS) embarked on an [...]",
        author: "https://murrayvalleystandard.com.au/author/jimjin/",
        mediaType: "article",
        contentType: "text/html",
        images: ["https://murrayvalleystandard.com.au/wp-content/uploads/2023/12/bunyip_379684_01.jpg"],
        videos: [],
        favicons: [
            "https://murrayvalleystandard.com.au/wp-content/uploads/2023/04/murrayvalleystandard-favicon.png",
        ],
        charset: "UTF-8",
    },
    {
        year: 2024,
        url: "https://www.murraybridge.news/can-you-help-murray-bridges-robotics-teams-get-to-the-nationals/",
        title: "Can you help Murray Bridge’s robotics teams get to the nationals?",
        siteName: "Murray Bridge News",
        description:
            "A local high school's robotics team has made it to a national championship and is asking for the community's help.",
        mediaType: "article",
        contentType: "text/html",
        images: [
            "https://storage.ghost.io/c/86/d4/86d46695-6a8a-4e07-941b-6b7f408473bd/content/images/2024/11/241119-robotics.jpg",
        ],
        videos: [],
        favicons: [
            "https://storage.ghost.io/c/86/d4/86d46695-6a8a-4e07-941b-6b7f408473bd/content/images/size/w256h256/2026/01/MBN-logo--PNG-.png",
        ],
        charset: "utf-8",
    },
    {
        year: 2023,
        url: "https://murrayvalleystandard.com.au/news/2023/12/07/students-hit-robotic-highs/",
        title: "Students hit robotic highs",
        siteName: "The Murray Valley Standard",
        description:
            "While the Murraylands and Mallee community eagerly anticipates the festive season, the Murray Bridge High School Robotics team is making [...]",
        author: "https://murrayvalleystandard.com.au/author/jimjin/",
        mediaType: "article",
        contentType: "text/html",
        images: [
            "https://murrayvalleystandard.com.au/wp-content/uploads/2023/12/robotics_377836_04.jpg",
            "https://murrayvalleystandard.com.au/wp-content/uploads/2023/12/robotics_377836_01.jpg",
        ],
        videos: [],
        favicons: [
            "https://murrayvalleystandard.com.au/wp-content/uploads/2023/04/murrayvalleystandard-favicon.png",
        ],
        charset: "UTF-8",
    },
    {
        year: 2023,
        url: "https://murrayvalleystandard.com.au/news/2023/10/31/technological-support/",
        title: "Technological support",
        siteName: "The Murray Valley Standard",
        description:
            "The Murray Bridge High School Robotics Club has recently been awarded a $20,000 grant from the local Masonic Lodge to [...]",
        author: "https://murrayvalleystandard.com.au/author/jimjin/",
        mediaType: "article",
        contentType: "text/html",
        images: [
            "https://murrayvalleystandard.com.au/wp-content/uploads/2023/10/MBHighro_369665_01.jpg",
            "https://murrayvalleystandard.com.au/wp-content/uploads/2023/10/MBHighro_369665_02.jpg",
        ],
        videos: [],
        favicons: [
            "https://murrayvalleystandard.com.au/wp-content/uploads/2023/04/murrayvalleystandard-favicon.png",
        ],
        charset: "UTF-8",
    },
]);

export default function Robotics() {
    return <Slides ogData={media} />;
}
