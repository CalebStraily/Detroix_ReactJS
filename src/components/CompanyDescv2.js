function CompanyDescv2({ title, image, body })
{
    return (
        <div className="company-description">
            <div className="col-2 d-none d-sm-block"></div>
            <div className="col-8">
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
                                {body}
                            </p>
                        </div>
                </div>
                <div className="row">
                        <div className="service-description-button col-12 d-xl-none">
                            <button>MORE</button>
                        </div>
                </div>  
            </div>
            <div className="col-2 d-none d-sm-block"></div>
        </div>
    )
}

export default CompanyDescv2;