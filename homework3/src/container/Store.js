import React, { Component } from 'react';
import {NavBar,Carousel,Grid,SearchBar} from 'antd-mobile';

const dt = [
    {
        data:'1',
        text:'Top Art Studio 欧式风格精细…',
        price:'￥39.95'
    },
    {
        data:'2',
        text:'顺顺工艺欧式风格塑料外框黑…',
        price:'￥89.95'
    }
]
const data = [
    {
      src:'iconfont icon-yuanzhuo',
      color:'#fd417b',
      data:'桌'
    },
    {
      src:'iconfont icon-bed',
      color:'#4ecdfe',
      data:'床'
    },
    {
        src:'iconfont icon-yizi',
        color:'#fda634',
        data:'椅'
    },
    {
        src:'iconfont icon-chaji',
        color:'#64cdcc',
        data:'几'
    },
    {
        src:'iconfont icon-iconset0499',
        color:'#fc3230',
        data:'柜'
    },
    {
        src:'iconfont icon-shujia',
        color:'#3d3df7',
        data:'书架'
    },
    {
        src:'iconfont icon-tubiaoCSban-',
        color:'#c459ff',
        data:'沙发'
    },
    {
        src:'iconfont icon-shanzi',
        color:'#48df8a',
        data:'家具用品'
    },
    {
        src:'iconfont icon-BeachUmbrella',
        color:'#9993c1',
        data:'户外用品'
    },
    {
        src:'iconfont icon-fenlei',
        color:'#89888f',
        data:'全部分类'
    },
  ];
export default class Store extends Component {
  state = {
    data: ['1', '2','3','4'],
    imgHeight: 176,
  }
  
  componentDidMount() {
      setTimeout(() => {
          this.setState({
              data: ['1', '2','3','4'],
          });
      }, 100);
  }
    render() {
        return (
            <div>
                <NavBar
                style={{backgroundColor:'#3fcccb',color:'#fff'}}
                rightContent={[
                    <div className='iconfont icon-shopping-cart-o'></div>
                ]}
                >商城</NavBar>
                
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
                        <div className="iconfont icon-icon_screen_pitchonx" style={{position:'absolute',top:'6%',left:'2%',color:'white'}}></div>
                        <input placeholder='输入关键字搜索商品' style={{height:'30px',width:'90%',position:'absolute',top:'5%',left:'8%',borderRadius:'5px',border:'none',backgroundColor:'#f5e9e2'}}/>
                        <img
                            src={'/images/store.png'}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                            }}
                        />
                    </a>
                ))}
            </Carousel>
            <Grid
              hasLine={false}
                data={data}
                columnNum={5}
                renderItem={(dataItem)  => (
                    <div style={{width:'100%',height:'100%',margin:'0 auto'}}>
                        <div style={{margin:'0 auto',width:'60%',height:'80%',borderRadius:'50%',backgroundColor:dataItem.color}}>
                            <div style={{position:'absolute',top:'30%',left:'45%',color:'white'}} className = {dataItem.src}></div>
                        </div>
                        <div style={{ color: '#2f2f2f', fontSize: '18px' }}>
                            {dataItem.data}
                        </div>
                    </div>
                )}
              />
               <Grid
                hasLine={false}
                data={dt}
                columnNum={2}
                renderItem={(dataItem)  => (
                    <div style={{width:'100%',height:'100%',margin:'0 auto'}}>
                        <img src={'/images/store'+ dataItem.data+'.png'} style={{height:'70%',height:'80%'}}/>
                        <div style={{ fontSize: '8px' }}>
                            <p style={{color:'#686868',position:'absolute',left:'0',bottom:'10%'}}>{dataItem.text}</p>
                            <p style={{color:'#3b3b3b',position:'absolute',left:'0',bottom:'0'}}>{dataItem.price}</p>
                        </div>
                    </div>
                )}
              />
            </div>
        )
    }
}
