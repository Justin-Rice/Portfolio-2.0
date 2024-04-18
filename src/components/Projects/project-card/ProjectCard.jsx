import Badge from '../../badge/Badge';
import '../../badge/badge.scss';
import './project-card.scss';

export default function ProjectCard(props){
    const {title, img, badges, description, github, url} = props.data;

    return(
        <div className="project-card"> 
        <div className="project-card-info">
            <div className="project-card-info-flex">
                <div className="project-card-info-title">{title}</div>
                <div className="project-card-info-badges">
                    {
                        badges.map((badge, index)=>{
                            return <Badge size='badge S' key={index} skill={badge} />
                        })
                    }
                </div>
                <div className="project-card-info-desc">{description}</div>
               <a href={github} target='_blank'> <div className="project-card-info-source">Source</div></a>
            </div>
        </div>
       <a href={url} target='_blank'> <img  src={"imgs/" + img } className="project-img"/></a>
        
        </div>
    )
}