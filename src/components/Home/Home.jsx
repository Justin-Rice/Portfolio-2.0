import './home.scss';
import Badge from '../badge/Badge';

export default function Home(){
    return (
        <div className="home">
            <div className="home-container">
                <div className="home-flex">
                    <div className="home-info">
                        <div className="home-info-name">JUSTIN RICE</div>
                        <div className="home-info-title">FRONTEND DEVELOPER</div>
                        <div className="home-info-brief">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit, sed do </div>
                        <div className="home-info-badges">
                            <Badge></Badge>
                        </div>
                        <div className="home-info-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        </div>
                    </div>
                    <div className="home-img"></div>
                </div>
                <div className="top-left"></div>
                <div className="bottom-right"></div>
            </div>
        </div>
    )
}