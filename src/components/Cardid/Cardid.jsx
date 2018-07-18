import React, { Component } from 'react'
import { Row, Col, Input , Button } from 'react-materialize'
import './Cardid.css'
import axios from 'axios'
import swal from 'sweetalert2'
// import qs from 'query-string'

axios.defaults.baseURL = 'https://codhrmapi.kratos.co.th/';
axios.defaults.headers.common['Authorization'] = "Basic "+btoa('anonymous:anonymous');
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default class Cardid extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cardid: ""
        };
    }

    componentDidMount() {
        var company = this.props.match.params.company;
        var job = decodeURI(this.props.match.params.job);
        // var job = qs.parse(this.props.location.search).job
        // job = decodeURI(job)
        sessionStorage.setItem("company" , company);
        sessionStorage.setItem("job" , job);
        sessionStorage.setItem("new_from" , true)
    }

    _handleKeyPress(e) {
        if (e.key === 'Enter') {
            if(this.state.cardid !== ""){
                this.checkCardId();
            }
        }
    }

    checkCardId() {
        sessionStorage.setItem("cardid" , this.state.cardid);
        swal({
            type: 'warning',
            title: 'โปรดรอสักครู่',
            showConfirmButton: false,
            allowOutsideClick: false
        })

        axios.get('api/recruit/public/applyjob/'+this.state.cardid)
        .then((res) => {
            if(res.data.Message === "Not find job in id_card."){
                swal({
                    type: 'success',
                    title: 'ไม่มีบัตรประชาชนนี้ในระบบ',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    window.location.href = "#/form-recruit"
                });
            }else{
                swal({
                    type: 'success',
                    title: 'มีบัตรประชาชนนี้ในระบบ',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
        .catch((error) => {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
            console.log(error.config);
        });
    }

    render() {
        return (
            <Row style={{marginBottom : "0px"}}>
                <Col s={12} l={6}>
                    <h4 style={{fontFamily : "supermarket"}}>ร่วมงานกับ</h4>
                    <h1 style={{fontFamily : "supermarket" , color : "#d09133" , fontSize : "55px" , marginBottom : "40px"}}>กลุ่มบริษัท กัสตรอนอมเม่อ</h1>
                    <h4 style={{fontFamily : "supermarket"}}>ตรวจสอบการสมัครงาน</h4>
                    <h4 style={{fontFamily : "supermarket"}}>กรอกใบสมัครได้ที่นี่</h4>
                    <Col s={12} l={10}>
                        <Row className="search-cardid">
                            <Input className="input-search-cardid" placeholder="บัตรประชาชน / Card ID" s={12} maxLength={13} onKeyPress={this._handleKeyPress.bind(this)} onChange={e => this.setState({cardid: e.target.value})}/>
                        </Row>
                    </Col>
                    <Col s={12} m={2} className="hide-on-med-and-down">
                        <Button id="btn-search-cardid" floating large className='gold' waves='light' icon='search' style={{width : "90px" , height : "90px"}} onClick={this.checkCardId.bind(this)}/>
                    </Col>
                    <Col s={12} className="show-on-small show-on-medium hide-on-med-and-up" style={{marginBottom : "10px" , textAlign : "center"}}>
                        <Button waves='light' large className='gold' style={{fontFamily : "supermarket" , fontSize: "1.5em"}} onClick={this.checkCardId.bind(this)}>ตรวจสอบ</Button>
                    </Col>
                </Col>
                <Col s={12} m={6} className="hide-on-med-and-down" style={{ overflow : "hidden" , paddingLeft : "0px" , paddingRight : "0px"}}>
                    <img alt="Recruit,career,cod" src="./assets/bg-career.jpg" style={{width : "100%"}}/>
                </Col>
            </Row>
        )
    }
}
