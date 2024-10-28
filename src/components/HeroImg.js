import heroImg from "../images/thinkbig.png"

function HeroImg()
{
    return (
        <div className="container hero-image">

        <div className="row">
            <div className="col-12">
                <img className="hero-img img-fluid" src= {heroImg} alt="" />
            </div>
        </div>

        <div className="container circles">
            <div className="row circle-row">
                <div className="col-4"></div>
                <div className="circle-buttons col-4 d-flex justify-content-center">
                    <div className="c-button">.</div>
                    <div className="c-button">.</div>
                    <div className="c-button">.</div>
                </div>
                <div className="col-4"></div>
            </div>
        </div>

        </div>
    )
}

export default HeroImg;