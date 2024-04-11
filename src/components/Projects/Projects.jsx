import ProjectCard from "./project-card/ProjectCard.jsx"
import './project.scss';
import {Element} from 'react-scroll';
import {projects} from './Projects';

export default function Projects(){
    console.log(projects)
    return (
        <Element className="projects" id="projects">
            <div className="projects-title">PROJECTS</div>
            <div className="projects-container">
                <div className="projects-flex">
                {
                projects.map((project, index)=>{
                    return <ProjectCard data={project} key={index} />

                })
                }
                    
                </div>

                <div className="top-left"></div>
                <div className="bottom-right"></div>
            </div>
        
        </Element>
    )

}