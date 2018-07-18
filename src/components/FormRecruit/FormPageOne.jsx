import React, { Component } from 'react'
import { Row, CardPanel, Input, Autocomplete } from 'react-materialize'


export default class FormPageOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name_eng: "",
            email: "",
            tel: "",
            mobile: "",
            identity_card_no: sessionStorage.cardid,
            expiration: "",
            race: "",
            nationality: "",
            religion: "",
            sex: 0,
            height: 0,
            weight: 0,
            date_of_birth : "",
            age: "",
            line: "",
            facebook: "",
            file_name: "",
            fire_stream: ""
        };
    }

    componentWillMount() {
        
    }

    render() {
        return (
            <CardPanel className="white black-text z-depth-3" style={{marginTop : "0px"}}>
                <Row>
                    <Input m={6} type="text" label="ชื่อ-นามสกุล(English)" validate={true} defaultValue={this.state.name_eng} onChange={e => this.setState({name_eng: e.target.value})}/>
                    <Input m={6} type="email" label="อีเมล(Email)" validate={true} defaultValue={this.state.email} onChange={e => this.setState({email: e.target.value})}/>
                    <Input m={6} type="tel" label="เบอร์โทรศัพท์(Tel)" validate={true} maxLength={10} defaultValue={this.state.tel} onChange={e => this.setState({tel: e.target.value})}/>
                    <Input m={6} type="tel" label="มือถือ(Mobile)" validate={true} maxLength={10} defaultValue={this.state.mobile} onChange={e => this.setState({mobile: e.target.value})}/>
                    <Input m={6} type="text" label="เลขบัตรประชาชน(Identity card no.)" value={this.state.identity_card_no} readOnly={true}/>
                    <Input m={6} type="text" label="บัตรหมดอายุ(Expiration date)" validate={true} defaultValue={this.state.expiration} onChange={e => this.setState({expiration: e.target.value})}/>
                    <Input m={6} type="text" label="เชื้อชาติ(Race)" validate={true} defaultValue={this.state.race} onChange={e => this.setState({race: e.target.value})}/>
                    <Input m={6} type="text" label="สัญชาติ(Nationality)" validate={true} defaultValue={this.state.nationality} onChange={e => this.setState({nationality: e.target.value})}/>
                    <Autocomplete
                        m={6}
                        title='ศาสนา(Religion)'
                        data={{'พุทธ': null,'คริสต์': null,'อิสลาม': null}}
                        defaultValue={this.state.religion} onChange={e => this.setState({religion: e.target.value})}
                    />
                    <Input m={6} type='select' label="เพศ(Gender)" defaultValue={this.state.sex} onChange={e => this.setState({sex: e.target.value})}>
                        <option value='0'>ชาย(Male)</option>
                        <option value='1'>หญิง(Female)</option>
                    </Input>
                    <Input m={6} type="text" label="ส่วนสูง(Height)" validate={true} defaultValue={this.state.height} onChange={e => this.setState({height: e.target.value})}/>
                    <Input m={6} type="text" label="น้ำหนัก(Weight)" validate={true} defaultValue={this.state.weight} onChange={e => this.setState({weight: e.target.value})}/>
                    <Input m={6} type="date" label="วันเกิด(Birthday)" options={{ selectMonths: true,selectYears: 60,today: 'Today',clear: 'Clear',close: 'Ok',closeOnSelect: false, format: 'yyyy-mm-dd',max: 'Today'}} defaultValue={this.state.date_of_birth} onChange={e => this.setState({date_of_birth: e.target.value})}/>
                    <Input m={6} type="text" label="อายุ(Age)" validate={true} defaultValue={this.state.age} onChange={e => this.setState({age: e.target.value})}/>
                    <Input m={6} type="text" label="ไลน์(Line id)" validate={true} defaultValue={this.state.line} onChange={e => this.setState({line: e.target.value})}/>
                    <Input m={6} type="text" label="เฟซบุ๊ก(Facebook)" validate={true} defaultValue={this.state.facebook} onChange={e => this.setState({facebook: e.target.value})}/>
                    <div className="col m6 file-field input-field">
                        <div className="btn" style={{backgroundColor : "#d93" , color : "#fff"}}>
                            <span>เรซูเม่</span>
                            <input type="file" accept="image/*,application/pdf"/>
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text"/>
                        </div>
                    </div>
                    <div className="col m6 file-field input-field">
                        <div className="btn" style={{backgroundColor : "#d93" , color : "#fff"}}>
                            <span>รูปโปรไฟล์</span>
                            <input type="file" accept="image/*"/>
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text"/>
                        </div>
                    </div>
                </Row>
            </CardPanel>
        )
    }
}
