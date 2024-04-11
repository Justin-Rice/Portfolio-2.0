import './home.scss';
import Badge from '../badge/Badge';
import {Element} from 'react-scroll';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function Home(){
let arr = ["HTML", "CSS", "JavaScript", "SCSS", "Git", "React", "JQuery", "Figma", "Adobe XD", "Firebase"]

    return (
        <Element>
        <div className="home"id='home'>
            <div className="home-container">
                <div className="home-flex">
                    <div className="home-info">
                        <div className="home-info-name">JUSTIN RICE</div>
                        <div className="home-info-title">FRONTEND DEVELOPER</div>
                        <div className="home-info-brief">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit, sed do </div>
                        <div className="home-info-badges">
                           {
                                arr.map((skill, index)=>{
                                    return  <Badge key={index} skill={skill} />
                                })
                           }

                            
                        </div>
                        <div className="home-info-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        </div>
                        <div className="home-info-links">
                         <FaLinkedin className="icon linkedin"/>
                         <FaGithub className="icon github" />
                        </div>
                    </div>
                    <div className="home-img"></div>
                </div>
                <div className="top-left"></div>
                <div className="bottom-right"></div>
            </div>
        </div>
        </Element>
    )
}