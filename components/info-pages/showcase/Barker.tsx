import { BarkerAward } from "@/images";
import LazyLoadedImage from "../LazyLoadedImage";
import HrefBox from "./HrefBox";

export default function Barker({ entryDelay }: { entryDelay: number }) {
    return (
        <HrefBox entryDelay={entryDelay} href="https://www.murraybridge.news/students-recognised-with-2025-barker-shield-awards/">
            <h1 className="!pb-1">Barker Shield</h1>
            <b>Academic Achievement</b>
            <span className="underline text-blue-400 text-sm my-2">
                https://www.murraybridge.news/students-recognised-with-2025-barker-shield-awards/
            </span>
            <span className="p-3 pt-2">
                Awarded for <b>exemplary academic performance</b> in Year 12 study within the Federal electorate of Barker.
            </span>
            <LazyLoadedImage src={BarkerAward} alt="Barker Award recipients" className="rounded-xl w-full max-w-[800px]" containerClassName="p-2" />
        </HrefBox>
    );
}
