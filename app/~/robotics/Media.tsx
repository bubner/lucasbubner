import { getLinkPreview } from "link-preview-js";

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

export default function Media({ urlData }: { urlData: URLData[] }) {
    return <>{JSON.stringify(urlData)}</>;
}
