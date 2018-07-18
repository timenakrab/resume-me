import React, { Component } from 'react'
import { Parallax, Row, Col, Card, CardTitle, Icon, } from 'react-materialize'
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
                    <h2 className="header">Parallax</h2>
                    <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
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
