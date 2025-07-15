import ContextualFadeIn from "@/app/components/info-pages/ContextualFadeIn";
import PageIndicator from "@/app/components/PageIndicator";
import SoundLink from "@/app/components/SoundLink";
import { TreeStatusProvider } from "@/app/components/tree/TreeStatus";
import { Bubner, MainBackground } from "@/app/images";
import Image from "next/image";
import HomeScaleIn from "../components/info-pages/home/HomeScaleIn";

/**
 * Common layout for the bubner.me information pages.
 * @author Lucas Bubner, 2024
 */
export default function Layout({ children }: { children: React.ReactNode }) {
    // Titles are handled by the individual pages using metadata, this component will provide
    // the background and navbar which is common to all info pages.

    const hrefs = [
        { src: Bubner, alt: "Home", path: "/~" },
        { src: Bubner, alt: "Showcase", path: "/~/showcase" },
        { src: Bubner, alt: "Robotics", path: "/~/robotics" },
        { src: Bubner, alt: "Go to CV/Resume", path: "/~/cv" },
    ];

    return (
        <HomeScaleIn>
            <ContextualFadeIn>
                <Image className="-z-10 object-cover inset-0 w-full h-full fixed" src={MainBackground} alt="" quality={100} />
                <nav
                    role="navigation"
                    className="z-10 fixed top-3 left-1/2 -translate-x-1/2 rounded-[32px] m-auto bg-[#101111] flex flex-col items-center justify-center px-2 sm:px-6 [box-shadow:8px_4px_32px_0_rgba(100,100,100,0.4)]"
                >
                    <div className="flex pt-2 gap-0 sm:gap-6">
                        {hrefs.map((href, i) => (
                            <SoundLink
                                key={i}
                                href={href.path}
                                title={href.alt + " • " + href.path}
                                className="w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] hover:bg-[#202020] transition-colors p-1 rounded-xl"
                            >
                                <Image src={href.src} alt={href.alt} width={55} height={55} />
                            </SoundLink>
                        ))}
                    </div>
                    <PageIndicator />
                </nav>
                <div className="py-10" />
                <main
                    role="main"
                    className="transition-[margin-top] bg-inherit relative flex flex-wrap justify-center items-center content-center min-h-[calc(100%-80px)]"
                >
                    <TreeStatusProvider>{children}</TreeStatusProvider>
                </main>
            </ContextualFadeIn>
        </HomeScaleIn>
    );
}
