import { motion } from "framer-motion";
import { useState } from "react";
import useAutoNavigate from "../hooks/useAutoNavigate";

type Props = {
    navLinks: {
        content: string;
        ref: React.RefObject<HTMLElement | null>;
    }[]
};


const Decktopnav = ({ navLinks }: Props) => {
    const [active, setActive] = useState("Home");
    const autoNavigate = useAutoNavigate();

    
    return <span className="flex-1 hidden sm:flex">
        <motion.ul
            key="decktop-nav"
            variants={{
                hidden: { opacity: 0, y: -30 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        type: "spring",
                        delay: 0.5,
                        stiffness: 120,
                        damping: 20,
                        when: "beforeChildren",
                        staggerChildren: 0.05,
                    },
                },
                exit: {
                    opacity: 0,
                    y: -30,
                    transition: {
                        type: "spring",
                        delay: 0.5,
                        stiffness: 100,
                        damping: 25,
                        when: "afterChildren",
                        staggerChildren: 0.03,
                        staggerDirection: -1,
                    },
                },
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex-1 hidden sm:flex justify-evenly items-center font-main font-normal text-[18px] md:text-[24px] text-[#FFFFFF] text-center leading-[100%] tracking-normal whitespace-pre text-nowrap"
        >
            {
                navLinks.map(nav =>
                    <motion.li
                        key={nav.content}
                        onClick={() => setActive(nav.content)}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        variants={{
                            hidden: { opacity: 0, y: -10 },
                            visible: { opacity: 1, y: 0 },
                            exit: { opacity: 0, y: -10 },
                        }}
                        className="relative cursor-pointer"
                    >
                        <button
                            onClick={() => autoNavigate(nav.ref.current)}
                            className={`${active === nav.content ? "text-pink-600" : ""} cursor-pointer`}
                        >
                            {nav.content}
                        </button>
                        {active === nav.content && (
                            <motion.span
                                layoutId="underline"
                                className="inline-block absolute left-0 right-0 h-[3px] bg-pink-400 rounded-full -bottom-1"
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        )}
                    </motion.li>
                )
            }
        </motion.ul>
    </span>;
};

export default Decktopnav