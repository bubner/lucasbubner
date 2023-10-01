/**
 * Runway section component.
 * @author Lucas Bubner, 2023
 */
import { AnimationOnScroll } from "react-animation-on-scroll";

function Section({ comments, images, index, animateIn, animateOnce }: { comments: string[][], images: string[], index: number, animateIn: string, animateOnce: boolean }) {
    return (
        <div className={`section ${index % 2 === 0 ? '' : 'r'}`}>
            <AnimationOnScroll className="section-image" animateIn={animateIn} animateOnce={animateOnce}>
                {images.map((image, i) => (
                    <img alt="" src={image} draggable={false} key={i} />
                ))}
            </AnimationOnScroll>
            <div className="section-text">
                {comments[index].map((message, i) => (
                    <div className={`text-scrolling ${index % 2 === 0 ? '' : 'r'}`} key={i}>
                        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={animateOnce}>
                            <span dangerouslySetInnerHTML={{ __html: message }} />
                        </AnimationOnScroll>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Section;