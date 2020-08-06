import React from 'react';

//import image to page
import logoImg from '../../assets/images/logo.svg'
import landingImge from '../../assets/images/landing.svg'

//import icon to page
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

//putting SPA
import {Link} from 'react-router-dom'

//import style to page
import './styles.css'

function Landing () {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">

                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online!</h2>
                </div>

                <img 
                    src={landingImge} 
                    alt="Plataforma de estudos" 
                    className="hero-image"/>

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar Aulas"/>
                        Dar Aulas
                    </Link>
                </div>
                
                <span className="total-connections">
                    Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
                </span>

            </div>
        </div>
    );
}

export default Landing