"use client";

import Link from "next/link";
import styles from "./header.module.scss";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";


const Header: React.FC = () => {
   const path = usePathname();

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
         name: "à propos",
         path: "/about",
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
         ${path === "/" ? styles.transparent : ""}
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
                        className={path === link.path ? styles.active : ""}
                     >
                        {path === link.path && (
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
