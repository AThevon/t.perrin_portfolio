"use client";

import { useRef, useState } from "react";
import Header from "@/components/Header/header";
import styles from "./home.module.scss";
import Image from "next/image";
import Button from "@/components/Button/button";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import TiltCard from "@/components/TiltCard/tiltCard";

export default function Home() {
   const parallax = useRef<IParallax>(null);

   const scroll = (to: number) => {
      if (parallax.current) {
         parallax.current.scrollTo(to);
      }
   };


   return (
      <main>
         <Parallax pages={3} ref={parallax}>
               <Header />
            <ParallaxLayer offset={0} speed={0.2}>
               <section className={styles.hero}>
                  <div className={styles.description}>
                     <div className={styles.content}>
                        <h2>Théo</h2>
                        <h2>Perrin</h2>
                        <h3>Chef de projet digital</h3>
                        <p>
                           Curieux, doté d'une grande aisance rédactionnelle,
                           réactif et créatif, je recherche une entreprise dans
                           le secteur artistique.
                        </p>
                        <Button type="button" onClick={() => scroll(2)}>
                           Prendre contact
                        </Button>
                     </div>
                  </div>
                  <div className={styles.image}>
                     <Image
                        src="/img-hero.png"
                        alt="Théo Perrin"
                        width={500}
                        height={500}
                     />
                  </div>
               </section>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={0}>
               <section className={styles.features}>
                     <TiltCard className={styles.tilt_card}>
                        <div className={styles.card}>
                           <h2>Projets</h2>
                           <p>
                              Lorem ipsum dolor sit amet consectetur
                              adipisicing elit. Quisquam, voluptatum.
                           </p>
                        </div>
                     </TiltCard>
                     <TiltCard className={styles.tilt_card}>
                        <div className={styles.card}>
                           <h2>Projets</h2>
                           <p>
                              Lorem ipsum dolor sit amet consectetur
                              adipisicing elit. Quisquam, voluptatum.
                           </p>
                        </div>
                     </TiltCard>
                     <TiltCard className={styles.tilt_card}>
                        <div className={styles.card}>
                           <h2>Projets</h2>
                           <p>
                              Lorem ipsum dolor sit amet consectetur
                              adipisicing elit. Quisquam, voluptatum.
                           </p>
                        </div>
                     </TiltCard>
               </section>
            </ParallaxLayer>
            <ParallaxLayer offset={1.95} speed={0.2}>
               <section className={styles.contact}>
                  <h2>Théo</h2>
                  <h2>Perrin</h2>
                  <h3>Chef de projet digital</h3>
                  <p>
                     Curieux, doté d'une grande aisance rédactionnelle, réactif
                     et créatif, je recherche une entreprise dans le secteur
                     artistique.
                  </p>
               </section>
            </ParallaxLayer>
         </Parallax>
      </main>
   );
}
