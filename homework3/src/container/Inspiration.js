import React, { Component } from 'react';
import {NavBar,Icon,Grid,Tabs} from 'antd-mobile';

const tabs = [
    { title:'推荐' },
    { title:'冬季' },
    { title:'宜家'},
    { title:'小清新' },
    { title:'小户型' },
    { title:'个性色彩'},
  ];

const data = [
    {
      data:'1',
      text:'桔色律动',
    },
    {
      data:'2',
      text:'儿童房'
    },
    {
      data:'3',
      text:'翻滚吧，地毯君'
    },
    {
        data:'4',
        text:'角落的瞎想'
      },
  ];
export default class Inspiration extends Component {
    render() {
        return (
            <div>
                <NavBar
                style={{backgroundColor:'#3fcccb',color:'#fff'}}
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />
                ]}
                >灵感</NavBar>
                <Tabs tabs={tabs}
                initialPage={0}
                onChange={(tab, index) => { console.log('onChange', index, tab); }}
                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                <div >
                <Grid
                style={{margin:'0 auto'}}
                hasLine={false}
                    data={data}
                    columnNum={2}
                    renderItem={(dataItem)  => (
                    <div style={{ padding: '10px',width:'100%',height:'100%'}}>
                        <img src={'./images/inspiration'+ dataItem.data +'.png'} style={{ width: '100%', height: '90%' }} alt="" />
                        <div>
                            <img src={'./images/p'+ dataItem.data +'.png'} style={{ width: '10%', height: '10%',float:'left' }} alt="" />
                            <span style={{float:'left',marginLeft:'10%',marginTop:'5%'}}>{dataItem.text}</span>
                            <span className="iconfont icon-love" style={{color:'red'}}></span>
                        </div>
                    </div>
                    )}
                />  
                </div>
                <div style={{ height: '150px'}}>
                    冬季
                </div>
                <div style={{height: '150px'}}>
                    宜家
                </div>
                <div style={{height: '150px'}}>
                    小清新
                </div>
                <div style={{height: '150px'}}>
                    小户型
                </div>
                <div style={{height: '150px'}}>
                    个性色彩
                </div>
                
                </Tabs>
                 
            </div>
        )
    }
}
