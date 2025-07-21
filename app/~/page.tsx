import { Suspense } from "react";
import GitHubRepoTree from "../components/info-pages/home/GitHubRepoTree";
import LoadingWheel from "../components/info-pages/LoadingWheel";
import MinBox from "../components/info-pages/MinBox";
import Image from "next/image";
import WakaTime from "../components/info-pages/home/WakaTime";
import entryIncrement from "../components/info-pages/entry-timing";

export default function Home() {
    const iter = entryIncrement(0.2);
    return (
        <div className="w-full 2xl:w-3/4 h-full flex items-center justify-center flex-col 2xl:flex-row">
            <div className="w-full sm:w-[700px] flex flex-col">
                <MinBox initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: iter.next().value!!, type: "spring", damping: 20, stiffness: 200 }}>
                    CV mini
                </MinBox>
                <MinBox initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: iter.next().value!!, type: "spring", damping: 20, stiffness: 200 }}>
                    <WakaTime />
                </MinBox>
                <MinBox initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: iter.next().value!!, type: "spring", damping: 20, stiffness: 200 }}>
                    Contacts
                </MinBox>
            </div>
            <div className="w-full sm:w-[700px] 2xl:w-1/2">
                <MinBox initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: iter.next().value!!, type: "spring", damping: 20, stiffness: 200 }}>
                    <Suspense fallback={<LoadingWheel containerHeight="33vh" />}>
                        <GitHubRepoTree />
                    </Suspense>
                </MinBox>
            </div>
        </div>
    );
}
