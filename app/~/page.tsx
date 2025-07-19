import { Suspense } from "react";
import GitHubRepoTree from "../components/info-pages/home/GitHubRepoTree";
import LoadingWheel from "../components/info-pages/LoadingWheel";
import MinBox from "../components/info-pages/MinBox";

export default function Home() {
    return (
        <div className="w-full md:w-3/4 h-full flex items-center justify-center flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex flex-col">
                <MinBox>WakaTime</MinBox>
                <MinBox>Contacts</MinBox>
                <MinBox>CV minibox</MinBox>
            </div>
            <div className="w-full md:w-1/2">
                <MinBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0, duration: 1 }}>
                    <Suspense fallback={<LoadingWheel containerHeight="33vh" />}>
                        <GitHubRepoTree />
                    </Suspense>
                </MinBox>
            </div>
        </div>
    );
}
