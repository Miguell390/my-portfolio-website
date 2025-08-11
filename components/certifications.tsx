"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { certificationsData } from "@/lib/data";
// import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";


const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.1 * index,
        },
    }),
};

export default function Certifications() {
    // const { ref } = useSectionInView("Certifications", 0.5);

    return (
        <section id="certifications" className="scroll-mt-28 mb-28">
            <SectionHeading>My Certifications</SectionHeading>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {certificationsData.map((cert, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center text-center p-6 bg-white border border-black/5 rounded-xl shadow-lg dark:bg-white/10 dark:text-white/80"
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                    >
                        <div className="text-4xl text-gray-700 dark:text-white/70 mb-3">{cert.icon}</div>
                        <h3 className="text-lg font-semibold">{cert.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-white/60 mt-1">{cert.issuer}</p>
                        <p className="text-xs text-gray-500 dark:text-white/50 mt-2">{cert.year}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}