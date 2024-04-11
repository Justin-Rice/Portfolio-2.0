import ProjectCard from "./project-card/ProjectCard.jsx"
import './project.scss';
import {Element} from 'react-scroll';

export default function Projects(){
    return (
        <Element>
        <div className="projects" id="projects">
            <div className="projects-title">Projects</div>
            <ProjectCard></ProjectCard>
        </div>
        </Element>
    )

}