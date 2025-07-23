import { Suspense } from "react";
import GitHubRepoTree from "../components/info-pages/home/GitHubRepoTree";
import LoadingWheel from "../components/info-pages/LoadingWheel";
import entryIncrement from "../components/info-pages/entry-timing";
import Box from "../components/info-pages/Box";
import LazyLoadedImage from "../components/info-pages/LazyLoadedImage";
import SoundLink from "../components/SoundLink";

export default function Home() {
    const iter = entryIncrement(0.2);
    return (
        <div className="w-full xl:w-3/4 h-full flex items-center justify-center flex-col xl:flex-row">
            <div className="w-full xl:w-[700px] flex flex-col">
                <Box entryDelay={iter.next().value}>CV mini</Box>
                <Box entryDelay={iter.next().value}>
                    <div className="flex flex-col items-center justify-center gap-4 m-3">
                        <div className="flex gap-4">
                            <SoundLink href="https://wakatime.com/@bubner" target="_blank">
                                <LazyLoadedImage
                                    className="rounded"
                                    src="https://wakatime.com/badge/user/617e18c7-273e-4a36-be73-e7a0d8b31d1b.svg?style=for-the-badge"
                                    alt="Total time coded since Jun 30 2023"
                                    height={30}
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
                <Box entryDelay={iter.next().value}>Contacts</Box>
            </div>
            <div className="w-full xl:w-1/2">
                <Box className="min-h-[400px]" entryDelay={iter.next().value}>
                    <Suspense fallback={<LoadingWheel containerHeight="33vh" />}>
                        <GitHubRepoTree />
                    </Suspense>
                </Box>
            </div>
        </div>
    );
}
