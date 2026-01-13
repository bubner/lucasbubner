import Image, { StaticImageData } from "next/image";
import Box from "../Box";
import { Bellower, BellowerOfficial, BunyipBellower, Firebase, iAwards, React, TypeScript } from "@/images";
import HrefBox from "./HrefBox";
import LazyLoadedImage from "../LazyLoadedImage";

export default function BellowerAward({ entryDelay }: { entryDelay: number }) {
    const KwImg = ({ src, children }: { src: StaticImageData; children: React.ReactNode }) => (
        <span className="*:inline-block">
            {children}
            <LazyLoadedImage src={src} width={18} height={18} alt="" className="ml-1 translate-y-0.5" />
        </span>
    );

    return (
        <HrefBox entryDelay={entryDelay} href="https://git.bubner.me/BunyipBellower">
            <h2 className="!text-2xl font-bold m-4 mb-0">iAwards SA/NT Winner & National Merit</h2>
            <span className="underline text-blue-400 text-sm mb-2">https://git.bubner.me/BunyipBellower</span>
            <div className="flex flex-col-reverse 2xl:flex-row gap-4 m-3 items-center">
                <LazyLoadedImage src={BellowerOfficial} width={400} className="rounded-xl" containerClassName="w-auto 2xl:w-full" alt="Bunyip Bellower" />
                <ul className="list-disc text-left ml-4">
                    <li>
                        <b>Designed and developed</b> the{" "}
                        <KwImg src={BunyipBellower}>
                            <b>Bunyip Bellower</b>
                        </KwImg>
                        project, a technical solution to improve <b>communication</b> in
                        <b> school social clubs</b>
                    </li>
                    <li>
                        Built using{" "}
                        <KwImg src={TypeScript}>
                            <b>TypeScript</b>
                        </KwImg>{" "}
                        with{" "}
                        <KwImg src={React}>
                            <b>React</b>
                        </KwImg>{" "}
                        and <b>Vite</b>
                    </li>
                    <li>
                        Implemented a{" "}
                        <b>
                            <KwImg src={Firebase}>Firebase</KwImg> backend
                        </b>
                    </li>
                    <li>
                        <b>Recognised in 2023</b> as the <b>SA/NT iAwards</b> Student & Education <b>winner</b>
                    </li>
                    <li>
                        Merited <b>nationally</b>
                    </li>
                </ul>
            </div>
        </HrefBox>
    );
}
