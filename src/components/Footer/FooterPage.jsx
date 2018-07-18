import React, { Component } from 'react'
import { Footer } from 'react-materialize'

export default class FooterPage extends Component {
    render() {
        return (
            <div>
                <style>
                    {`
                        footer {
                            font-family: supermarket;
                        }
                    `}
                </style>
                <Footer 
                    copyrights="All rights reserved timenakrab, 2018"
                    moreLinks = {
                        <a className="grey-text text-lighten-4 right" target="_blank" href="https://web.facebook.com/timenakrab">FACEBOOK</a>
                    }
                    // links={
                    //     <ul>
                    //         <li><a className="grey-text text-lighten-3" href="tel:+66846265206" style={{fontSize : "20px"}}><i className="material-icons">phone_in_talk</i> : 0846265206</a></li>
                    //         <li><a className="grey-text text-lighten-3" href="tel:+66846265206" style={{fontSize : "20px"}}><i className="material-icons">print</i> : 0846265206</a></li>
                    //         <li><a className="grey-text text-lighten-3" href="mailto:timenakrab@gmail.com" style={{fontSize : "20px"}}><i className="material-icons">mail</i> : timenakrab@gmail.com</a></li>
                    //     </ul>
                    // }
                    className='example'
                    style={{backgroundColor : "#ff5253"}}
                >
                    <h5 className="white-text">Contact Us / ติดต่อเรา</h5>
                    {/* <p className="grey-text text-lighten-4" style={{fontSize : "20px"}}>968 อาคารอื้อจื่อเหลียง ชั้น 5 ถ.พระราม 4 แขวงสีลม เขตบางรัก กรุงเทพฯ 10500</p> */}
                    <ul>
                        <li><a className="grey-text text-lighten-3" href="tel:+66846265206" style={{fontSize : "20px"}}><i className="material-icons">phone_in_talk</i> : 0846265206</a></li>
                        <li><a className="grey-text text-lighten-3" href="mailto:timenakrab@gmail.com" style={{fontSize : "20px"}}><i className="material-icons">mail</i> : timenakrab@gmail.com</a></li>
                    </ul>

                </Footer>
            </div>
        )
    }
}
