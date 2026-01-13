import {
    Bubner,
    BunyipBellower,
    Bunyips,
    CPlusPlus,
    FusionChess,
    JavaCup,
    JsDos,
    MDBunyip,
    MindOfCeo,
    Mine,
    Minecraft,
    MinecraftSb,
    Pulse,
    Python,
    RoboRegistry,
    RoboticsLogos,
    Unity,
    UTTT,
    VintageStory,
    ZeusMonitor,
} from "@/images";
import Box from "../../Box";
import Image, { StaticImageData } from "next/image";
import SoundLink from "@/components/SoundLink";
import { Children } from "react";
import { shuffle, stepAccumulate } from "@/lib/util";
import RiseInAnimation from "./RiseInAnimation";

function Project({ icon, title, href }: { icon: StaticImageData; title: string; href: string }) {
    return (
        <SoundLink target="_blank" href={href} className="flex flex-col m-3 gap-1 items-center justify-center group relative">
            <div className="group-hover:blur-sm transition duration-300 flex flex-col items-center">
                <Image src={icon} alt={title} width={70} height={70} className="w-[70px] h-[70px] p-1 object-contain" />
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

function ShuffledProjectGroup({
    category,
    description,
    children,
    entryDelay,
}: {
    category: string;
    description: string;
    children: React.ReactNode;
    entryDelay: number;
}) {
    return (
        <RiseInAnimation entryDelay={entryDelay} className="bg-black/40 w-full rounded-xl flex justify-between items-center">
            <div className="pl-4 text-left *:w-auto sm:*:w-max">
                <h3 className="font-bold text-xl">{category}</h3>
                <div className="text-sm">{description}</div>
            </div>
            <div className="flex flex-wrap items-center justify-center pr-4">{shuffle(Children.toArray(children))}</div>
        </RiseInAnimation>
    );
}

export default function MyProjects({ entryDelay }: { entryDelay: number }) {
    const iter = stepAccumulate(0.2);
    const initialDelay = 0.5;
    return (
        <Box entryDelay={entryDelay}>
            <h1>My Projects</h1>
            <div className="flex flex-col w-full gap-1 h-96 overflow-y-auto">
                <ShuffledProjectGroup category="Games" description="Desktop and web video games" entryDelay={initialDelay + iter.next().value!!}>
                    <Project icon={FusionChess} title="Fusion Chess" href="https://git.bubner.me/FusionChess" />
                    <Project icon={Unity} title="Clusterbyte" href="https://git.bubner.me/Clusterbyte" />
                    <Project icon={Unity} title="Tanks" href="https://git.bubner.me/Tanks" />
                    <Project icon={JsDos} title="DOS Games" href="https://git.bubner.me/DosGames" />
                    <Project icon={MindOfCeo} title="Mind" href="https://git.bubner.me/Mind" />
                    <Project icon={Mine} title="Minesweeper AI" href="https://git.bubner.me/MinesweeperAI" />
                    <Project icon={UTTT} title="Ultimate Tic Tac Toe" href="https://git.bubner.me/UltimateTicTacToe" />
                </ShuffledProjectGroup>
                <ShuffledProjectGroup category="Visualisation" description="Data transformation and abstraction" entryDelay={initialDelay + iter.next().value!!}>
                    <Project icon={ZeusMonitor} title="Zeus Monitor" href="https://git.bubner.me/ZeusMonitor" />
                    <Project icon={JavaCup} title="R3 Sim" href="https://git.bubner.me/r3sim" />
                    <Project icon={JavaCup} title="Hill Cipher" href="https://git.bubner.me/hillcipher-lib" />
                    <Project icon={JavaCup} title="Bézier" href="https://git.bubner.me/Bezier" />
                    <Project icon={JavaCup} title="BunyipsLib Virtual Robot" href="https://git.bubner.me/BunyipsLib_VirtualRobot" />
                </ShuffledProjectGroup>
                <ShuffledProjectGroup category="Websites" description="Web designed projects" entryDelay={initialDelay + iter.next().value!!}>
                    <Project icon={RoboRegistry} title="RoboRegistry" href="https://git.bubner.me/RoboRegistry" />
                    <Project icon={Bubner} title="CV" href="https://git.bubner.me/cv" />
                    <Project icon={Bubner} title="bubner.me" href="https://git.bubner.me/lucasbubner" />
                    <Project icon={Pulse} title="Serve" href="https://serve.bubner.me" />
                    <Project icon={BunyipBellower} title="Bunyip Bellower" href="https://git.bubner.me/BunyipBellower" />
                    <Project icon={MDBunyip} title="BunyipsLib for Rookies" href="https://git.bubner.me/bunyipslib-for-rookies" />
                    <Project icon={FusionChess} title="Fusion Chess" href="https://git.bubner.me/FusionChess" />
                </ShuffledProjectGroup>
                <ShuffledProjectGroup category="Libraries" description="Collections of common code" entryDelay={initialDelay + iter.next().value!!}>
                    <Project icon={Bunyips} title="BunyipsLib" href="https://git.bubner.me/BunyipsLib" />
                    <Project icon={CPlusPlus} title="Duino" href="https://git.bubner.me/Arduino-TouchScreen-Joystick" />
                    <Project icon={JavaCup} title="Hill Cipher" href="https://git.bubner.me/hillcipher-lib" />
                </ShuffledProjectGroup>
                <ShuffledProjectGroup category="APIs" description="Application programming interfaces" entryDelay={initialDelay + iter.next().value!!}>
                    <Project icon={Python} title="FIRST® Teams" href="https://git.bubner.me/FIRSTTeamAPI" />
                    <Project icon={Python} title="Profanity" href="https://git.bubner.me/ProfanityAPI" />
                    <Project icon={Python} title="BunyipsLib Wiki Search" href="https://git.bubner.me/BunyipsLib.wiki.search" />
                </ShuffledProjectGroup>
                <ShuffledProjectGroup category="Mods" description="Minecraft and Vintage Story game mods" entryDelay={initialDelay + iter.next().value!!}>
                    <Project icon={VintageStory} title="Distance Displayer" href="https://git.bubner.me/DistanceDisplayer" />
                    <Project icon={MinecraftSb} title="Ping Offset Miner" href="https://git.bubner.me/PingOffsetMiner" />
                    <Project icon={Minecraft} title="Move Tooltip" href="https://git.bubner.me/movetooltip" />
                    <Project icon={MinecraftSb} title="Stats Ring" href="https://git.bubner.me/StatsRing" />
                    <Project icon={MinecraftSb} title="SkyBlock AFK" href="https://git.bubner.me/sbafk-forge" />
                </ShuffledProjectGroup>
                <ShuffledProjectGroup category="Hardware" description="Integrated devices and embedded" entryDelay={initialDelay + iter.next().value!!}>
                    <Project icon={RoboticsLogos} title="FTC" href="https://git.bubner.me/BunyipsFTC" />
                    <Project icon={Bunyips} title="BunyipsLib" href="https://git.bubner.me/BunyipsLib" />
                    <Project icon={CPlusPlus} title="Duino" href="https://git.bubner.me/Arduino-TouchScreen-Joystick" />
                    <Project icon={Python} title="TI-84 Python" href="https://git.bubner.me/ti84-plus-ce-python" />
                    <Project icon={CPlusPlus} title="Arduino Cookie Clicker" href="https://git.bubner.me/Arduino-CookieClicker" />
                </ShuffledProjectGroup>
            </div>
        </Box>
    );
}
