import React from 'react';
import { TabBar } from 'antd-mobile';
import Home from './Home';
import Inspiration from './Inspiration';
import My from './My';
import Store from './Store';

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }
  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#3fcccb"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<i style={{'fontsize':'22px'}} className='iconfont icon-Home'></i>
            }
            selectedIcon={<i style={{'fontsize':'22px'}} className='iconfont icon-Home'></i>
            }
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}
          >
            <Home/>
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{'fontsize':'22px'}} className='iconfont icon-dengpao
            '></i>
            }
            selectedIcon={<i style={{'fontsize':'22px'}} className='iconfont icon-dengpao
            '></i>
            }
            title="商城"
            key="Koubei"
            selected={this.state.selectedTab === 'store'}
            onPress={() => {
              this.setState({
                selectedTab: 'store',
              });
            }}
          >
            <Store/>
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{'fontsize':'22px'}} className='iconfont icon-guanzhudianpu
            '></i>
            }
            selectedIcon={<i style={{'fontsize':'22px'}} className='iconfont icon-guanzhudianpu
            '></i>
            }
            title="灵感"
            key="Friend"
            selected={this.state.selectedTab === 'linggan'}
            onPress={() => {
              this.setState({
                selectedTab: 'linggan',
              });
            }}
          >
            <Inspiration/>
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{'fontsize':'22px'}} className='iconfont icon-wode
            '></i>
            }
            selectedIcon={<i style={{'fontsize':'22px'}} className='iconfont icon-wode
            '></i>
            }
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'my'}
            onPress={() => {
              this.setState({
                selectedTab: 'my',
              });
            }}
          >
            <My/>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}