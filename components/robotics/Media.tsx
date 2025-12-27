import "react-loading-skeleton/dist/skeleton.css";
import { ReactElement, Suspense, use } from "react";
import Image, { StaticImageData } from "next/image";
import { Bellower, FIRSTDeansList, NotFound, PowerFM } from "@/images";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import SoundLink from "@/components/SoundLink";
import { motion } from "framer-motion";
import { stepAccumulate } from "@/lib/util";
import useSound from "use-sound";
import { getYear } from "../../app/~/robotics/page";

// ILinkPreviewResponse
export interface URLData {
    url: string;
    title: string;
    siteName: string | undefined;
    author: string | undefined;
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

function DisplayCard({ data }: { data: URLData | null }) {
    let image: ReactElement;
    let body: ReactElement;

    if (data !== null) {
        image = (
            <Image
                className="rounded-xl object-cover w-[250px] sm:w-[300px] h-[150px] sm:h-[200px]"
                width={300}
                height={200}
                alt={data.description ?? data.title}
                src={data.images.length > 0 ? data.images[0] : NotFound}
            />
        );
        body = (
            <div className="flex flex-col p-3 w-[250px] sm:w-[300px]">
                <h3 className="text-lg font-semibold leading-tight line-clamp-2">{data.title}</h3>
                <h3 className="text-xs mt-2">
                    {data.siteName} — {getYear(data.url)}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3 text-ellipsis">{data.description}</p>
                <span className="text-xs text-blue-400 truncate">{data.url}</span>
            </div>
        );
    } else {
        image = <Skeleton width={250} height={150} className="rounded-xl" />;
        body = (
            <div className="flex flex-col gap-2 p-3 w-[250px] sm:w-[300px]">
                <Skeleton width={220} height={18} />
                <Skeleton width={240} height={14} />
                <Skeleton width={240} height={14} />
                <Skeleton width={180} height={12} />
            </div>
        );
    }

    const cn = "flex flex-col xl:flex-row rounded-xl overflow-hidden bg-black p-4 m-2 items-center justify-around w-fit";
    return data !== null ? (
        <SoundLink href={data.url} target="_blank" rel="noopener noreferrer" className={cn + " hover:bg-black/70 transition-colors"}>
            {image}
            {body}
        </SoundLink>
    ) : (
        <div className={cn + " px-4 xl:px-8"}>
            <SkeletonTheme baseColor="#111111" highlightColor="#7f7f7f">
                {image}
                {body}
            </SkeletonTheme>
        </div>
    );
}

function Card({ dataPromise }: { dataPromise: Promise<URLData | null> }) {
    const data = use(dataPromise);
    return <DisplayCard data={data} />;
}

export default function Media({ urlData }: { urlData: Promise<URLData | null>[] }) {
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
                className={`flex gap-4 my-12 xl:my-6 flex-col ${alignRight ? "xl:flex-row-reverse" : "xl:flex-row"}`}
            >
                <Image
                    src={image}
                    className="rounded-xl object-cover object-left w-full xl:w-1/2 max-w-[400px]"
                    width={400}
                    height={300}
                    alt={title}
                />
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
                <Briefing image={FIRSTDeansList} title="FIRST® Dean's List Finalist">
                    <ul className="list-disc ml-4">
                        <li>
                            <b>Nationally recognised</b> as one of three students within Australia for upholding the FIRST®
                            <b> core values</b>
                        </li>
                        <li>
                            Demonstrated impact as a <b>four-year club captain</b> through <b>leadership</b>, <b>technical ability</b>,
                            <b> mentoring teammates</b>, and <b>fostering collaboration</b>
                        </li>
                        <li>
                            Advanced <b>STEM participation</b> in <b>regional communities</b>, expanding access to
                            <b> student robotics in SA</b>
                        </li>
                    </ul>
                </Briefing>
                <Briefing alignRight image={Bellower} title="iAwards Innovations">
                    <ul className="list-disc ml-4">
                        <li>
                            <b>Multi-year</b> award winning entries from the <b>AIIA iAwards</b> for STEM innovation inspired through robotics
                        </li>
                        <li>
                            Developed the <b>Bunyip Bellower</b> to win the <b>SA/NT Student & Education</b> category, and nationally merited as a
                            final contender against <b>national university entries</b> in 2023
                        </li>
                        <li>
                            Designed the <b>Bunyip Logbook</b> in assistance to document the <b>engineering design process</b> within robotics
                            workshops, recognised as an SA/NT finalist in 2025
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
                            Directly contributed to <b>$24,000+ in funding</b> for visibility of <b>student robotics programs</b> in regional
                            Australia
                        </li>
                        <li>
                            Represented <b>student-led robotics innovation</b> as <b>club captain</b> across public and media platforms
                        </li>
                    </ul>
                </Briefing>
            </div>
            {urlData.map((p, i) => (
                <motion.div
                    key={i}
                    className="break-inside-avoid mb-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 + rightEntryDelay.next().value!! }}
                >
                    <Suspense fallback={<DisplayCard data={null} />}>
                        <Card dataPromise={p} />
                    </Suspense>
                </motion.div>
            ))}
        </div>
    );
}
