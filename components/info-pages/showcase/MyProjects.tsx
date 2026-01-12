import { Bubner, BunyipBellower, Bunyips, CPlusPlus, FusionChess, Java, JavaCup, JsDos, MDBunyip, MindOfCeo, Mine, Minecraft, MinecraftSb, Pulse, Python, RoboRegistry, RoboticsLogos, Unity, UTTT, VintageStory, ZeusMonitor } from "@/images";
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
                <ProjectGroup category="Games" description="Desktop and web video games">
                    <Project icon={FusionChess} title="Fusion Chess" href="https://git.bubner.me/FusionChess" />
                    <Project icon={Unity} title="Clusterbyte" href="https://git.bubner.me/Clusterbyte" />
                    <Project icon={Unity} title="Tanks" href="https://git.bubner.me/Tanks" />
                    <Project icon={JsDos} title="DOS Games" href="https://git.bubner.me/DosGames" />
                    <Project icon={MindOfCeo} title="Mind" href="https://git.bubner.me/Mind" />
                    <Project icon={Mine} title="Minesweeper AI" href="https://git.bubner.me/MinesweeperAI" />
                    <Project icon={UTTT} title="Ultimate Tic Tac Toe" href="https://git.bubner.me/UltimateTicTacToe" />
                </ProjectGroup>
                <ProjectGroup category="Visualisation" description="Data transformation and abstraction">
                    <Project icon={ZeusMonitor} title="Zeus Monitor" href="https://git.bubner.me/ZeusMonitor" />
                    <Project icon={JavaCup} title="R3 Sim" href="https://git.bubner.me/r3sim" />
                    <Project icon={JavaCup} title="Hill Cipher" href="https://git.bubner.me/hillcipher-lib" />
                    <Project icon={JavaCup} title="Bézier" href="https://git.bubner.me/Bezier" />
                    <Project icon={JavaCup} title="BunyipsLib Virtual Robot" href="https://git.bubner.me/BunyipsLib_VirtualRobot" />
                </ProjectGroup>
                <ProjectGroup category="Websites" description="Web designed projects">
                    <Project icon={RoboRegistry} title="RoboRegistry" href="https://git.bubner.me/RoboRegistry" />
                    <Project icon={Bubner} title="CV" href="https://git.bubner.me/cv" />
                    <Project icon={Bubner} title="bubner.me" href="https://git.bubner.me/lucasbubner" />
                    <Project icon={Pulse} title="Serve" href="https://serve.bubner.me" />
                    <Project icon={BunyipBellower} title="Bunyip Bellower" href="https://git.bubner.me/BunyipBellower" />
                    <Project icon={MDBunyip} title="BunyipsLib for Rookies" href="https://git.bubner.me/bunyipslib-for-rookies" />
                    <Project icon={FusionChess} title="Fusion Chess" href="https://git.bubner.me/FusionChess" />
                </ProjectGroup>
                <ProjectGroup category="Libraries" description="Collections of common code">
                    <Project icon={Bunyips} title="BunyipsLib" href="https://git.bubner.me/BunyipsLib" />
                    <Project icon={CPlusPlus} title="Duino" href="https://git.bubner.me/Arduino-TouchScreen-Joystick" />
                    <Project icon={JavaCup} title="Hill Cipher" href="https://git.bubner.me/hillcipher-lib" />
                </ProjectGroup>
                <ProjectGroup category="APIs" description="Application programming interfaces">
                    <Project icon={Python} title="FIRST® Teams" href="https://git.bubner.me/FIRSTTeamAPI" />
                    <Project icon={Python} title="Profanity" href="https://git.bubner.me/ProfanityAPI" />
                    <Project icon={Python} title="BunyipsLib Wiki Search" href="https://git.bubner.me/BunyipsLib.wiki.search" />
                </ProjectGroup>
                <ProjectGroup category="Mods" description="Minecraft and Vintage Story game mods">
                    <Project icon={VintageStory} title="Distance Displayer" href="https://git.bubner.me/DistanceDisplayer" />
                    <Project icon={MinecraftSb} title="Ping Offset Miner" href="https://git.bubner.me/PingOffsetMiner" />
                    <Project icon={Minecraft} title="Move Tooltip" href="https://git.bubner.me/movetooltip" />
                    <Project icon={MinecraftSb} title="Stats Ring" href="https://git.bubner.me/StatsRing" />
                    <Project icon={MinecraftSb} title="SkyBlock AFK" href="https://git.bubner.me/sbafk-forge" />
                </ProjectGroup>
                <ProjectGroup category="Hardware" description="Integrated devices and embedded">
                    <Project icon={RoboticsLogos} title="FTC" href="https://git.bubner.me/BunyipsFTC" />
                    <Project icon={Bunyips} title="BunyipsLib" href="https://git.bubner.me/BunyipsLib" />
                    <Project icon={CPlusPlus} title="Duino" href="https://git.bubner.me/Arduino-TouchScreen-Joystick" />
                    <Project icon={Python} title="TI-84 Python" href="https://git.bubner.me/ti84-plus-ce-python" />
                    <Project icon={CPlusPlus} title="Arduino Cookie Clicker" href="https://git.bubner.me/Arduino-CookieClicker" />
                </ProjectGroup>
            </div>
        </Box>
    );
}
