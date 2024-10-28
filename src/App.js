import React from 'react'
import "./style.css"
import TopNav from './components/TopNav';
import NavBar from './components/NavBar';
import HeroImg from './components/HeroImg';
import CompanyDesc from './components/CompanyDesc';
import DescMoreButtons from './components/DescMoreButtons';
import ServiceDesc from './components/ServiceDesc';
import ServiceButtons from './components/ServiceButtons';
import Footer from './components/Footer';
//import CompanyDescList from './components/CompanyDescList';

function App() 
{
    return(
        <div className="container-fluid">
            <TopNav />
            <NavBar />
            <HeroImg />
            <CompanyDesc />
            <DescMoreButtons />
            <ServiceDesc />
            <ServiceButtons />
            <Footer />
        </div>
    )
}

export default App;