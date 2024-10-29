import React from 'react'
import "./style.css"
import TopNav from './components/TopNav';
import NavBar from './components/NavBar';
import HeroImg from './components/HeroImg';
import ServiceDesc from './components/ServiceDesc';
import ServiceButtons from './components/ServiceButtons';
import Footer from './components/Footer';
import CompanyDescv2 from './components/CompanyDescv2';
import puzzleImg from "./images/puzzle.png";
import handImg from './images/hand.png';
import mazeImg from './images/maze.png';

let loremText = `Lorem, ipsum dolor sit amet consectetur
                 adipisicing elit. Eligendi, nesciunt quidem.
                 Quam quibusdam eaque sed error. Ab,
                 eligendi asperiores. Quam.`;

function App() 
{
    return(
        <div className="container-fluid">
            <TopNav />
            <NavBar />
            <HeroImg />
            <div className="row">
                <CompanyDescv2 title={"SMART"} image= {puzzleImg} body= {loremText} />
                <CompanyDescv2 title={"STRONG"} image= {handImg} body= {loremText} />
                <CompanyDescv2 title={"STABLE"} image= {mazeImg} body= {loremText} />
            </div>
            <ServiceDesc />
            <ServiceButtons />
            <Footer />
        </div>
    )
}

export default App;