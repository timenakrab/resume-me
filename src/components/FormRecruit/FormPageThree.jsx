import React, { Component } from 'react'
import { Row, Col, CardPanel, Input, Button } from 'react-materialize'
import * as province from './province.json';


export default class FormPageThree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "",
            moo: "",
            road: "",
            district: "",
            amphur: "",
            province: "กรุงเทพมหานคร",
            post_code: "",
            chk1: "",
            chk2: "",
            chk3: "",
            chk4: "",
        };
    }

    RenderProvince() {
        const arr = [];
        for (var i=0 ; i<province.length; i++) {
            arr.push(
                <option value={province[i].province_name} key={"proveince"+i}>{province[i].province_name}</option>
            )
        }
        return arr;
    }

    GetLiveRadio(e) {
        if(e.target.value === "live_with_parent"){
            if(e.target.checked){
                this.setState({chk1: "",chk2: "disabled",chk3: "disabled",chk4: "disabled"})
            }else{
                this.setState({chk1: "",chk2: "",chk3: "",chk4: ""})
            }
        }else if(e.target.value === "owner_home"){
            if(e.target.checked){
                this.setState({chk1: "disabled",chk2: "",chk3: "disabled",chk4: "disabled"})
            }else{
                this.setState({chk1: "",chk2: "",chk3: "",chk4: ""})
            }
        }else if(e.target.value === "hired_house"){
            if(e.target.checked){
                this.setState({chk1: "disabled",chk2: "disabled",chk3: "",chk4: "disabled"})
            }else{
                this.setState({chk1: "",chk2: "",chk3: "",chk4: ""})
            }
        }else if(e.target.value === "hiredflat"){
            if(e.target.checked){
                this.setState({chk1: "disabled",chk2: "disabled",chk3: "disabled",chk4: ""})
            }else{
                this.setState({chk1: "",chk2: "",chk3: "",chk4: ""})
            }
        }
    }



    render() {
        return (
            <CardPanel className="white black-text z-depth-3" style={{marginTop : "0px"}}>
                <Row>
                    <Input m={3} name='group1' className="live_with_parent" type='checkbox' value='live_with_parent' label='อาศัยอยุ่กับครอบครัว(live with parent)' onChange={this.GetLiveRadio.bind(this)} disabled={this.state.chk1}/>
                    <Input m={3} name='group1' className="owner_home" type='checkbox' value='owner_home' label='บ้านตัวเอง(owner home)' onChange={this.GetLiveRadio.bind(this)} disabled={this.state.chk2}/>
                    <Input m={3} name='group1' className="hired_house" type='checkbox' value='hired_house' label='บ้านเช่า(hired house)' onChange={this.GetLiveRadio.bind(this)} disabled={this.state.chk3}/>
                    <Input m={3} name='group1' className="hiredflat" type='checkbox' value='hiredflat' label='หอพัก(hiredflat)' onChange={this.GetLiveRadio.bind(this)} disabled={this.state.chk4}/>
                </Row>
                <Row>
                    <Input m={12} type="text" label="ที่อยู่ปัจจุบันเลขที่(Present address)" validate={true} defaultValue={this.state.address} onChange={e => this.setState({address: e.target.value})}/>
                    <Input m={6} type="text" label="หมู่(Moo)" validate={true} defaultValue={this.state.moo} onChange={e => this.setState({moo: e.target.value})}/>
                    <Input m={6} type="text" label="ถนน(Road)" validate={true} defaultValue={this.state.road} onChange={e => this.setState({road: e.target.value})}/>
                    <Input m={6} type="text" label="ตำบล/แขวง(District)" validate={true} defaultValue={this.state.district} onChange={e => this.setState({district: e.target.value})}/>
                    <Input m={6} type="text" label="อำเภอ(Amphur)" validate={true} defaultValue={this.state.amphur} onChange={e => this.setState({amphur: e.target.value})}/>
                    <Input m={6} type='select' label="จังหวัด(Province)" defaultValue={this.state.province} onChange={e => this.setState({province: e.target.value})}>
                        { this.RenderProvince() }
                    </Input>
                    <Input m={6} type="text" label="รหัสไปรษณีย์(Post code)" validate={true} defaultValue={this.state.post_code} onChange={e => this.setState({post_code: e.target.value})}/>
                    <Col s={12} style={{marginBottom : "10px" , textAlign : "center"}}>
                        <Button waves='light' large className='orange' style={{fontFamily : "supermarket" , fontSize: "1.5em"}}>ส่งใบสมัคร</Button>
                    </Col>
                </Row>
            </CardPanel>
        )
    }
}
