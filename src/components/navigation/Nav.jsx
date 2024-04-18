import './nav.scss'
import { Link } from 'react-scroll';
export default function Nav(){    
    return (
        <div className="nav">
            <Link 
                to="home" 
                smooth='easeInCubic'
                duration={400}
                className="dot"
                id='d1'
                isDynamic={true}
                offset={-100}
                spy={true}
                activeClass='active'
              />
              <Link 
                to="projects" 
                smooth='easeInCubic'
                duration={400}
                className="dot"
                id='d2'
                spy={true}
                activeClass='active'
              />
              <Link 
                to="photography" 
                smooth='easeInCubic'
                duration={400}
                className="dot"
                id='d3'
                isDynamic={true}
                spy={true}
                offset={-100}
                activeClass='active'
              />
        </div>
    )
}