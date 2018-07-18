import React, { Component } from 'react'
import { Row, Col, Input } from 'react-materialize'
import './UpdateRecruit.css'
import NavbarUpdateRecruit from '../Navbar/NavbarUpdateRecruit'
// var $ = require( 'jquery' )

export default class UpdateRecruit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rec_date: "",
            name_th: "",
            position: sessionStorage.job,
            salary: "",
            jobno: "daa2a7a8210f4d1da8d3f",
        };
    }

    componentDidMount() {
        var date = new Date();
        var d = date.getDate() , m = date.getMonth()+1 , y = date.getFullYear();
        d = (d < 10) ? d = "0"+d : d ;
        m = (m < 10) ? m = "0"+m : m ;
        this.setState({rec_date : y+"-"+m+"-"+d});
    }

    componentWillMount() {
        if(sessionStorage.new_from === "true"){
            sessionStorage.setItem("new_from" , "false")
            window.location.reload();
        }
        // $('#birthday').pickadate({ selectMonths: true,selectYears: 60,today: 'Today',clear: 'Clear',close: 'Ok',closeOnSelect: false, format: 'dd-mm-yyyy',max: 'Today'});
    }

    render() {
        return (
            <div>
                <NavbarUpdateRecruit page={1} />
                <Row style={{marginTop : "-20px"}}>
                    <Col s={12} m={12} l={10} offset="l1" className="white black-text z-depth-3 radius-5">
                        <h3 className="center-align">กลุ่มบริษัทกัสตรอนอมเม่อ</h3>
                        <h4 className="center-align">GASTRONOME GROUP</h4>
                    </Col>
                </Row>
                
            </div>
        )
    }
}
