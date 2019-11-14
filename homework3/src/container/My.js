import React, { Component } from 'react';
import {NavBar} from 'antd-mobile';

export default class My extends Component {
    render() {
        return (
            <div>
               <NavBar
                style={{backgroundColor:'#3fcccb',color:'#fff'}}
                rightContent={[
                    <div className='iconfont icon-setting'></div>
                ]}>
                我的</NavBar>
            </div>
        )
    }
}
