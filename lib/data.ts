import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import intelligentspend from "@/public/inteligentspend.png";
import pdfchatbot from "@/public/pdfchatbot.png";

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
        title: "PDF Chatbot Integration Tool",
        description:
            "GeminiApp is a PDF-focused integration tool that combines chatbot functionality with intelligent PDF content extraction and processing. Designed to enable conversational AI for PDF documents, this application allows users to query, edit, and interact with PDF content seamlessly.",
        tags: ["JavaScript", "Node.js", "Express", "Docker", "Google Generative AI", "Multer", "Cheerio" ],
        imageUrl: pdfchatbot, // Use the new imported image
        githubUrl: "https://github.com/Miguell390/geminiapp",
    },
    { // NEW PROJECT 2
        title: "Intelligent Financial Tracker",
        description:
            "A full-stack web application that helps you track your expenses and gain financial insights through the power of Google's Gemini AI. This project demonstrates a complete MERN stack application with advanced AI features, designed to be a clean, intuitive, and powerful financial tool.",
        tags: ["React", "Node.js", "Express", "Chart.js", "MongoDB", "Mongoose", "Google Gemini API"],
        imageUrl: intelligentspend, // Use the new imported image
        githubUrl: "https://github.com/Miguell390/intelligentTransactionTracker",
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