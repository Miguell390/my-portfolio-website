"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
    return (
        <motion.section
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                My name is Miguel Lim, and I am in the final year of my Master of Information Technology at Swinburne University, majoring in {" "}
                <span className="font-medium">Software Technology. </span>
                In addition to my formal studies, I have completed online courses to refine my skills in {" "}
                <span className="font-medium">
          JavaScript, Python, Vue.js, C++, Node.js, MongoDB, MySQL, to AWS
        </span>{" "} and I apply these technologies in self-directed projects to reinforce my learning.
            </p>

            <p className="mb-3">
                {/*I am all about turning theory into practice by building projects, though*/}
                {/*I know there's always room for growth. As I gear up for graduation in{" "}*/}
                {/*<span className="italic">July 2026</span>, I am on the lookout for a{" "}*/}
                {/*<span className="underline">graduate program or internship</span> to get*/}
                {/*some real-world IT experience. Besides hitting the courses, I've been*/}
                {/*working at <span className="font-medium"> Coles Local Glenferrie as a Storemen and a Operational Trade Specialist. </span>*/}

                I expect to graduate in July 2026 and am actively seeking a graduate programme or internship to gain practical industry experience. Concurrently, I work at <span className="font-medium"> Coles Local Glenferrie as a Storemen and a Operational Trade Specialist. </span> I am fluent in English, Mandarin, and Malay, and my interests include the Pokémon Trading Card Game, reading, basketball, and baking. I am dedicated to continuous improvement and eager to contribute to the IT sector.

            </p>
        </motion.section>
    );
}