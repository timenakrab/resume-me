import React, { Component } from 'react'
import { Parallax, Row, Col, Button } from 'react-materialize'
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
                                <img src="./assets/coffee.png" style={{width:"100%"}}/>
                            </Col>
                            <Col s={6} m={9} l={9}>
                                <p className="grey-text text-darken-3 lighten-3 font-25">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
                                <p className="grey-text text-darken-3 lighten-3 font-25 mt-10">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
                                <Button className="btn-contact-now z-depth-0">Contact Now</Button>
                                <Button className="btn-portfolio-now z-depth-0">Portfolio</Button>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            // <Row>
            //     <Col s={12}>
            //         <Row>
                        
            //         </Row>
            //     </Col>
            // </Row>
        )
    }
}
