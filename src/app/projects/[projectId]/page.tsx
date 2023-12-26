"use client";

import { useParams } from "next/navigation";
import { projects as data } from "@/data/projects";
import { ProjectDTO } from "@/types/ProjectDTO";
import { PageWrapper } from "@/components/misc/PageWrapper";
import Image from "next/image";


const Project = () => {
    const params = useParams();

    const project = data.find(
        (project: ProjectDTO) => project.id.toString() === params.projectId
    );

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <PageWrapper>
            <div>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <Image
                    src={project.banner}
                    alt={project.title} width={400}
                    height={400}
                />
            </div>
        </PageWrapper>
    );
}

export default Project;