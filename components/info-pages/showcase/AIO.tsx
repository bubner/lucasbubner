import { AIOLogo } from "@/images";
import HrefBox from "./HrefBox";
import Image from "next/image";
import LazyLoadedImage from "../LazyLoadedImage";

export default function AIO({ entryDelay }: { entryDelay: number }) {
    return (
        <HrefBox entryDelay={entryDelay} href="https://amt.edu.au/aio" small>
            <div className="flex flex-col-reverse sm:flex-row justify-around items-center w-full">
                <div className="flex flex-col">
                    <h3 className="!text-xl font-bold">AIO Credit Award</h3>
                    <span className="underline text-blue-400 text-sm">https://amt.edu.au/aio</span>
                    <div className="mt-3">
                        Recipient of an AIO Credit Award in the Senior Division for problem-solving skills in competitive programming.
                    </div>
                </div>
                <LazyLoadedImage src={AIOLogo} width={150} containerClassName="w-[150px] mx-12 my-4" className="rounded-xl" alt="AIO" />
            </div>
        </HrefBox>
    );
}
