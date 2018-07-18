import React, { Component } from 'react'
import { Row, Col, CardPanel, Input, Tabs, Tab, Collapsible, CollapsibleItem } from 'react-materialize'
import './FormRecruit.css'
import NavbarRecruit from '../Navbar/NavbarRecruit'
import FormPageOne from './FormPageOne'
import FormPageTwo from './FormPageTwo'
import FormPageThree from './FormPageThree'
// var $ = require( 'jquery' )

export default class FormRecruit extends Component {

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
                <NavbarRecruit/>
                <Row>
                    <Col s={12} m={12} l={8} offset="l2">
                        <CardPanel className="white black-text z-depth-3">
                            <Row>
                                <Input type="text" s={12} m={6} placeholder="วันที่สมัคร" label="วันที่สมัคร" defaultValue={this.state.rec_date} value={this.state.rec_date} readOnly={true}/>
                                <Input type="text" s={12} m={6} placeholder="ชื่อ-นามสกุล(ภาษาไทย)" label="ชื่อ-นามสกุล(ภาษาไทย)" defaultValue={this.state.name_th} onChange={e => this.setState({name: e.target.value})}/>
                                <Input type="text" s={12} m={6} placeholder="ตำแหน่งที่สมัคร" label="ตำแหน่งที่สมัคร" defaultValue={this.state.position} readOnly={true}/>
                                <Input type="number" s={12} m={6} placeholder="เงินเดือนที่คาดหวัง" label="เงินเดือนที่คาดหวัง" defaultValue={this.state.salary} onChange={e => this.setState({salary: e.target.value})} min={0}/>
                            </Row>
                        </CardPanel>
                    </Col>
                </Row>

                <Row className="hide-on-med-and-down show-on-large">
                    <Col l={8} offset="l2" style={{padding : "0px"}}>
                        <Tabs className='tab-data z-depth-1 tabs-fixed-width'>
                            <Tab title="1.ข้อมูลส่วนบุคคล" active>
                                <FormPageOne/>
                            </Tab>
                            <Tab title="2.ประวัติการทำงาน/การศึกษา">
                                <FormPageTwo/>
                            </Tab>
                            <Tab title="3.ที่อยู่อาศัย">
                                <FormPageThree/>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>


                <Row className="show-on-medium-and-down hide-on-large-only">
                    <Col s={12} m={12}>
                        <Collapsible accordion defaultActiveKey={0}>
                            <CollapsibleItem header='ข้อมูลส่วนบุคคล' icon='filter_1'>
                            ข้อมูลส่วนบุคคล
                            </CollapsibleItem>
                            <CollapsibleItem header='ประวัติการทำงาน/การศึกษา' icon='filter_2'>
                            ประวัติการทำงาน/การศึกษา
                            </CollapsibleItem>
                            <CollapsibleItem header='ที่อยู่อาศัย' icon='filter_3'>
                            ที่อยู่อาศัย
                            </CollapsibleItem>
                        </Collapsible>
                    </Col>
                </Row>

                
            </div>
        )
    }
}
