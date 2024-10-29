import React from 'react';

function CompanyDescv2(props)
{
    return (
        <div className="col-12 col-xl-4">
            <div className="container company-description">
                <div className="row">
                        <div className="col-12">
                            <h1>{props.title}</h1>
                        </div>
                </div>
                <div className="row">
                        <div className="col-12">
                                <img className='img-fluid' src= {props.image} alt="" />
                        </div>
                </div>
                <div className="row">
                        <div className="col-12">
                            <p>
                                {props.body}
                            </p>
                        </div>
                </div>
                <div className="row align-items-end">
                        <div className="service-description-button col-12">
                            <button>MORE</button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyDescv2;