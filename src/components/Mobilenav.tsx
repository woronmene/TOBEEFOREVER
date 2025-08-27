import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import useAutoNavigate from "../hooks/useAutoNavigate";
import ham_icon from "../assets/ham.svg";
import useClickOutSide from "../hooks/useClickOutSide";

type Props = {
    navLinks: {
        content: string;
        ref: React.RefObject<HTMLElement | null>;
    }[]
};

const Mobilenav = ({ navLinks }: Props) => {
    const dropDownRef = useRef<HTMLElement>(null);
    const [dropDown, setDropDown] = useState(false);
    const [active, setActive] = useState("Home");
    const autoNavigate = useAutoNavigate();
    useClickOutSide(dropDownRef, () => setDropDown(false));

    return <span
        ref={dropDownRef}
        className="relative flex-1 flex justify-end items-center sm:hidden">
        <AnimatePresence>
            {dropDown && (
                <motion.ul
                    key="mobile-nav"
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
                    className="flex flex-col justify-evenly items-center absolute top-2 right-8 font-main font-normal italic leading-[100%] tracking-normal text-[16px] text-[#FFFFFF] text-center whitespace-pre text-nowrap min-h-[178px] h-auto min-w-[91px] w-auto bg-stone-600 backdrop-blur-[40px] rounded shadow-2xl shadow-inherit"
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
            )}
        </AnimatePresence>
        
        {/* Hamburger button */}
        <motion.span
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
                    },
                },
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="inline-block"
        >
            <motion.button
                className="origin-center cursor-pointer"
                animate={{ rotate: dropDown ? 90 : 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setDropDown(!dropDown)}
            >
                <img
                    src={ham_icon}
                    alt="small screen ham"
                    className="h-auto w-auto object-cover object-center"
                />
            </motion.button>
        </motion.span>
    </span>;
};

export default Mobilenav;
