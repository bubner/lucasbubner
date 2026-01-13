import Image from "next/image";
import HrefBox from "./HrefBox";
import { ADFFutureInnov } from "@/images";

export default function FutureInnov({ entryDelay }: { entryDelay: number }) {
    return (
        <HrefBox entryDelay={entryDelay} href="https://www.mbhs.sa.edu.au/?wtCmd=viewnewsletter&guid=52877" small>
            <div className="flex flex-col-reverse sm:flex-row justify-around items-center w-full">
                <Image src={ADFFutureInnov} width={150} className="w-[150px] rounded-xl mx-12 my-4" alt="ADF Future Innovators" />
                <div className="flex flex-col">
                    <h3 className="!text-xl font-bold">ADF Future Innovators Award</h3>
                    <span className="underline text-blue-400 text-sm">https://www.mbhs.sa.edu.au/?wtCmd=viewnewsletter&guid=52877</span>
                    <div className="mt-3">
                        Recipient of the 2025 ADF Future Innovators Award, recognised for robotics <b>mentoring</b>, STEM <b>engagement</b>, and{" "}
                        <b>leadership</b> in STEM studies.
                    </div>
                </div>
            </div>
        </HrefBox>
    );
}
