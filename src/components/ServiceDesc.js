import twentyFirstImg from "../images/twentyfirst.png";
import ninthImg from "../images/ninth.png";
import seventhImg from "../images/seven.png";

function ServiceDesc()
{
    return(
        <div className="service-description">
            <div class="row">
                
                <div class="col-2 d-none d-sm-block"></div>

                <div class="col-12 col-xl-8">
                    <div class="row">

                        <div class="services-column col-12 col-xl-4">
                            <div class="row">
                                <div class="services-header col-12">
                                    <h1>SERVICES</h1>
                                </div>
                            </div>
                            <div class="row">
                                <div class="services-list col-12">
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet.</li>
                                        <li>Asperiores temporibus vitae odit deserunt!</li>
                                        <li>Adipisci eaque accusamus dicta id.</li>
                                        <li>Inventore ab hic eum omnis.</li>
                                        <li>Esse nihil voluptatum eaque tempore.</li>
                                        <li>Tempora minima repudiandae laudantium iusto.</li>
                                        <li>Ipsa sunt maxime cumque et?</li>
                                        <li>Fuga accusamus voluptate fugit exercitationem?</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row">
                                <div class="service-description-button col-12 d-xl-none">
                                    <button>MORE</button>
                                </div>
                            </div>
                        </div>

                        <div class="opportunities-column col-12 col-xl-4">
                            <div class="row">
                                <div class="opportunities-header col-12">
                                    <h1>OPPORTUNITIES</h1>
                                </div>
                            </div>
                            <div class="row">
                                <div class="opportunities-list col-12">
                                    <ul>
                                        <li>
                                            <h3>Lorem ipsum dolor sit.</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit. Beatae
                                                nihil ipsa sit, totam modi earum
                                                tempora vel illo numquam
                                                consequuntur.
                                            </p>
                                        </li>
                                        <li>
                                            <h3>Lorem ipsum dolor sit.</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur, adipisicing elit. Tenetur
                                                labore
                                                neque reiciendis explicabo
                                                voluptate soluta minima nemo eum,
                                                eaque architecto?
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="row">
                                    <div class="service-description-button col-12 d-xl-none">
                                        <button>MORE</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="news-column col-12 col-xl-4">

                            <div class="row">
                                <div class="news-header col-12">
                                    <h1>NEWS</h1>
                                </div>
                            </div>
                            <div class="row news-row">
                                <div class="col-4">
                                    <img class="img-fluid" src= {twentyFirstImg} alt="" />
                                </div>
                                <div class="news-list col-8">
                                    <ul>
                                        <li>
                                            <p>
                                                <span>Lorem ipsum dolor sit amet.</span> <br />
                                                Lorem ipsum dolor sit amet
                                                consectetur, adipisicing elit.
                                                Repellendus, laudantium.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row news-row">
                                <div class="col-4">
                                    <img class="img-fluid" src= {ninthImg} alt="" />
                                </div>
                                <div class="news-list col-8">
                                    <ul>
                                        <li>
                                            <p>
                                                <span>
                                                    Totam vitae corrupti nesciunt 
                                                    magnam?
                                                </span> <br />
                                                Ad voluptas provident necessitatibus toam.
                                                Aperiam voluptates sit dolor
                                                accusamus?
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row news-row">
                                <div class="col-4">
                                    <img class="img-fluid" src= {seventhImg} alt="" />
                                </div>
                                <div class="news-list col-8">
                                    <ul>
                                        <li>
                                            <p>
                                                <span>
                                                    Aliquid, quisquam! Ut,
                                                    aliquam quibusdam!
                                                </span> <br />
                                                Ratione quos, laborum
                                                consequuntur labore
                                                exercitationem vero vel
                                                nesciunt ipsa?
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row">
                                <div class="service-description-button col-12 d-xl-none">
                                    <button>MORE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-2 d-none d-sm-block"></div>
            </div>            
        </div>
    )
}

export default ServiceDesc;