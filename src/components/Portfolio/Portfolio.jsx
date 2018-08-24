import React, { Component } from 'react'
import { Parallax, Row, Col, Table, Icon, MediaBox } from 'react-materialize'
var $ = require( 'jquery' )

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parallax_me_img : ""
        };
    }

    componentDidMount() {
        var w = window.innerWidth;
        if(w < 601){
            $('.parallax-container').css('height' , '200px')
            this.setState({parallax_me_img : "./assets/parallax-me-small.png"})
        }else if(w >= 601 && w < 993){
            $('.parallax-container').css('height' , '400px')
            this.setState({parallax_me_img : "./assets/parallax-me-medium.png"})
        }else if(w >= 993 && w < 1201){
            $('.parallax-container').css('height' , '500px')
            this.setState({parallax_me_img : "./assets/parallax-me-large.png"})
        }else if(w >= 1201){
            $('.parallax-container').css('height' , '500px')
            this.setState({parallax_me_img : "./assets/parallax-me-exlarge.png"})
        }
    }

    render() {
        return (
            <div>
                <Parallax imageSrc={this.state.parallax_me_img}/>
                <div className="section white">
                    <div className="row container">
                        <h2 className="header center-align">I'M <span className="text-orangefox">WATCHARA HONGKIM</span></h2>
                        <h4 className="header center-align">WEB DEVELOPER <span className="text-orangefox">AND</span> FRONT-END DEVELOPER</h4>
                        <Row>
                            <Col s={12} m={3} l={2} className="xl2">
                                <img src="./assets/coffee.png" alt="" style={{width:"100%"}}/>
                            </Col>
                            <Col s={12} m={9} l={10} className="xl10">
                                {/* <p className="grey-text text-darken-3 lighten-3 font-25">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p> */}
                                <p className="grey-text text-darken-3 lighten-3 font-25 mt-10">Hi, I'm Watchara Hongkim. I have 2.5 years of experience in web developer and front-end developer. I like to work in team and contact to other people.</p>
                                <blockquote>No matter what happens, life must go on.</blockquote>
                                <Row>
                                    <Col s={12} m={6}>
                                        <h4>Personal data</h4>
                                        <p className="font-18"><Icon left>chevron_right</Icon>Nationality : Thai</p>
                                        <p className="font-18"><Icon left>chevron_right</Icon>Height : 178.0 Cm.</p>
                                        <p className="font-18"><Icon left>chevron_right</Icon>Weight : 98.0 Kg.</p>
                                        <p className="font-18 hide-on-med-and-up show-on-small"><Icon left>chevron_right</Icon>Birth Date : Aug 26, 1992</p>
                                        <p className="font-18 hide-on-med-and-up show-on-small"><Icon left>chevron_right</Icon>Own car : No</p>
                                    </Col>
                                    <Col s={12} m={6} className="hide-on-small-only">
                                        <h4>&nbsp;</h4>
                                        <p className="font-18"><Icon left>chevron_right</Icon>Birth Date : Aug 26, 1992</p>
                                        <p className="font-18"><Icon left>chevron_right</Icon>Own car : No</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col s={12} m={6}>
                                        <h4>Education</h4>
                                        <p className="font-18"><Icon left>chevron_right</Icon>Bachelor Degree at Information Technology, Faculty of Informatics , Burapha University (2554 - 2557)</p>
                                        <p className="font-18"><Icon left>chevron_right</Icon>High School, Wichienmatu School (2551 - 2553)</p>
                                    </Col>
                                    <Col s={12} m={6}>
                                        <h4>Location</h4>
                                        <p className="font-18"><Icon left>chevron_right</Icon>Bangkok</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col s={12} m={6}>
                                        <h4>TARGET JOB</h4>
                                        <p className="font-18">Job type: Full Time</p>
                                        <p className="font-18">Job Field: (Ranked in order)</p>
                                        <p className="font-18"><Icon left>chevron_right</Icon>Frontend Developer</p>
                                        <p className="font-18"><Icon left>chevron_right</Icon>Web Developer</p>
                                        <p className="font-18"><Icon left>chevron_right</Icon>Web Design and Developer</p>
                                        <h4>Available to start a new job</h4>
                                        <p className="font-18"><Icon left>chevron_right</Icon>1 month notice</p>
                                    </Col>
                                    <Col s={12} m={6}>
                                        <h4>Languages</h4>
                                        <Table>
                                            <thead>
                                                <tr>
                                                <th data-field="language">Language</th>
                                                <th data-field="expert">Expert</th>
                                                <th data-field="rank">Rank</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td>English</td>
                                                    <td>Reading</td>
                                                    <td>Intermediate</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>Listening</td>
                                                    <td>Intermediate</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>Writing</td>
                                                    <td>Intermediate</td>
                                                </tr>
                                                <tr>
                                                    <td>Thai</td>
                                                    <td>Reading</td>
                                                    <td>Fluent</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>Listening</td>
                                                    <td>Fluent</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>Writing</td>
                                                    <td>Fluent</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col s={12} m={3}>
                                        <h4>SKILL</h4>
                                        <Table>
                                            <thead>
                                                <tr>
                                                <th data-field="platporm">Platform</th>
                                                <th data-field="rank">Rank</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td>Windows</td>
                                                    <td>
                                                        <img src="./assets/star-solid.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-solid.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-solid.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-solid.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-regular.svg" alt="" width="30" height="30"/>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Mac osx</td>
                                                    <td>
                                                        <img src="./assets/star-solid.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-solid.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-solid.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-regular.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-regular.svg" alt="" width="30" height="30"/>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Linux</td>
                                                    <td>
                                                        <img src="./assets/star-solid.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-solid.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-solid.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-regular.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-regular.svg" alt="" width="30" height="30"/>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Col>
                                    <Col s={12} m={5}>
                                        <h4>&nbsp;</h4>
                                        <Table>
                                            <thead>
                                                <tr>
                                                <th data-field="language">Pragramming Language</th>
                                                <th data-field="rank">Rank</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td>HTML , HTML5</td>
                                                    <td>
                                                        <img src="./assets/star-solid.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-solid.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-solid.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-solid.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-regular.svg" alt="" width="30" height="30"/>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>JAVASCRIPT<br/>(DOM, JQUERY, React)</td>
                                                    <td>
                                                        <img src="./assets/star-solid.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-solid.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-solid.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-regular.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-regular.svg" alt="" width="30" height="30"/>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>CSS<br/>(Boostrap, material design)</td>
                                                    <td>
                                                        <img src="./assets/star-solid.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-solid.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-solid.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-solid.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-regular.svg" alt="" width="30" height="30"/>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>PHP<br/>(php5, php7, codeigniter)</td>
                                                    <td>
                                                        <img src="./assets/star-solid.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-solid.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-solid.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-solid.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-regular.svg" alt="" width="30" height="30"/>
                                                    </td>
                                                </tr> 
                                            </tbody>
                                        </Table>
                                    </Col>
                                    <Col s={12} m={4}>
                                        <h4>&nbsp;</h4>
                                        <Table>
                                            <thead>
                                                <tr>
                                                <th data-field="language">Database</th>
                                                <th data-field="rank">Rank</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td>SQL & MSSQL</td>
                                                    <td>
                                                        <img src="./assets/star-solid.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-solid.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-solid.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-regular.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-regular.svg" alt="" width="30" height="30"/>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>NoSQL<br/>(MongoDB)</td>
                                                    <td>
                                                        <img src="./assets/star-solid.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-solid.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-solid.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-regular.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-regular.svg" alt="" width="30" height="30"/>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Firebase</td>
                                                    <td>
                                                        <img src="./assets/star-solid.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-solid.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-solid.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-regular.svg" alt="" width="30" height="30"/>
                                                        <img src="./assets/star-regular.svg" alt="" width="30" height="30"/>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                            </Col>
                            {/* <Col s={12} className="hide-on-med-and-up show-on-small center-align">
                                <Button className="btn-contact-now z-depth-0">Contact Now</Button>
                            </Col>
                            <Col s={12} className="hide-on-med-and-up show-on-small center-align mt-10">
                                <Button className="btn-portfolio-now z-depth-0">Portfolio</Button>
                            </Col> */}
                        </Row>
                    </div>
                </div>
                <div className="section grey lighten-5">
                    <div className="row container">
                        <h2 className="header center-align text-orangefox">Lastest Works</h2>
                        <Row>
                            <Col s={12} m={6}>
                                <h5 className="text-orangefox">SHOPPING ONLINE</h5>
                                <Row>
                                    <Col s={12} m={6}>
                                        <MediaBox src="./work/shopping/shopping1.png" caption="SHOPPING ONLINE" width="100%"/>
                                    </Col>
                                    <Col s={12} m={6}>
                                        <MediaBox src="./work/shopping/shopping2.png" caption="SHOPPING ONLINE" width="100%"/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col s={12} m={6}>
                                <h5 className="text-orangefox">CAREER WEBSITE</h5>
                                <Row>
                                    <Col s={12} m={6}>
                                        <MediaBox src="./assets/Frontend-Dev-Jobs.jpg" caption="CAREER WEBSITE" width="100%"/>
                                    </Col>
                                    <Col s={12} m={6}>
                                        <MediaBox src="./assets/Frontend-Dev-Jobs.jpg" caption="CAREER WEBSITE" width="100%"/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col s={12} m={6}>
                                <h5 className="text-orangefox">CONTENT ON STREAMIMG</h5>
                                <Row>
                                    <Col s={12} m={6}>
                                        <MediaBox src="./assets/Frontend-Dev-Jobs.jpg" caption="CONTENT ON STREAMIMG" width="100%"/>
                                    </Col>
                                    <Col s={12} m={6}>
                                        <MediaBox src="./assets/Frontend-Dev-Jobs.jpg" caption="CONTENT ON STREAMIMG" width="100%"/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col s={12} m={6}>
                                <h5 className="text-orangefox">HUMAN RESOURCE MANAGEMENT SYSTEM</h5>
                                <Row>
                                    <Col s={12} m={6}>
                                        <MediaBox src="./assets/Frontend-Dev-Jobs.jpg" caption="HUMAN RESOURCE MANAGEMENT SYSTEM" width="100%"/>
                                    </Col>
                                    <Col s={12} m={6}>
                                        <MediaBox src="./assets/Frontend-Dev-Jobs.jpg" caption="HUMAN RESOURCE MANAGEMENT SYSTEM" width="100%"/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}