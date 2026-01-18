import { HighScoreBubner } from "@/images";
import LazyLoadedImage from "../LazyLoadedImage";
import HrefBox from "./HrefBox";

export default function Dux({ entryDelay }: { entryDelay: number }) {
    return (
        <HrefBox entryDelay={entryDelay} href="https://murrayvalleystandard.com.au/news/2025/12/21/high-score-for-bubner/">
            <h1 className="!pb-2">High score for Bubner</h1>
            <span className="underline text-blue-400 text-sm mb-4">https://murrayvalleystandard.com.au/news/2025/12/21/high-score-for-bubner/</span>
            <div className="flex flex-col 2xl:flex-row gap-3 items-center">
                <div className="flex flex-col text-left ml-3 gap-4 justify-center h-full">
                    <div>
                        Awarded the third-time Dux of <b>Murray Bridge High School</b> with a raw ATAR of <b>98.75</b>.
                    </div>
                    <div>
                        Recognised for <b>consistent academic achievement</b>, producing exemplar mathematical investigations in <b>LaTeX</b> and
                        implementing <b>Java</b> solutions for applied problems.
                    </div>
                </div>
                <LazyLoadedImage
                    src={HighScoreBubner}
                    width={400}
                    className="rounded-xl"
                    containerClassName="mb-4 w-auto 2xl:w-full p-3"
                    alt="High score for Bubner"
                />
            </div>
        </HrefBox>
    );
}
