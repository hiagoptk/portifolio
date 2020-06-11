import React from "react";
import {FiChevronRight, FiChevronLeft, FiTerminal} from "react-icons/fi";
import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" id = "title" href="/">Hiago Patrick $<FiTerminal id = "iconNavbar"/></a>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/about"><FiChevronLeft id = "iconNavbar"/> About <FiChevronRight id = "iconNavbar"/></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/"><FiChevronLeft id = "iconNavbar"/> Portifólio <FiChevronRight id = "iconNavbar"/></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/"><FiChevronLeft id = "iconNavbar"/> Contact <FiChevronRight id = "iconNavbar"/></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;