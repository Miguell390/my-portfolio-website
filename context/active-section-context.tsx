"use client";

import React, { useState, createContext, useContext } from "react";
import type { SectionName } from "@/lib/types"; // This assumes you have the lib/types.ts file

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

// Create the context
export const ActiveSectionContext =
    createContext<ActiveSectionContextType | null>(null);

// Create the provider component
export default function ActiveSectionContextProvider({
                                                         children,
                                                     }: {
    children: React.ReactNode;
}) {
    const [activeSection, setActiveSection] = useState<SectionName>("Home");
    // We need to keep track of this to disable the observer temporarily when user clicks on a link
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);

    return (
        <ActiveSectionContext.Provider
            value={{
                activeSection,
                setActiveSection,
                timeOfLastClick,
                setTimeOfLastClick,
            }}
        >
            {children}
        </ActiveSectionContext.Provider>
    );
}

// Create the custom hook for consuming the context's value
export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);

    if (context === null) {
        throw new Error(
            "useActiveSectionContext must be used within an ActiveSectionContextProvider"
        );
    }

    return context;
}