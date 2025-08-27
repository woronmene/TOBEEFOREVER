import Decktopnav from "./Decktopnav";
import Mobilenav from "./Mobilenav";

type Props = {
    homeSectionRef: React.RefObject<HTMLElement | null>
    ourStorySectionRef: React.RefObject<HTMLElement | null>
};

const Responsivenav = ({ homeSectionRef, ourStorySectionRef }: Props) => {
    
    const navLinks = [
        { content: "Home", ref: homeSectionRef },
        { content: "Our Story", ref: ourStorySectionRef },
    ];

    return <>
        {/* deck top navs */}
        <Decktopnav navLinks={navLinks} />

        {/* Mobile nav */}
        <Mobilenav navLinks={navLinks} />
    </>
}

export default Responsivenav;