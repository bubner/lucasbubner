import { Freemason } from "@/images";
import Box from "../Box";
import LazyLoadedImage from "../LazyLoadedImage";

export default function Freemasons({ entryDelay }: { entryDelay: number }) {
    return (
        <Box entryDelay={entryDelay}>
            <div className="flex items-center flex-col sm:flex-row justify-center gap-2">
                <div className="flex flex-col p-3">
                    <h2 className="!text-2xl font-bold">Freemasons Tertiary Scholarship</h2>
                    <div>
                        Recognised for <b>commitment</b> to advanced study and <b>community contribution in STEM</b>.
                    </div>
                </div>
                <LazyLoadedImage src={Freemason} width={250} alt="Freemasons Tertiary Scholarship" className="rounded-xl" containerClassName="p-4" />
            </div>
        </Box>
    );
}
