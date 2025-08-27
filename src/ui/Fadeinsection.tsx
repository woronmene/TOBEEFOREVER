import { useEffect, type ReactElement } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const FadeInSection = ({
    ref,
    children,
    delay = 0,
    className,
}: {
    ref: React.RefObject<HTMLElement | null>
    children: string | ReactElement;
    delay?: number;
    className?: string;
}) => {
    const inView = useInView(ref, { margin: "-100px", once: false });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start("visible");        
        } else {            
           // controls.start("hidden");           
        }
    }, [inView, controls]);

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.6,
                        delay,
                        ease: "easeOut",
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.section>
    );
};

export default FadeInSection;
