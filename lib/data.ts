import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import userproImg from "@/public/userpro.png";
import datavisImg from "@/public/datavis.png";
import iamImg from "@/public/IAM.png";

import ecommerceImg from "@/public/agecare.png"; // <-- NEW IMAGE 1
import chatappImg from "@/public/chatbot.png";   // <-- NEW IMAGE 2

// imports icons for certifications
import { LuAward, LuShieldCheck } from "react-icons/lu"; // <-- Add new icon import
import { FaPython } from "react-icons/fa";

export const links = [
    { name: "Home", hash: "#home" },
    { name: "About", hash: "#about" },
    { name: "Projects", hash: "#projects" },
    { name: "Skills", hash: "#skills" },
    { name: "Certifications", hash: "#certifications" },
    { name: "Experience", hash: "#experience" },
    { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
    {
        title: "Final Year Master of IT Student",
        location: "Swinburne University, Melbourne, VIC",
        description:
            "I am majoring in IT, with minors in Software Technology. I am eagerly seeking an internship or graduate program before graduating by July 2025.",
        icon: React.createElement(LuGraduationCap),
        date: "July 2024 - present",
    },
    {
        title: "Coles Local Grocery Team Member",
        location: "Coles Local Glenferrie, VIC",
        description:
            "Led stock operations and meat inventory checks with gap scans and expiry markdowns. Coordinated deliveries across all departments and built seasonal display ends. Processed Direct Store Deliveries, validated shelf counts, and replenished inventory. Resolved night-fill discrepancies and conducted stocktakes across dry goods to ensure display accuracy and product flow.",
        icon: React.createElement(CgWorkAlt),
        date: "Nov 2023 - present",
    },
    // {
    //     title: "Freelancer",
    //     location: "Remote",
    //     description:
    //         "I freelanced as a website and mobile application tester, evaluating usability, user experience, and interface design while identifying bugs and collaborating with developers for refinement before release.",
    //     icon: React.createElement(FaReact),
    //     date: "2022 - present",
    // },
] as const;

export const projectsData = [
    { // NEW PROJECT 1
        title: "Full-Stack E-commerce Site",
        description:
            "A complete e-commerce platform with user authentication, product catalog, shopping cart",
        tags: ["React", "Next.js", "Node.js", "Stripe", "MongoDB"],
        imageUrl: ecommerceImg, // Use the new imported image
    },
    { // NEW PROJECT 2
        title: "Real-Time Chat App",
        description:
            "A web-based chat application allowing users to join rooms and send messages in real-time. Leverages WebSockets for instant communication.",
        tags: ["React", "Socket.IO", "Node.js", "Express", "CSS"],
        imageUrl: chatappImg, // Use the new imported image
    }
] as const;

export const certificationsData = [
    {
        title: "IBM Cybersecurity Analyst",
        issuer: "Coursera | IBM",
        year: "2025",
        icon: React.createElement(LuShieldCheck),
    },
    {
        title: "IT Automation with Python",
        issuer: "Coursera | Google",
        year: "2025",
        icon: React.createElement(FaPython),
    },
    {
        title: "Google IT Support",
        issuer: "Coursera | Google",
        year: "2024",
        icon: React.createElement(LuAward),
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript", // New
    "React",      // New
    "Next.js",    // New
    "Node.js",
    "Git",
    "Tailwind CSS", // New
    "MongoDB",
    "Redux",      // New
    "Express",
    "MySQL",
    "Python",
    "AWS",        // New
    "Figma",      // New
    "Customer Service",
    "Multilingual",
] as const;