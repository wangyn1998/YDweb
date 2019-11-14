import React, { Component } from 'react';
import {NavBar,Carousel,Grid,WhiteSpace,Card} from 'antd-mobile';

const data = [
  {
    data:'3',
    text:'热门品牌'
  },
  {
    data:'4',
    text:'私人搭配师'
  },
  {
    data:'5',
    text:'选购指南'
  },
];
  

export default class Home extends Component {
  state = {
    data: ['1', '2'],
    imgHeight: 176,
  }
  
  componentDidMount() {
      setTimeout(() => {
          this.setState({
              data: ['1', '2'],
          });
      }, 100);
  }
    render() {
        return (
            <div>
              <NavBar
              style={{backgroundColor:'#3fcccb',color:'#fff'}}
              >住吧家居</NavBar>
              <Carousel
              autoplay={true}
              infinite
              beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
              afterChange={index => console.log('slide to', index)}
              >
              {this.state.data.map(val => (
                <a
                key={val}
                href="#"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                  src={'./images/home'+val+'.png'}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                  />
                  </a>
              ))}
              </Carousel>
              <Grid
              style={{margin:'0 auto'}}
              hasLine={false}
                data={data}
                columnNum={3}
                renderItem={(dataItem)  => (
                  <div style={{ padding: '10px'}}>
                    <img src={'./images/home'+ dataItem.data +'.png'} style={{ width: '100%', height: '90%' }} alt="" />
                    <p style={{position:'absolute',top:'40%',left:'35%',color:'white'}}>{dataItem.text}</p>
                  </div>
                )}
              />  
              <WhiteSpace size="lg" />
              <Card full>
                <Card.Header
                  title="热门推荐"
                  thumb={<div style={{background:"#3fcccb",height:'20px',width:'5px'}}></div>}
                />
                <Card.Body>
                  <img src="./images/tuijian.png" style={{width:'100%',padding:'0',margin:'0'}}/>
                  <p style={{marginTop:'-20px',color:'white'}}> 什么是英伦装修风格 英伦风家装 英伦风装修效果图</p>
                </Card.Body>
              </Card>       

            </div>
        )
    }
}
