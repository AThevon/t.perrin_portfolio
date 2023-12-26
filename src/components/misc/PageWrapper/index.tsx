"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header/header";

const xAxisVariants = {
    initial: {
        opacity: 0,
        x: 20,
    },
    animate: {
        opacity: 1,
        x: 0,
    },
    exit: {
        opacity: 0,
        x: 20,
    },
};

const yAxisVariants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
    },
    exit: {
        opacity: 0,
        y: 20,
    },
};

export const PageWrapper = ({
    children,
    yAxis,
    isTransparent,
}: {
    children: React.ReactNode;
    className?: string;
    yAxis?: boolean;
    isTransparent?: boolean;
}) => (
    <>
        <Header isTransparent={isTransparent ? true : false} />
        <motion.main
            variants={yAxis ? yAxisVariants : xAxisVariants}
            style={{ marginTop: "8rem" }}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
        >
            {children}
        </motion.main>
    </>
);