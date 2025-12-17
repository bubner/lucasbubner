import { Suspense, use } from "react";
import Image from "next/image";
import LoadingWheel from "@/app/components/info-pages/LoadingWheel";

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

function Card({ dataPromise }: { dataPromise: Promise<URLData | null> }) {
    const data = use(dataPromise);
    if (!data) return null;
    // TODO: skeleton and loading wheel replaced with proper no image element for both fallbacks
    return (
        <div className="flex flex-col">
            {data.images.length > 0 ? <Image src={data.images[0]} alt={""} width={200} height={200} /> : <LoadingWheel />}
            <p className="text-xs">{data.url}</p>
        </div>
    );
}

export default function Media({ urlData }: { urlData: Promise<URLData | null>[] }) {
    return (
        <div className="flex flex-wrap">
            {urlData.map((p, i) => (
                <Suspense key={i} fallback={<LoadingWheel containerHeight="100px" />}>
                    <Card dataPromise={p} />
                </Suspense>
            ))}
        </div>
    );
}
