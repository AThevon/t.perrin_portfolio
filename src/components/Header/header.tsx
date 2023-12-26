"use client";

import Link from "next/link";
import styles from "./header.module.scss";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";


const Header = () => {
    const path = usePathname();
    const isPathActive = (linkPath: string) => linkPath === "/" ? path === linkPath : path.startsWith(linkPath);
    const isTransparent = path === "/";


    const links = [
        {
            name: "Accueil",
            path: "/",
        },
        {
            name: "Projets",
            path: "/projects",
        },
        {
            name: "Contact",
            path: "/contact",
        },
    ];


    return (
        <header
            className={`
         ${styles.header}
            ${isTransparent ? styles.transparent : ""}
         `}
        >
            <h1>
                Théo <span>Perrin</span>
            </h1>
            <nav>
                <ul>
                    {links.map((link) => (
                        <li key={link.path}>
                            <Link
                                href={link.path}
                                className={isPathActive(link.path) ? styles.active : ""}
                            >
                                {isPathActive(link.path) && (
                                    <motion.span
                                        layoutId="underline"
                                        transition={{ duration: 0.25 }}
                                        className={styles.active}
                                    />
                                )}
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
