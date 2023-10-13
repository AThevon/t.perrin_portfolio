"use client";

import { useRef } from "react";
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
               <section className={styles.contact}>
                  <div>
                     <Image
                        src="/img-hero.png"
                        alt="Théo Perrin"
                        width={450}
                        height={450}
                     />
                  </div>
                  <div>
                     <h3>à propos de moi</h3>
                     <h2>Un regard passionné</h2>
                     <p>
                        Dans le cadre de mes deux années de Mastère Expert en
                        stratégie et développement digital et en tant que chargé
                        de communication, j'ai eu l'occasion de travailler sur
                        de nombreux projets formateurs que vous pourrez
                        retrouver ici.
                     </p>
                     <p>
                        Passionné par la musique, le cinéma, la peinture et le
                        monde digital:
                        <br />
                        <span>
                           ► J'accompagne les acteurs du monde artistique dans
                           le développement de leur communication.
                        </span>
                        <span>
                           ► J'explore les opportunités qui se trouvent à
                           l'intersection de l'art et du monde professionnel.
                        </span>
                     </p>
                     <p>
                        Je souhaite aujourd’hui intégrer une entreprise dans le
                        secteur artistique afin de pouvoir mettre à profit les
                        compétences et connaissances acquises ces dernières
                        années.
                     </p>
                  </div>
               </section>
            </ParallaxLayer>
            <ParallaxLayer offset={1.95} speed={0.2}>
               <section className={styles.features}>
                  <h2>Mes dernières créations</h2>
                  <div className={styles.card_container}>
                     <TiltCard className={styles.tilt_card}>
                        <div className={styles.card}>
                           <h3>Projets</h3>
                           <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Quisquam, voluptatum.
                           </p>
                        </div>
                     </TiltCard>
                     <TiltCard className={styles.tilt_card}>
                        <div className={styles.card}>
                           <h3>Projets</h3>
                           <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Quisquam, voluptatum.
                           </p>
                        </div>
                     </TiltCard>
                     <TiltCard className={styles.tilt_card}>
                        <div className={styles.card}>
                           <h3>Projets</h3>
                           <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Quisquam, voluptatum.
                           </p>
                        </div>
                     </TiltCard>
                  </div>
               </section>
            </ParallaxLayer>
         </Parallax>
      </main>
   );
}
