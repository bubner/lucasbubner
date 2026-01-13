import AIO from "@/components/info-pages/showcase/AIO";
import Barker from "@/components/info-pages/showcase/Barker";
import BellowerAward from "@/components/info-pages/showcase/BellowerAward";
import Dux from "@/components/info-pages/showcase/Dux";
import Freemasons from "@/components/info-pages/showcase/Freemasons";
import FutureInnov from "@/components/info-pages/showcase/FutureInnov";
import MBBC from "@/components/info-pages/showcase/MBBC";
import MyProjects from "@/components/info-pages/showcase/projects/MyProjects";
import { stepAccumulate } from "@/lib/util";

export default function Showcase() {
    const iter = stepAccumulate(0.2);
    return (
        <div className="flex w-full flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 flex flex-col">
                <MyProjects entryDelay={iter.next().value!!} />
                <BellowerAward entryDelay={iter.next().value!!} />
                <AIO entryDelay={iter.next().value!!} />
                <MBBC entryDelay={iter.next().value!!} />
            </div>
            <div className="w-full lg:w-1/2">
                <Dux entryDelay={iter.next().value!!} />
                <FutureInnov entryDelay={iter.next().value!!} />
                <Barker entryDelay={iter.next().value!!} />
                <Freemasons entryDelay={iter.next().value!!} />
            </div>
        </div>
    );
}
