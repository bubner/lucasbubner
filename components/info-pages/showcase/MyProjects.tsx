import { Bunyips, CPlusPlus } from "@/images";
import Box from "../Box";
import Image, { StaticImageData } from "next/image";
import SoundLink from "@/components/SoundLink";

function Project({ icon, title, href }: { icon: StaticImageData; title: string; href: string }) {
    return (
        <SoundLink target="_blank" href={href} className="flex flex-col m-3 gap-1 items-center justify-center group relative">
            <div className="group-hover:blur-sm transition duration-300 flex flex-col items-center">
                <Image src={icon} alt={title} width={70} height={70} className="w-[70px] h-[70px] p-1" />
                <div className="flex gap-1">
                    <span className="text-xs select-none font-extrabold text-blue-300/50 underline">{title}</span>
                </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-2xl font-extrabold">→</span>
            </div>
        </SoundLink>
    );
}

function ProjectGroup({ category, description, children }: { category: string; description: string; children: React.ReactNode }) {
    return (
        <div className="bg-black/40 w-full rounded-xl flex justify-between items-center">
            <div className="pl-4 text-left">
                <h3 className="font-bold text-xl">{category}</h3>
                <div className="text-sm">{description}</div>
            </div>
            <div className="flex pr-4">{children}</div>
        </div>
    );
}

export default function MyProjects({ entryDelay }: { entryDelay: number }) {
    return (
        <Box entryDelay={entryDelay}>
            <h1>My Projects</h1>
            <div className="flex flex-col w-full gap-1 h-96 overflow-y-auto">
                {/* <ProjectGroup category="Games" description="Desktop and web video games">
                </ProjectGroup>
                <ProjectGroup category="Math" description="GUI and text-based mathematical apps">
                </ProjectGroup>
                <ProjectGroup category="Websites" description="Web designed innovations">
                </ProjectGroup> */}
                <ProjectGroup category="Libraries" description="Collections of common code">
                    <Project icon={Bunyips} title="BunyipsLib" href="https://git.bubner.me/BunyipsLib" />
                    <Project icon={CPlusPlus} title="Duino" href="https://git.bubner.me/Arduino-TouchScreen-Joystick" />
                </ProjectGroup>
                {/* <ProjectGroup category="APIs" description="Application programming interfaces">
                </ProjectGroup>
                <ProjectGroup category="Mods" description="Minecraft and Vintage Story game mods">
                </ProjectGroup>
                <ProjectGroup category="Hardware" description="Interactions with hardware">
                </ProjectGroup> */}
            </div>
        </Box>
    );
}
