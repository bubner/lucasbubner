import SoundLink from "@/components/SoundLink";
import { BunyipsLibBanner, BunyipsLibMap, Timeline } from "@/images";
import LazyLoadedImage from "../LazyLoadedImage";

export default function BunyipsLib() {
    const Big = ({ children, scale = 4 }: { children: React.ReactNode; scale?: number }) => (
        <span className={`text-${scale}xl font-bold`}>{children}</span>
    );

    return (
        <div className="w-full flex flex-col">
            <h1 className="!text-4xl lg:!text-6xl text-left">South Australia's leading FIRST® Tech Challenge library</h1>
            <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col w-full lg:w-1/3 gap-4 items-center">
                    <SoundLink href="https://git.bubner.me/BunyipsLib" className="underline text-blue-400 text-base" target="_blank">
                        https://git.bubner.me/BunyipsLib
                    </SoundLink>
                    <span>
                        <Big scale={5}>25,000</Big> lines of code
                    </span>
                    <span>
                        <Big scale={5}>1,100</Big> commits
                    </span>
                    <span>
                        <Big scale={5}>41</Big> version releases
                    </span>
                    <LazyLoadedImage src={Timeline} width={400} alt="Timeline" containerClassName="p-4" />
                </div>
                <div className="flex flex-col w-full">
                    <LazyLoadedImage src={BunyipsLibBanner} alt="BunyipsLib" containerClassName="p-4 lg:p-8" />
                    <div className="text-base font-normal">
                        <b>BunyipsLib</b> is a <Big>TODO</Big>
                    </div>
                    <LazyLoadedImage src={BunyipsLibMap} alt="BunyipsLib map" containerClassName="p-4 lg:p-8" />
                </div>
            </div>
        </div>
    );
}
