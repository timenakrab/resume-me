import React, { Component } from 'react'
import { Row, Col, CardPanel, Table, Input, Button, Modal } from 'react-materialize'
const { $ } = window;
var all_education = [];
var all_work = [];


export default class FormPageTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eductions: [],
            works: [],
            // --------------------------- //
            modal_level: "",
            modal_institute: "",
            modal_major: "",
            modal_start: "",
            modal_end: "",
            // --------------------------- //
            work_position: "",
            work_detail: "",
            work_reason_exit: "",
            work_salary: "",
            work_place: "",
            work_start: "",
            work_end: ""
        };
    }

    componentDidMount(){
        
    }

    GetLevel(e) {
        this.setState({modal_level : e.target.value})
    }

    delEdu(e) {
        var index = e.currentTarget.getAttribute('index');
        all_education[index] = undefined;
        this.setState({eductions : all_education})
    }

    delWork(e) {
        var index = e.currentTarget.getAttribute('index');
        all_work[index] = undefined;
        this.setState({works : all_work})
    }

    RenderEducation(data) {
        const edu = []
        var item = data;
        if(item.length !== 0){
            for(var i=0; i<item.length; i++){
                if(item[i] !== undefined){
                    edu.push(
                        <tr style={{backgroundColor:"#eaeaea"}} key={i}>
                            <td>{this.GetEduWithValue(item[i].level)}</td>
                            <td>{item[i].institution}</td>
                            <td>{item[i].major}</td>
                            <td>{item[i].from}</td>
                            <td>{item[i].to}</td>
                            <td>
                                <Button floating className='red' waves='light' icon='clear' index={i} onClick={this.delEdu.bind(this)}/>
                            </td>
                        </tr>
                    )
                }
            }
        }
        return edu
    }

    RenderWork(data) {
        const work = []
        var item = data;
        if(item.length !== 0){
            for(var i=0; i<item.length; i++){
                if(item[i] !== undefined){
                    work.push(
                        <tr style={{backgroundColor:"#eaeaea"}} key={i}>
                            <td>{item[i].company}</td>
                            <td>{item[i].from}</td>
                            <td>{item[i].to}</td>
                            <td>{item[i].position}</td>
                            <td>{item[i].job_desscription}</td>
                            <td>{item[i].salary}</td>
                            <td>{item[i].reasons_of_resignation}</td>
                            <td>
                                <Button floating className='red' waves='light' icon='clear' index={i} onClick={this.delWork.bind(this)}/>
                            </td>
                        </tr>
                    )
                }
            }
        }
        return work
    }

    GetEduWithValue(val) {
        var v = parseInt(val,10);
        var edu_arr = ["ประถมศึกษา(Primary School)" , "มัธยมศึกษาตอนต้น(Secondary School)" , "มัธยมศึกษาตอนปลาย(High School)" , "พาณิชยการ/อาชีวะ(Vacation School)" , "วิทยาลัย/อนุปริญญา(College)" , "ปริญญาตรี(Bachelor Degree)" , "ปริญญาโท(Master Degree)" , "อื่นๆ(Others)"]
        return edu_arr[v];
    }

    SaveEdu2Table() {
        if(this.state.modal_level !== "" && this.state.modal_institute !== "" && this.state.modal_major !== "" && this.state.modal_start !== "" && this.state.modal_end !== ""){
            var data = {
                level: this.state.modal_level,
                institution: this.state.modal_institute,
                major: this.state.modal_major,
                from: this.state.modal_start,
                to: this.state.modal_end,
                other: ""
            }
            all_education.push(data)
            this.setState({eductions : all_education})
            this.setState({
                modal_institute: "",
                modal_major: "",
            })
            $(".modal").modal('close')
        }
    }

    SaveWork2Table() {
        if(this.state.work_position !== "" && this.state.work_detail !== "" && this.state.work_reason_exit !== "" && this.state.work_salary !== "" && this.state.work_place !== "" && this.state.work_start !== "" && this.state.work_end !== ""){
            var data = {
                company: this.state.work_place,
                from: this.state.work_start,
                to: this.state.work_end,
                position: this.state.work_position,
                job_desscription: this.state.work_detail,
                salary: Number(this.state.work_salary),
                reasons_of_resignation: this.state.work_reason_exit
            }
            all_work.push(data)
            this.setState({works : all_work})
            this.setState({
                work_position: "",
                work_detail: "",
                work_reason_exit: "",
                work_salary: "",
                work_place: "",
            })
            $(".modal").modal('close')
        }
    }

    render() {
        return (
            <CardPanel className="white black-text z-depth-3" style={{marginTop : "0px"}}>
                <Row>
                    <Col m={8}>
                        <h5 style={{fontFamily : "supermarket"}}>การศึกษา (Education)</h5>
                    </Col>
                    <Col m={4}>
                        <Modal
                            trigger={<Button style={{marginTop : "17.1px" , float : "right"}}>เพิ่ม</Button>}>
                            <h4 style={{fontFamily : "supermarket"}}>การศึกษา(Education)</h4>
                            <Row>
                                <Input m={6} type='select' label="ระดับการศึกษา(Level of education)" defaultValue={this.state.modal_level} onChange={this.GetLevel.bind(this)}>
                                    <option value="">โปรดระบุ</option>
                                    <option value="0">ประถมศึกษา(Primary School)</option>
                                    <option value="1">มัธยมศึกษาตอนต้น(Secondary School)</option>
                                    <option value="2">มัธยมศึกษาตอนปลาย(High School)</option>
                                    <option value="3">พาณิชยการ/อาชีวะ(Vacation School)</option>
                                    <option value="4">วิทยาลัย/อนุปริญญา(College)</option>
                                    <option value="5">ปริญญาตรี(Bachelor Degree)</option>
                                    <option value="6">ปริญญาโท(Master Degree)</option>
                                    <option value="7">อื่นๆ(Others)</option>
                                </Input>
                                <Input m={6} type="text" label="สถาบันการศึกษา(Institute)" validate={true} value={this.state.modal_institute}  onChange={e => this.setState({modal_institute: e.target.value})}/>
                                <Input m={12} type="text" label="สาขาวิชา(Major)" validate={true} value={this.state.modal_major}  onChange={e => this.setState({modal_major: e.target.value})}/>
                                <Input m={6} type='date' label="ตั้งแต่(Start)" options={{ selectMonths: true,selectYears: 60,today: 'Today',clear: 'Clear',close: 'Ok',closeOnSelect: false, format: 'yyyy-mm-dd',max: 'Today'}} onChange={ (e, value) => { this.setState({modal_start: value}) } } />
                                <Input m={6} type='date' label="จนถึง(End)" options={{ selectMonths: true,selectYears: 60,today: 'Today',clear: 'Clear',close: 'Ok',closeOnSelect: false, format: 'yyyy-mm-dd',max: 'Today'}} onChange={ (e, value) => { this.setState({modal_end: value}) } } />
                                <div m={12} style={{textAlign : "center"}}>
                                    <Button waves='light' className='grey modal-close'>ยกเลิก</Button>
                                    &nbsp;&nbsp;
                                    <Button waves='light' className='green' onClick={this.SaveEdu2Table.bind(this)}>บันทึก</Button>
                                </div>
                            </Row>
                        </Modal>
                    </Col>
                </Row>
                <Row>
                    <Col m={12}>
                        <Table centered>
                            <thead>
                                <tr className="bg-gold">
                                    <th data-field="level_education" style={{borderTopLeftRadius : "10px"}}>ระดับการศึกษา</th>
                                    <th data-field="institute_education">สถาบันการศึกษา</th>
                                    <th data-field="major_education">สาขาวิชา</th>
                                    <th data-field="start_education">ตั้งแต่</th>
                                    <th data-field="end_education">ถึง</th>
                                    <th data-field="delete_education" style={{borderTopRightRadius : "10px"}}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.RenderEducation(this.state.eductions)}
                            </tbody>
                        </Table>
                    </Col>
                </Row>

                <Row>
                    <Col m={8}><h5 style={{fontFamily : "supermarket"}}>งานที่ผ่านมา (Working Experience In Chronlogical)</h5></Col>
                    <Col m={4}>
                        <Modal
                            trigger={<Button style={{marginTop : "17.1px" , float : "right"}}>เพิ่ม</Button>}>
                            <h4 style={{fontFamily : "supermarket"}}>งานที่ผ่านมา (Working Experience In Chronlogical)</h4>
                            <Row>
                                <Input m={12} type="text" label="ตำแหน่ง(Position)" validate={true} value={this.state.work_position}  onChange={e => this.setState({work_position: e.target.value})}/>
                                <Input m={12} type="text" label="ลักษณะงาน(Detail for work)" validate={true} value={this.state.work_detail}  onChange={e => this.setState({work_detail: e.target.value})}/>
                                <Input m={12} type="text" label="เหตุผลที่ออกจากงาน(Reason for resign)" validate={true} value={this.state.work_reason_exit}  onChange={e => this.setState({work_reason_exit: e.target.value})}/>
                                <Input m={6} type="text" label="ค่าจ้าง(Salary)" validate={true} value={this.state.work_salary}  onChange={e => this.setState({work_salary: e.target.value})}/>
                                <Input m={6} type="text" label="สถานที่ทำงาน(Workplace)" validate={true} value={this.state.work_place}  onChange={e => this.setState({work_place: e.target.value})}/>
                                <Input m={6} type='date' label="ตั้งแต่(Start)" options={{ selectMonths: true,selectYears: 60,today: 'Today',clear: 'Clear',close: 'Ok',closeOnSelect: false, format: 'yyyy-mm-dd',max: 'Today'}} onChange={ (e, value) => { this.setState({work_start: value}) } } />
                                <Input m={6} type='date' label="จนถึง(End)" options={{ selectMonths: true,selectYears: 60,today: 'Today',clear: 'Clear',close: 'Ok',closeOnSelect: false, format: 'yyyy-mm-dd',max: 'Today'}} onChange={ (e, value) => { this.setState({work_end: value}) } } />
                                <div m={12} style={{textAlign : "center"}}>
                                    <Button waves='light' className='grey modal-close'>ยกเลิก</Button>
                                    &nbsp;&nbsp;
                                    <Button waves='light' className='green' onClick={this.SaveWork2Table.bind(this)}>บันทึก</Button>
                                </div>
                            </Row>
                        </Modal>
                    </Col>
                </Row>
                <Row>
                    <Col m={12}>
                        <Table centered>
                            <thead>
                                <tr className="bg-gold">
                                    <th data-field="place_work" style={{borderTopLeftRadius : "10px"}}>สถานที่ทำงาน</th>
                                    <th data-field="start_work">เริ่ม</th>
                                    <th data-field="end_work">ถึง</th>
                                    <th data-field="position_work">ตำแหน่งงาน</th>
                                    <th data-field="detail_work">ลักษณะงาน</th>
                                    <th data-field="money_work">ค่าจ้าง</th>
                                    <th data-field="reasonexit_work">เหตุที่ออก</th>
                                    <th data-field="delete_work" style={{borderTopRightRadius : "10px"}}></th>

                                </tr>
                            </thead>
                            <tbody>
                                { this.RenderWork(this.state.works) }
                                {/* <tr>
                                    <td>Alvin</td>
                                    <td>Eclair</td>
                                    <td>$0.87</td>
                                    <td>$0.87</td>
                                    <td>$0.87</td>
                                    <td>$0.87</td>
                                    <td>$0.87</td>
                                    <td>
                                        <Button floating className='red' waves='light' icon='clear' />
                                    </td>
                                </tr> */}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </CardPanel>
        )
    }
}
