import type { ReactNode } from "react";
import "./parallax-card.css";

type ProjectCardProps = {
    title: ReactNode;
    description: string;
    bgImage: string;
    url: string;
    external: boolean;
};

export default function ParallaxCard(props: ProjectCardProps) {
    return (
        <a
            className="project-card"
            href={props.url}
            target={props.external ? "_blank" : undefined}
            rel={props.external ? "noopener noreferrer" : undefined}
        >
            <div className="project-card__image" style={{ backgroundImage: `url("${props.bgImage}")` }} />
            <div className="project-card__info">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            <span className="project-card__arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" focusable="false">
                    <path d="M4 12h16m-6-6 6 6-6 6" />
                </svg>
            </span>
        </a>
    );
}
