import SoundLink from "@/components/SoundLink";
import { Bellower, FIRSTDeansList, NotFound, PowerFM } from "@/images";
import { stepAccumulate } from "@/lib/util";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import "react-loading-skeleton/dist/skeleton.css";
import useSound from "use-sound";
import LazyLoadedImage from "../LazyLoadedImage";

// ILinkPreviewResponse
export interface OpenGraphData {
    year: number; // Manually added (not part of Open Graph)
    url: string;
    title: string;
    siteName: string | undefined;
    author?: string | undefined;
    description: string | undefined;
    mediaType: string;
    contentType: string | undefined;
    images: string[];
    videos: {
        url: string | undefined;
        secureUrl: string | null | undefined;
        type: string | null | undefined;
        width: string | undefined;
        height: string | undefined;
    }[];
    favicons: string[];
}

export default function Media({ ogData }: { ogData: OpenGraphData[] }) {
    const [playAppearSound] = useSound("/sounds/tap.wav");
    const leftEntryDelay = stepAccumulate(0.4);
    const rightEntryDelay = stepAccumulate(0.3);

    function Briefing({
        alignRight,
        image,
        title,
        children,
    }: {
        alignRight?: boolean;
        image: StaticImageData;
        title: string;
        children: React.ReactNode;
    }) {
        return (
            <motion.div
                initial={{ opacity: 0, x: -100 * (alignRight ? -1 : 1) }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.25 + leftEntryDelay.next().value!!, type: "tween" }}
                onAnimationComplete={() => playAppearSound()}
                className={`flex gap-4 my-12 xl:my-6 flex-col items-center ${alignRight ? "xl:flex-row-reverse" : "xl:flex-row"}`}
            >
                <div className="w-full xl:w-1/2 max-w-[400px]">
                    <LazyLoadedImage
                        src={image}
                        className="rounded-xl object-cover"
                        width={400}
                        height={300}
                        alt={title}
                    />
                </div>
                <div className="flex flex-col">
                    <div className={`text-2xl ${alignRight ? "text-right" : "text-left"}`}>{title}</div>
                    {children}
                </div>
            </motion.div>
        );
    }

    return (
        <div className="columns-1 md:columns-2 gap-4 pb-4">
            <div className="break-inside-avoid max-w-[1000px] p-4 pt-0 text-base font-normal text-left">
                <motion.p
                    className="text-4xl w-full !max-w-full border border-t-0 border-l-0 border-r-0 !pl-0 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <strong>Empowering</strong> regional high-school students through FIRST® Robotics
                </motion.p>
                <Briefing image={FIRSTDeansList} title="FIRST® Leadership Award">
                    <div className="text-gray-400">(f.k.a Dean's List Finalist)</div>
                    <ul className="list-disc ml-4">
                        <li>
                            <b>Nationally recognised</b> as one of three students within Australia for
                            upholding the FIRST® <b>core values</b>
                        </li>
                        <li>
                            Demonstrated impact as a <b>four-year club captain</b> through <b>leadership</b>, <b>technical ability</b>, <b>mentoring teammates</b>,
                            and <b>fostering collaboration</b>
                        </li>
                        <li>
                            Advanced <b>STEM participation</b> in <b>regional communities</b>, expanding
                            access to <b>student robotics in SA</b>
                        </li>
                    </ul>
                </Briefing>
                <Briefing alignRight image={Bellower} title="iAwards Innovations">
                    <ul className="list-disc ml-3">
                        <li>
                            <b>Multi-year</b> award-winning entries in the <b>AIIA iAwards</b> for STEM
                            innovation inspired by robotics
                        </li>
                        <li>
                            Created the <b>Bunyip Bellower</b>, a chat app to <b>enhance communication</b> in <b>school-based</b> settings,
                            nationally merited against <b>university entries</b> in the 2023 iAwards
                        </li>
                        <li>
                            Designed the <b>Bunyip Logbook</b> to document the <b>engineering design process</b> in
                            robotics workshops, recognised as an <b>SA/NT Finalist</b> in the 2025 iAwards
                        </li>
                    </ul>
                </Briefing>
                <Briefing image={PowerFM} title="Media Outreach">
                    <ul className="list-disc ml-4">
                        <li>
                            Featured across <b>radio, school events, and public platforms</b> promoting
                            <b> robotics and STEM pathways</b>
                        </li>
                        <li>
                            Directly contributed to <b>$24,000+ in funding</b> for visibility
                            of <b>student robotics programs</b> in regional Australia
                        </li>
                        <li>
                            Represented <b>student-led robotics innovation</b> as <b>club captain</b> across
                            public and media platforms
                        </li>
                    </ul>
                </Briefing>
            </div>
            {ogData.map((data, i) => (
                <motion.div
                    key={i}
                    className="break-inside-avoid mb-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 + rightEntryDelay.next().value!! }}
                >
                    <SoundLink
                        href={data.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col xl:flex-row rounded-3xl overflow-hidden bg-black px-4 py-4 xl:py-2 m-2 items-center justify-around w-fit hover:bg-black/30 transition-all border-4 border-red-950 border-opacity-0 hover:border-opacity-30"
                    >
                        <LazyLoadedImage
                            className="rounded-xl object-cover w-[200px] sm:w-[300px] h-[150px] sm:h-[200px]"
                            width={300}
                            height={200}
                            alt={data.description ?? data.title}
                            src={data.images.length > 0 ? data.images[0] : NotFound}
                        />
                        <div className="flex flex-col p-3 w-[200px] sm:w-[300px]">
                            <h3 className="text-lg font-semibold leading-tight line-clamp-2 min-h-12">{data.title}</h3>
                            <h3 className="text-xs mt-2">
                                {data.siteName} — {data.year}
                            </h3>
                            <p className="text-sm text-muted-foreground line-clamp-3 text-ellipsis">{data.description}</p>
                            <span className="text-xs text-blue-400 truncate">{data.url}</span>
                        </div>
                    </SoundLink>
                </motion.div>
            ))}
        </div>
    );
}
