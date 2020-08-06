import React from 'react'

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

interface TeacgerListProps {
    image?:string;
    title?:string;
    valor?:string;
}

const TeacherItem:React.FC<TeacgerListProps> = ({image, title, valor}) => {
    return(
        <article className="teacher-item">
            <header>

                <img src="https://avatars0.githubusercontent.com/u/37835977?s=460&u=587ac215be731620b310995e8735f498a3a1e5b5&v=4" alt="Gustavo Magalhães"/>
                <div>
                    <strong>Gustavo Magalhães</strong>
                    <span>Quimica</span>
                </div>
            </header>                 
            <p>
                Estude a tecnologia da Quimica.
                <br/>
                Aprenda a como explodir coisas e efetuar reações quimicas
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$: 80,00</strong>
                </p>
                <button type='button'>
                    <img src={whatsAppIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem