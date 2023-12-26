"use client";

import Card from '@/components/Card/card';
import styles from './projects.module.scss'
import { PageWrapper } from '@/components/misc/PageWrapper';
import { useRouter } from 'next/navigation';
import { projects as data } from '@/data/projects';

const Projects = () => {
    const router = useRouter();
    const handleClick = (id: number) => {
        router.push(`/projects/${id}`);
    };

    return (
        <PageWrapper>
            <section className={styles.projects}>
                <ul>
                    {data.map((project, index) => (
                        <li key={index} onClick={() => handleClick(project.id)}>
                            <Card
                                title={project.title}
                                description={project.description}
                                banner={project.banner ? project.banner : ""}
                                link={project.link}
                            />
                        </li>
                    ))}
                </ul>
            </section>
        </PageWrapper>
    )
}

export default Projects;
