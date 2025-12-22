import "react-loading-skeleton/dist/skeleton.css";
import { ReactElement, Suspense, use } from "react";
import Image from "next/image";
import { NotFound } from "@/app/images";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { getYear } from "./page";

// ILinkPreviewResponse
export interface URLData {
    url: string;
    title: string;
    siteName: string | undefined;
    author: string | undefined;
    description: string | undefined;
    mediaType: string;
    contentType: string | undefined;
    images: string[];
    videos: {
        url: string | undefined;
        secureUrl: string | null | undefined;
        type: string | null | undefined;
        width: string | undefined;
        height: string | undefined;
    }[];
    favicons: string[];
}

function DisplayCard({ data }: { data: URLData | null }) {
    let image: ReactElement;
    let body: ReactElement;

    if (data !== null) {
        image = (
            <Image
                className="rounded-xl object-cover w-[300px] h-[200px]"
                width={300}
                height={200}
                alt={data.description ?? data.title}
                src={data.images.length > 0 ? data.images[0] : NotFound}
            />
        );
        body = (
            <div className="flex flex-col p-3 w-[300px]">
                <h3 className="text-lg font-semibold leading-tight line-clamp-2">{data.title}</h3>
                <h3 className="text-xs mt-2">
                    {data.siteName} — {getYear(data.url)}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3 text-ellipsis">{data.description}</p>
                <span className="text-xs text-blue-400 truncate">{data.url}</span>
            </div>
        );
    } else {
        image = <Skeleton width={300} height={200} className="rounded-xl" />;
        body = (
            <div className="flex flex-col gap-2 p-3 w-[300px]">
                <Skeleton width={220} height={18} />
                <Skeleton width={260} height={14} />
                <Skeleton width={240} height={14} />
                <Skeleton width={180} height={12} />
            </div>
        );
    }

    const cn = "flex flex-col rounded-xl overflow-hidden bg-black p-4 m-2";
    return data !== null ? (
        <a href={data.url} target="_blank" rel="noopener noreferrer" className={cn + " hover:bg-zinc-900 transition-colors"}>
            {image}
            {body}
        </a>
    ) : (
        <div className={cn}>
            <SkeletonTheme baseColor="#111111" highlightColor="#7f7f7f">
                {image}
                {body}
            </SkeletonTheme>
        </div>
    );
}

function Card({ dataPromise }: { dataPromise: Promise<URLData | null> }) {
    const data = use(dataPromise);
    return <DisplayCard data={data} />;
}

export default function Media({ urlData }: { urlData: Promise<URLData | null>[] }) {
    return (
        <div className="flex flex-wrap w-full md:w-1/2 p-4 pt-0">
            {urlData.map((p, i) => (
                <Suspense key={i} fallback={<DisplayCard data={null} />}>
                    <Card dataPromise={p} />
                </Suspense>
            ))}
        </div>
    );
}
