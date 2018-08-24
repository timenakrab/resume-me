import React, { Component } from 'react'
import { Parallax, Row, Col, Button, Icon,  } from 'react-materialize'
import swal from 'sweetalert2'
import "../IndexPage/IndexPage.css"
var $ = require( 'jquery' )


export default class AboutMe extends Component {
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
                                <Row>
                                    <Col s={12} m={6}>
                                        <h4>Personal data</h4>
                                        <p className="font-18"><Icon left>chevron_right</Icon>Nationality : Thai</p>
                                        <p className="font-18"><Icon left>chevron_right</Icon>Height : 178.0 Cm.</p>
                                        <p className="font-18 hide-on-med-and-up show-on-small"><Icon left>chevron_right</Icon>Weight : 98.0 Kg.</p>
                                        <p className="font-18 hide-on-med-and-up show-on-small"><Icon left>chevron_right</Icon>Birth Date : Aug 26, 1992</p>
                                    </Col>
                                    <Col s={12} m={6} className="hide-on-small-only">
                                        <h4>&nbsp;</h4>
                                        <p className="font-18"><Icon left>chevron_right</Icon>Weight : 98.0 Kg.</p>
                                        <p className="font-18"><Icon left>chevron_right</Icon>Birth Date : Aug 26, 1992</p>
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
                    </div>
                </div>
            </div>
        )
    }
}
