import Image from "next/image";
import HrefBox from "./HrefBox";
import { MBBCDrone } from "@/images";

export default function MBBC({ entryDelay }: { entryDelay: number }) {
    return (
        <HrefBox entryDelay={entryDelay} href="https://www.murraybridgelawnbowls.com.au/">
            <div className="flex flex-col xl:flex-row items-center justify-around gap-4 w-full">
                <Image src={MBBCDrone} width={600} className="rounded-xl" alt="Murray Bridge Bowling Club" />
                <div className="flex flex-col">
                    <h2 className="!text-2xl font-bold">Murray Bridge Bowling Club</h2>
                    <span className="underline text-blue-400 text-sm">https://www.murraybridgelawnbowls.com.au/</span>
                    <div className="mt-3">
                        Assisted volunteering efforts to repair IT systems and captured aerial drone footage to support promotion on their website.
                    </div>
                </div>
            </div>
        </HrefBox>
    );
}
