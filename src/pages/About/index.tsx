import React from "react";
import {FiTerminal} from "react-icons/fi";
import "./style.css";

const About = () => {
    return (
        <div id = "about">
            <div className="content">
                <div className = "myBox">
                    <h3>  ~Um pouco sobre mim $<FiTerminal /> </h3>
                    <p>Meu nome é Hiago Patrick, e eu sou um aspirante 
                        à web developer interessado em front-end e 
                        ReactJS, ReactNative, e de olho em 
                        Inteligência Artificial.</p>
                    <p>Atualmente cursando Sistemas de Informações na 
                        Universidade Estácio de Sá.</p>
                </div> 

                <div className = "myBox">
                    <h3>My skills $<FiTerminal /></h3>
                    <p>HTML5 e CSS</p>
                    <p>Bootstrap</p>
                    <p>Javascript</p>
                    <p>ReactJS e ReactNative</p>
                </div>

                <div className = "myBox">
                    <h3>Acadêmico $<FiTerminal /></h3>
                    <p>Sistemas de Informação - Universidade Estácio de Sá</p>
                    <p>De 2019 à 2023</p>
                    <br />
                    <p>Free Code Camp - Front-end web devolepment course</p>
                    <p>on going...</p>
                    <br />
                    <p>Digital Innovation One - Fullstack webcourse</p>
                    <p>on going...</p>

                </div>
            </div>

        </div>
    );
}

export default About;