import { ProjectDTO } from "../types/ProjectDTO";

export const projects: ProjectDTO[] = [
    {
        id: 1,
        title: "Test",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        banner: "/img-hero.png",
        images: ["next.svg", "next.svg", "next.svg"],
        link: "/"
    },
    {
        id: 2,
        title: "Test",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        banner: "next.svg",
        images: ["next.svg", "next.svg", "next.svg"],
        link: "/"
    },
]