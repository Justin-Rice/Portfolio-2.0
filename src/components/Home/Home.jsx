import './home.scss';
import Badge from '../badge/Badge';
import {Element} from 'react-scroll';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function Home(){
let skills = ["HTML", "CSS", "JavaScript", "SCSS", "Git", "React","JSX", "JQuery", "Figma", "Photoshop", "Firebase", "NoSQL", 'Vite']

    return (
        <Element>
            <div className="home"id='home'>
                <div className="home-container">
                    <div className="home-flex">
                        <div className="home-info">
                            <div className="home-info-name">JUSTIN RICE</div>
                            <div className="home-info-title">FRONTEND DEVELOPER</div>
                            <div className="home-info-brief">
                                Developing pixel perfect webpages, specializing in ReactJS
                            </div>
                            <div className="home-info-badges">
                            {
                            skills.map((skill, index)=>{
                                return  <Badge key={index} skill={skill} />
                            })
                            }
                            </div>
                            <div className="home-info-body">
                            I am a developer based in Indianapolis. I graduated from IU Indy's Luddy School of Informatics in 2022 with a specialization in full-stack development. Outside of work, I enjoy baking, film photography, and going to Pacers games.
                            </div>
                            <div className="home-info-links">
                                <a target="_blank" href="https://www.linkedin.com/in/justin-rice-1691371a6/"> <FaLinkedin className="icon linkedin"/></a>
                                <a target="_blank" href="https://github.com/Justin-Rice"> <FaGithub className="icon github" /> </a>
                            </div>
                        </div>
                            <img className='home-img'src="imgs/me.png" alt="" />
                    </div>
                    <div className="top-left"></div>
                    <div className="bottom-right"></div>
                </div>
            </div>
        </Element>
    )
}