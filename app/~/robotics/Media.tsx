import "react-loading-skeleton/dist/skeleton.css";
import { ReactElement, Suspense, use } from "react";
import Image from "next/image";
import { NotFound } from "@/app/images";
import Skeleton from "react-loading-skeleton";

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
    } else {
        image = <Skeleton width={300} height={200} baseColor="#111111" highlightColor="#7f7f7f" />;
    }
    return <div className="flex flex-col">{image}</div>;
}

function Card({ dataPromise }: { dataPromise: Promise<URLData | null> }) {
    const data = use(dataPromise);
    return <DisplayCard data={data} />;
}

export default function Media({ urlData }: { urlData: Promise<URLData | null>[] }) {
    return (
        <div className="flex flex-wrap">
            {urlData.map((p, i) => (
                <Suspense key={i} fallback={<DisplayCard data={null} />}>
                    <Card dataPromise={p} />
                </Suspense>
            ))}
        </div>
    );
}
