import React, { Component } from 'react'
import { Parallax, Row, Col, Button, Icon, MediaBox } from 'react-materialize'
import {Link} from 'react-router-dom'
import "./IndexPage.css"



export default class IndexPage extends Component {
    componentWillMount() {
        // window.location.href = '#/form/cod/พนักงานหน้าร้าน'
    }

    render() {
        return (
            <div>
                <Parallax imageSrc="./assets/bg-homepage.jpg"/>
                <div className="section white">
                    <div className="row container">
                        <h2 className="header center-align text-redpink">About Me</h2>
                        <Row>
                            <Col s={6} m={3} l={3}>
                                <img src="./assets/coffee.png" alt="" style={{width:"100%"}}/>
                            </Col>
                            <Col s={6} m={9} l={9}>
                                <p className="grey-text text-darken-3 lighten-3 font-25">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
                                <p className="grey-text text-darken-3 lighten-3 font-25 mt-10">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
                                <Button className="btn-contact-now z-depth-0">Contact Now</Button>
                                <Button className="btn-portfolio-now z-depth-0">Portfolio</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col s={4}>
                                <div className="pricing-table">
                                    <div className="pricing-header">
                                        <Icon>event_note</Icon>
                                        <h4>COMMING SOON</h4>
                                    </div>
                                </div>
                            </Col>
                            <Col s={4}>
                                <div className="pricing-table">
                                    <div className="pricing-header">
                                        <Icon>star</Icon>
                                        <h4>COMMING SOON</h4>
                                    </div>
                                </div>
                            </Col>
                            <Col s={4}>
                                <div className="pricing-table">
                                    <div className="pricing-header">
                                        <Icon>whatshot</Icon>
                                        <h4>COMMING SOON</h4>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="section grey lighten-5">
                    <div className="row container">
                        <h2 className="header center-align text-redpink">Lastest Works</h2>
                        <Row>
                            <Col s={6}>
                                <h5 className="text-redpink">SHOPPING ONLINE</h5>
                                <Row>
                                    <Col s={6}>
                                        <MediaBox src="./assets/Frontend-Dev-Jobs.jpg" caption="SHOPPING ONLINE" width="100%"/>
                                    </Col>
                                    <Col s={6}>
                                        <MediaBox src="./assets/Frontend-Dev-Jobs.jpg" caption="SHOPPING ONLINE" width="100%"/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col s={6}>
                                <h5 className="text-redpink">CAREER WEBSITE</h5>
                                <Row>
                                    <Col s={6}>
                                        <MediaBox src="./assets/Frontend-Dev-Jobs.jpg" caption="CAREER WEBSITE" width="100%"/>
                                    </Col>
                                    <Col s={6}>
                                        <MediaBox src="./assets/Frontend-Dev-Jobs.jpg" caption="CAREER WEBSITE" width="100%"/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col s={6}>
                                <h5 className="text-redpink">CONTENT ON STREAMIMG</h5>
                                <Row>
                                    <Col s={6}>
                                        <MediaBox src="./assets/Frontend-Dev-Jobs.jpg" caption="CONTENT ON STREAMIMG" width="100%"/>
                                    </Col>
                                    <Col s={6}>
                                        <MediaBox src="./assets/Frontend-Dev-Jobs.jpg" caption="CONTENT ON STREAMIMG" width="100%"/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col s={6}>
                                <h5 className="text-redpink">HUMAN RESOURCE MANAGEMENT SYSTEM</h5>
                                <Row>
                                    <Col s={6}>
                                        <MediaBox src="./assets/Frontend-Dev-Jobs.jpg" caption="HUMAN RESOURCE MANAGEMENT SYSTEM" width="100%"/>
                                    </Col>
                                    <Col s={6}>
                                        <MediaBox src="./assets/Frontend-Dev-Jobs.jpg" caption="HUMAN RESOURCE MANAGEMENT SYSTEM" width="100%"/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Link to="/"><p className="text-redpink right-align">SEE MORE</p></Link>
                    </div>
                </div>
            </div>
        )
    }
}
