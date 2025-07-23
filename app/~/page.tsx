import { Suspense } from "react";
import GitHubRepoTree from "../components/info-pages/home/GitHubRepoTree";
import LoadingWheel from "../components/info-pages/LoadingWheel";
import WakaTime from "../components/info-pages/home/WakaTime";
import entryIncrement from "../components/info-pages/entry-timing";
import Box from "../components/info-pages/Box";

export default function Home() {
    const iter = entryIncrement(0.2);
    return (
        <div className="w-full xl:w-3/4 h-full flex items-center justify-center flex-col xl:flex-row">
            <div className="w-full xl:w-[700px] flex flex-col">
                <Box entryDelay={iter.next().value}>CV mini</Box>
                <Box entryDelay={iter.next().value}>
                    <WakaTime />
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
