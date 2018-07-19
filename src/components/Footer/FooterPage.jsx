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
                    // moreLinks = {
                    //     <a className="grey-text text-lighten-4 right" target="_blank" href="https://web.facebook.com/timenakrab">FACEBOOK</a>
                    // }
                    links={
                        <div>
                            <h5 className="white-text">Social</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" target="_blank" rel="noopener noreferrer" href="https://web.facebook.com/timenakrab" style={{fontSize : "20px"}}>FACEBOOK : timenakrab</a></li>
                                <li><a className="grey-text text-lighten-3" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/streetboytime/" style={{fontSize : "20px"}}>INSTAGRAM : @streetboytime</a></li>
                                <li><a className="grey-text text-lighten-3" target="_blank" rel="noopener noreferrer" href="https://github.com/timenakrab" style={{fontSize : "20px"}}>GITHUB : timenakrab</a></li>
                            </ul>
                        </div>
                    }
                    className='example'
                    style={{backgroundColor : "#ff5253"}}
                >
                    <h5 className="white-text">Contact</h5>
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
