import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navbarc from './Component/Navbarc.js';
import BackgroundSlider from './Component/BackgroundSlider';
import './index.css';
import image1 from './Assets/Images/slider7.jpeg';


function Lightwestern() {
  return (
    <div className="talent">
        <Navbarc />
        <BackgroundSlider images={[image1]} duration={3600}  />
        <div style={{display:"block"}}>
            <div className="bgslider2">
                <div className="justify-content-md-center maincontent2"><font style={{color:'gold'}}>Light and Western Wing</font></div>     
                <div className="justify-content-md-center maincontent2"><font style={{color:'gold'}}>General Instructions</font></div>
            </div>
            <div className="bgslider3">
                <div className="maincontent3"><font><li>Participants who wish to apply for multiple categories are encouraged to register for each category separately.</li></font></div>
                <div className="maincontent3"><font><li>Please note that the number of categories applied to will not increase or decrease the chance of getting in.</li></font></div>
                <div className="maincontent3"><font><li>It will be purely based on the skills of the applicant in the respective category.</li></font></div>
                <div className="maincontent3"><font><li>Keep in mind that a well recorded video/audio will be easier to judge.</li></font></div>
                <div className="maincontent3"><font><li>While uploading the audition clip, please make sure that you name the file you’re uploading in the specified format to avoid confusion “RollNumber_Category” (for eg: 22XX40_Keyboard)</li></font></div>
            </div>
            <div className="bgslider4">
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card border="light" style={{background: 'none', borderRadius: '25px'}}>
                            <Card.Body>
                                <Card.Title><div className="maincontent3t">Light Vocals</div></Card.Title>
                                <Card.Text>
                                <div className="maincontent3"><font>For queries, Contact: </font></div>
                                <div className="maincontent3"><font>Sneha +91-8778569766</font></div>
                                <div className="maincontent3"><font>Enika +91-8637466826</font></div>
                                <div className="maincontent3"><font>Vasundhara +91-6380491586</font></div>
                                </Card.Text>
                                <a href="" target="__blank" className='fontjoin'>
                                    <button className="button text-bt-2">Register for Light Vocals</button>
                                </a>
                            </Card.Body >
                        </Card>
                    </Col>
                    <Col>
                        <Card border="light" style={{background: 'none', borderRadius: '25px'}}>
                            <Card.Body>
                                <Card.Title><div className="maincontent3t">Western Vocals</div></Card.Title>
                                <Card.Text>
                                    <div className="maincontent3"><font>For queries, Contact: </font></div>
                                    <div className="maincontent3"><font>Shreya +91-6380365873</font></div>
                                    <div className="maincontent3"><font>Thanushri +91-9980599514</font></div>        
                                </Card.Text>
                                <a href="" target="__blank" className='fontjoin'>
                                    <button className="button text-bt-2">Register for Western Vocals</button>
                                </a>
                            </Card.Body >
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className="bgslider4">
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card border="light" style={{background: 'none', borderRadius: '25px'}}>
                            <Card.Body>
                                <Card.Title><div className="maincontent3t">Rap</div></Card.Title>
                                <Card.Text>
                                    <div className="maincontent3"><font>For queries, Contact: </font></div>
                                    <div className="maincontent3"><font>Shaarodh +91-6383090932</font></div>
                                </Card.Text>
                                <a href="" target="__blank" className='fontjoin'>
                                    <button className="button text-bt-2">Register for Rap</button>
                                </a>
                            </Card.Body >
                        </Card>
                    </Col>
                    <Col>
                        <Card border="light" style={{background: 'none', borderRadius: '25px'}}>
                            <Card.Body>
                                <Card.Title><div className="maincontent3t">Flute</div></Card.Title>
                                <Card.Text>
                                    <div className="maincontent3"><font>For queries, Contact: </font></div>
                                    <div className="maincontent3"><font>Dhivyan +91-9360846374</font></div>
                                </Card.Text>
                                <a href="" target="__blank" className='fontjoin'>
                                    <button className="button text-bt-2">Register for Flute</button>
                                </a>
                            </Card.Body >
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className="bgslider4">
                <Row xs={1} md={2}  className="g-4">
                    <Col>
                        <Card border="light" style={{background: 'none', borderRadius: '25px'}}>
                            <Card.Body>
                                <Card.Title><div className="maincontent3t">Keyboard</div></Card.Title>
                                <Card.Text>
                                    <div className="maincontent3"><font>For queries, Contact: </font></div>
                                    <div className="maincontent3"><font>Saran +91-7010581741</font></div>
                                    <div className="maincontent3"><font>Shaarodh +91-6383090932</font></div>
                                </Card.Text>
                                <a href="" target="__blank" className='fontjoin'>
                                    <button className="button text-bt-2">Register for Keyboard</button>
                                </a>
                            </Card.Body >
                        </Card>
                    </Col>
                    <Col>
                        <Card border="light" style={{background: 'none', borderRadius: '25px'}}>
                            <Card.Body>
                                <Card.Title><div className="maincontent3t">Guitar</div></Card.Title>
                                <Card.Text>
                                    <div className="maincontent3"><font>For queries, Contact: </font></div>
                                    <div className="maincontent3"><font>Shrivatsan +91-9080981200</font></div>
                                    <div className="maincontent3"><font>Rohit +91-7005088158</font></div>
                                </Card.Text>
                                <a href="" target="__blank" className='fontjoin'>
                                    <button className="button text-bt-2">Register for Guitar</button>
                                </a>
                            </Card.Body >
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className="bgslider4">
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card border="light" style={{background: 'none', borderRadius: '25px'}}>
                            <Card.Body>
                                <Card.Title><div className="maincontent3t">Violin</div></Card.Title>
                                <Card.Text>
                                    <div className="maincontent3"><font>For queries, Contact: </font></div>
                                    <div className="maincontent3"><font>Gayathiri +91-9944927132</font></div>
                                    <div className="maincontent3"><font>Vishal +91-6360530676</font></div>
                                </Card.Text>
                                <a href="" target="__blank" className='fontjoin'>
                                    <button className="button text-bt-2">Register for Violin</button>
                                </a>
                            </Card.Body >
                        </Card>
                    </Col>
                    <Col>
                        <Card border="light" style={{background: 'none', borderRadius: '25px'}}>
                            <Card.Body>
                                <Card.Title><div className="maincontent3t">Drums</div></Card.Title>
                                <Card.Text>
                                    <div className="maincontent3"><font>For queries, Contact: </font></div>
                                    <div className="maincontent3"><font>Gayathiri +91-9944927132</font></div>
                                    <div className="maincontent3"><font>Vishal +91-6360530676</font></div>
                                </Card.Text>
                                <a href="" target="__blank" className='fontjoin'>
                                    <button className="button text-bt-2">Register for Drums</button>
                                </a>
                            </Card.Body >
                        </Card>
                    </Col>
                </Row>
            </div>

            <div style={{display:"block"}}>
                <div className="bgslider2" style={{marginTop: '1rem'}}>
                    <div className="justify-content-md-center maincontent2" ><font>Other categories</font></div>     
                    <Link to="/Talenthunt/Classical" className='fontjoin'>
                        <button className="button text-bt-2">
                            Classical Wing
                        </button>
                    </Link>
                    <Link to="/Talenthunt/Media" className='fontjoin'>
                        <button className="button text-bt-2">
                            Media Wing
                        </button>
                    </Link>
                    <Link to="/Talenthunt/Mixing" className='fontjoin'>
                        <button className="button text-bt-2">
                            Mixing Wing
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        <div className="bgslider2" style={{marginTop: '1rem'}}>
            <div className="maincontent3t"><font>For any other queries, contact:</font></div>
            <div className="maincontent3"><font>Lingeshwaran +91-6383880614</font></div>
            <div className="maincontent3"><font>Gayathiri +91-9944927132</font></div>
        </div>
        <div className="bgslider2" style={{marginTop: '4rem'}} />
    </div>

  );
}

export default Lightwestern;
