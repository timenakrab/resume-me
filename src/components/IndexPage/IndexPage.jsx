import React, { Component } from 'react'
import { Parallax, Row, Col, Button, Icon, MediaBox } from 'react-materialize'
import swal from 'sweetalert2'
import {Link} from 'react-router-dom'
import "./IndexPage.css"
var $ = require( 'jquery' )


export default class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parallax_me_img : ""
        };
    }

    CommingSoon() {
        swal({
            type: 'info',
            title: 'Comming soon.',
            text: 'be under develop.',
            showConfirmButton: false,
            timer: 2000,
            animation: false,
            customClass: 'animated tada'
        })
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

    componentWillMount() {
        // window.location.href = '#/form/cod/พนักงานหน้าร้าน'
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
                                <img src="./assets/profile.png" alt="" style={{width:"100%"}}/>
                            </Col>
                            <Col s={12} m={9} l={10} className="xl10">
                                {/* <p className="grey-text text-darken-3 lighten-3 font-25">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p> */}
                                <p className="grey-text text-darken-3 lighten-3 font-25 mt-10">Hi, I'm Watchara Hongkim. I have 2.5 years of experience in web developer and front-end developer. I like to work in team and contact to other people.</p>
                                <blockquote>No matter what happens, life must go on.</blockquote>
                                <Button className="btn-contact-now z-depth-0 hide-on-small-only" onClick={() => window.scrollTo(0,document.querySelector("body").scrollHeight)}>Contact Now</Button>
                                <Button className="btn-portfolio-now z-depth-0 hide-on-small-only" onClick={() => window.location.href="#/portfolio"}>Portfolio</Button>
                            </Col>
                            <Col s={12} className="hide-on-med-and-up show-on-small center-align">
                                <Button className="btn-contact-now z-depth-0" onClick={() => window.scrollTo(0,document.querySelector("body").scrollHeight)}>Contact Now</Button>
                            </Col>
                            <Col s={12} className="hide-on-med-and-up show-on-small center-align mt-10">
                                <Button className="btn-portfolio-now z-depth-0" onClick={() => window.location.href="#/portfolio"}>Portfolio</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col m={2} className="hide-on-small-only"></Col>
                            <Col s={12} m={4}>
                                <div className="pricing-table">
                                    <div className="pricing-header">
                                        <Icon>event_note</Icon>
                                        <div className="mb-10">
                                            <a className="font-21 text-orangefox" rel="noopener noreferrer" href="https://claim.mentagram.com" target="_blank">
                                                Mentagram claim website
                                            </a>
                                        </div>
                                        {/* <div className="mb-10">
                                            <a className="font-21 text-orangefox" rel="noopener noreferrer" href="http://www.mentagram.com/home/" target="_blank">
                                                Authencation on mentagram website
                                            </a>
                                        </div> */}
                                        <div className="mb-10">
                                            <a className="font-21 text-orangefox" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCaZpyuqNhG36pEadOHYEWPA/videos" target="_blank">
                                                Content on streaming (CLUBRACE THAILAND)
                                            </a>
                                        </div>
                                        <div className="mb-10">
                                            <a className="font-21 text-orangefox" rel="noopener noreferrer" onClick={this.CommingSoon} target="_blank">
                                                Career website
                                            </a>
                                        </div>
                                        <div className="mb-10">
                                            <a className="font-21 text-orangefox" rel="noopener noreferrer" onClick={this.CommingSoon} target="_blank">
                                                Humun Resource Management System
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col s={12} m={4}>
                                <div className="pricing-table">
                                    <div className="pricing-header">
                                        <Icon>whatshot</Icon>
                                        <div className="mb-10">
                                            <a className="font-21 text-orangefox" rel="noopener noreferrer" href="http://buy.in.th" target="_blank">
                                                Shopping online (E-SARN OTOP)
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            {/* <Col s={12} m={4}>
                                <div className="pricing-table">
                                    <div className="pricing-header">
                                        <Icon>whatshot</Icon>
                                        <h4>COMMING SOON</h4>
                                    </div>
                                </div>
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
                                        <MediaBox src="./work/recruit/recruit1.jpg" caption="CAREER WEBSITE" width="100%"/>
                                    </Col>
                                    <Col s={12} m={6}>
                                        <MediaBox src="./work/recruit/recruit2.jpg" caption="CAREER WEBSITE" width="100%"/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col s={12} m={6}>
                                <h5 className="text-orangefox">CONTENT ON STREAMIMG</h5>
                                <Row>
                                    <Col s={12} m={6}>
                                        <MediaBox src="./work/clubrace/clubrace1.jpg" caption="CONTENT ON STREAMIMG" width="100%"/>
                                    </Col>
                                    <Col s={12} m={6}>
                                        <MediaBox src="./work/clubrace/clubrace2.jpg" caption="CONTENT ON STREAMIMG" width="100%"/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col s={12} m={6}>
                                <h5 className="text-orangefox">HUMAN RESOURCE MANAGEMENT SYSTEM</h5>
                                <Row>
                                    <Col s={12} m={6}>
                                        <MediaBox src="./work/hrm/hrm1.jpg" caption="HUMAN RESOURCE MANAGEMENT SYSTEM" width="100%"/>
                                    </Col>
                                    <Col s={12} m={6}>
                                        <MediaBox src="./work/hrm/hrm2.jpg" caption="HUMAN RESOURCE MANAGEMENT SYSTEM" width="100%"/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Link to="/portfolio"><p className="text-orangefox right-align">SEE MORE</p></Link>
                    </div>
                </div>
            </div>
        )
    }
}
