import puzzleImg from "../images/puzzle.png";
import handImg from '../images/hand.png';
import mazeImg from '../images/maze.png';

function CompanyDesc()
{
    return(
        <div className="company-description">

            <div className="row">
                <div className="col-2 d-none d-sm-block"></div>

                <div className="col-12 col-xl-8">
                    <div className="row">
                        <div className="smart-column col-12 col-xl-4">
                            {DescTemplate('SMART', puzzleImg)}
                        </div>
    
                        <div className="strong-column col-12 col-xl-4">
                            {DescTemplate('STRONG', handImg)}
                        </div>

                        <div className="stable-column col-12 col-xl-4">
                            {DescTemplate('STABLE', mazeImg)}
                        </div>
                    </div>
                </div>
                <div className="col-2 d-none d-sm-block"></div>
            </div>

        </div>
    )

    function DescTemplate(title, image)
    {
        return (
            <div>
                <div className="row">
                    <div className="col-12">
                        <h1>{title}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <img className="img-fluid" src= {image} alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur
                            adipisicing elit. Eligendi, nesciunt quidem.
                            Quam quibusdam eaque sed error. Ab,
                            eligendi asperiores. Quam.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="service-description-button col-12 d-xl-none">
                        <button>MORE</button>
                    </div>
                </div>
            </div>
        )
        
    }
}



export default CompanyDesc;