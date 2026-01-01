import HrefBox from "@/components/info-pages/showcase/HrefBox";
import { Bubner, BunyipBellower, FusionChess, RoboRegistry, RoboticsLogos } from "@/images";
import { stepAccumulate } from "@/lib/util";

export default function Showcase() {
    // TODO
    // https://murrayvalleystandard.com.au/news/2025/12/21/high-score-for-bubner/
    // https://www.murraybridge.news/students-recognised-with-2025-barker-shield-awards/
    // https://www.murraybridge.news/murray-bridge-high-school-students/
    // https://www.murraybridgelawnbowls.com.au/gallery
    // https://www.mbhs.sa.edu.au/?wtCmd=viewnewsletter&guid=19346
    // https://www.mbhs.sa.edu.au/news-events?article=54746
    // https://www.instagram.com/p/DDWAcTyJKlZ/?img_index=4
    // https://www.mbhs.sa.edu.au/?wtCmd=viewnewsletter&guid=52877
    const iter = stepAccumulate(0.2);
    // TODO: temporary placeholder to new box style
    return (
        <>
            {/* <HrefBox
                src={RoboticsLogos}
                size={80}
                href="https://github.com/Murray-Bridge-Bunyips/BunyipsLib/"
                entryDelay={iter.next().value}
            >
                <h1>BunyipsLib</h1>
                <span className="__clk">(click)</span>
                <p>
                    A <b>custom FIRST Tech Challenge library</b>, providing <b>powerful</b> developer tools and{" "}
                    <b>abstractions</b> for FTC robot programming. Built in <b>Java</b> and <b>Kotlin</b>.{" "}
                    <b>Free & Open Source</b>, <b>documentation-rich</b>, and <b>expansible</b>.
                </p>
            </HrefBox> 
            <HrefBox
                src={RoboRegistry}
                size={45}
                href="https://github.com/bubner/RoboRegistry/"
                extraBlur
                entryDelay={iter.next().value}
            >
                <h1>RoboRegistry</h1>
                <span className="__clk">(click)</span>
                <p>
                    A <b>digital registrar</b> for FIRST scrimmage event coordinators to handle school and entity
                    registration and manage logistics with <b>event registration</b> and <b>QR code check-ins</b>. Built
                    with <b>Flask</b> and <b>Firebase</b>.
                </p>
            </HrefBox> 
            <HrefBox
                src={BunyipBellower}
                size={45}
                href="https://github.com/Murray-Bridge-Bunyips/BunyipBellower"
                entryDelay={iter.next().value}
            >
                <h1>Bunyip Bellower</h1>
                <span className="__clk">(click)</span>
                <p>
                    A <b>real-time</b> Firebase chat application built for the members of the Murray Bridge Bunyips.
                    Built in <b>React</b> and <b>TypeScript</b>. Winner of the <b>2023 Australian SA/NT iAwards </b>
                    for the Student &amp; Education category.
                </p>
            </HrefBox> 
            <HrefBox
                src={FusionChess}
                size={40}
                href="https://github.com/bubner/FusionChess/"
                entryDelay={iter.next().value}
            >
                <h1>Fusion Chess</h1>
                <span className="__clk">(click)</span>
                <p>
                    A playable <b>custom chess variant</b> that changes the rules of the game to include
                    <b> piece fusion</b> instead of capturing. Built in <b>React</b> and <b>TypeScript</b>.
                </p>
            </HrefBox> 
            <HrefBox
                src={Bubner}
                size={45}
                href="https://github.com/bubner/lucasbubner/"
                extraBlur
                entryDelay={iter.next().value}
            >
                <h1>lucasbubner v2.1</h1>
                <span className="__clk">(click)</span>
                <p>
                    This very website, revamped to use <b>Next.js 14</b>, <b>framer-motion</b>, and <b>Tailwind CSS</b>.
                    Hosted on <b>Vercel</b> via my <b>personal domain</b>.
                </p>
            </HrefBox>  */}
        </>
    );
}