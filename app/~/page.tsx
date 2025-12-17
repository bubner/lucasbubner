import { Suspense } from "react";
import GitHubRepoTree from "../components/info-pages/home/GitHubRepoTree";
import LoadingWheel from "../components/info-pages/LoadingWheel";
import entryIncrement from "../components/info-pages/entry-timing";
import Box from "../components/info-pages/Box";
import LazyLoadedImage from "../components/info-pages/LazyLoadedImage";
import SoundLink from "../components/SoundLink";
import LazyLoadedIFrame from "../components/info-pages/LazyLoadedIFrame";
import { GitHubBubner, LinkedInBubner, ProtonBubner } from "../images";

export default function Home() {
    const iter = entryIncrement(0.2);
    const Red = ({ children }: { children: React.ReactNode }) => <span className="__text-emp-red font-bold">{children}</span>;
    const age = process.env.DOB ? Math.floor((Date.now() - parseInt(process.env.DOB) * 1000) / (1000 * 60 * 60 * 24 * 365.25)) : "?";

    return (
        <div className="w-full xl:w-3/4 h-full flex items-center justify-center flex-col xl:flex-row">
            <div className="w-full xl:w-[700px] flex flex-col">
                <Box entryDelay={iter.next().value}>
                    <div className="flex flex-col gap-2 p-3">
                        <span className="text-3xl">
                            Hi! I'm <Red>Lucas Bubner</Red>, a <b>{age}-year-old</b> software developer.
                        </span>
                        <span>
                            This website is an <b>introductory portfolio</b> of my work and achievements.
                        </span>
                    </div>
                </Box>
                <Box entryDelay={iter.next().value}>
                    <div className="flex text-xs font-bold justify-around w-full gap-1 items-center flex-wrap">
                        <SoundLink href="https://github.com/bubner" target="_blank" className="flex flex-col gap-1">
                            GitHub
                            <LazyLoadedImage src={GitHubBubner} className="rounded" height={28} alt="Lucas Bubner's GitHub" />
                        </SoundLink>
                        <SoundLink href="https://linkedin.com/in/bubner" target="_blank" className="flex flex-col gap-1">
                            LinkedIn
                            <LazyLoadedImage src={LinkedInBubner} className="rounded" height={28} alt="Lucas Bubner's LinkedIn" />
                        </SoundLink>
                        <SoundLink href={"mailto:bubner@p" + "roton.me"} target="_blank" className="flex flex-col gap-1">
                            Email
                            <LazyLoadedImage src={ProtonBubner} className="rounded" height={28} alt="Lucas Bubner's Email" />
                        </SoundLink>
                    </div>
                </Box>
                <Box entryDelay={iter.next().value}>
                    <div className="relative group w-full h-[220px]">
                        <LazyLoadedIFrame
                            src="https://cv.bubner.me"
                            title="CV"
                            className="pointer-events-none rounded-[2rem] w-full h-full p-3 transition filter group-hover:blur-sm"
                            tabIndex={-1}
                        />
                        <div
                            className="pointer-events-none absolute left-0 right-0 bottom-0 h-1/2 rounded-b-[2rem] z-10 m-3"
                            style={{
                                background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
                            }}
                        />
                        <SoundLink
                            href="https://cv.bubner.me"
                            rel="noopener noreferrer"
                            className="absolute inset-0 flex items-center justify-center rounded-[2rem] text-white text-2xl font-bold !opacity-0 group-hover:!opacity-100 transition-opacity duration-300 cursor-pointer z-20"
                        >
                            Go to CV
                            <p className="text-blue-400 underline">cv.bubner.me</p>
                        </SoundLink>
                    </div>
                </Box>
            </div>
            <div className="w-full xl:w-1/2 flex flex-col-reverse xl:flex-col">
                <Box className="h-full min-h-[400px]" entryDelay={iter.next().value}>
                    <Suspense fallback={<LoadingWheel containerHeight="400px" />}>
                        <GitHubRepoTree />
                    </Suspense>
                </Box>
                <Box entryDelay={iter.next().value}>
                    <div className="flex flex-col items-center justify-center gap-4 m-3">
                        <div className="flex gap-4">
                            <SoundLink href="https://wakatime.com/@bubner" target="_blank">
                                <LazyLoadedImage
                                    className="rounded"
                                    src="https://wakatime.com/badge/user/617e18c7-273e-4a36-be73-e7a0d8b31d1b.svg?style=for-the-badge"
                                    alt="Total time coded since Jun 30 2023"
                                    height={30}
                                    iconHeight={15}
                                    width={260}
                                    unoptimized
                                />
                            </SoundLink>
                            <SoundLink href="https://github.com/bubner" target="_blank">
                                <LazyLoadedImage
                                    className="rounded"
                                    src="https://img.shields.io/github/stars/bubner?style=for-the-badge&logo=github&color=%23006400"
                                    alt="GitHub stars"
                                    height={30}
                                    iconHeight={15}
                                    width={120}
                                    unoptimized
                                />
                            </SoundLink>
                        </div>
                        <SoundLink target="_blank" href="https://wakatime.com/@bubner">
                            <LazyLoadedImage
                                alt="WakaTime activity"
                                width={600}
                                height={100}
                                className="rounded-2xl"
                                priority
                                src="https://wakatime.com/share/@bubner/5e5091a6-e447-4c50-88f8-0c7c9205ef93.png"
                                draggable={false}
                            />
                        </SoundLink>
                    </div>
                </Box>
            </div>
        </div>
    );
}
