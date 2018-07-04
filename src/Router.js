/*
 * @Author: shifan 
 * @Date: 2018-04-16 11:23:07 
 * @Last Modified by: shifan
 * @Last Modified time: 2018-06-08 19:27:35
 * @功能: {} 
 */
import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    View,
    BackHandler,
    StatusBar,
    DeviceEventEmitter,
    SafeAreaView
} from 'react-native';
import {
    Scene,
    Router,
    Actions,
    Reducer,
    ActionConst,
    Overlay,
    Tabs,
    Modal,
    Drawer,
    Stack,
    Lightbox,
    Image,
} from 'react-native-router-flux';

import Longin from './pages/Longin/index';
import Home from './pages/Main/Home/index';
import My from './pages/Main/My/index';
import Wlecome from './pages/Welcome/index';
import TabIcon from './component/TabIcon';
import { getUserFromStorage } from '../src/actions/types';
import { connect } from 'react-redux';

const Routertow= () =>(
        <Router>
            
            <Modal
            hideNavBar>
                <Stack key="root">
                    <Scene
                        hideNavBar
                        component={Wlecome}
                        key='wlecome'
                        swipeEnabled={false}// 是否可以滑动
                    />
                    <Scene
                        hideNavBar
                        component={Longin}
                        key='login'
                        swipeEnabled={false}// 是否可以滑动
                        panHandlers={null}  //防止ios的自带返回
                    />
                    <Tabs
                        key="tabbar"        // 唯一标识
                        wrap={true}         // 自动使用自己的导航栏包装每个场景
                        showLabel={false}   // 显示文字
                        tabBarStyle={styles.tabBarStyle} // tabBar的样式
                        swipeEnabled={false}// 是否可以滑动
                        headerMode='none' // 页面切换方式
                        icon={TabIcon}   //tab里的内容
                        lazy={true}         // 是否默认渲染tabbar
                        tabBarPosition={'bottom'}       // tabbar在顶部还是底部，iOS默认顶部，安卓默认顶部
                        activeBackgroundColor='#cdcdcd'   // 选中tabbar的背景色
                        inactiveBackgroundColor='white' // 未选中tabbar的背景色
                        activeTintColor='#cdcdcd'       // 选中tabbar图标的颜色
                        inactiveTintColor='white'        // 未选中tabbar图标的颜色
                    >
                        <Stack key="homeBig" title={`主页`}>
                            <Scene
                                hideNavBar
                                component={Home}
                                key='home'
                                panHandlers={null}  //防止ios的自带返回
                                rightTitle="Right"
                            />
                        </Stack>
                        <Stack key="myBig" title={`我的`} >
                            <Scene
                                hideNavBar
                                component={My}
                                key='My'
                                panHandlers={null}  //防止ios的自带返回
                            />
                        </Stack>
                    </Tabs>
                    
                </Stack>
            </Modal>
        </Router>    
);
class RouterRoot extends Component {
    componentDidMount() {
        this.props.getUserFromStorage();
      }
    //   componentWillReceiveProps(nextProps){
    //     console.log('RouterRoot----componentWillReceivePropsyuisasa',nextProps);
    //     let { authrization } = nextProps.userStore
    //     if(authrization.dateTime){
    //         this.loningTime = setTimeout(()=>{
    //             Actions.home();
    //         },2000);
    //     }else{
    //         this.loningTime = setTimeout(()=>{
    //             Actions.login();
    //         },2000);
    //     }
    // }
    componentWillUnmount(){//组件卸载
        // console.log('componentWillUnmount')
        clearTimeout(this.loningTime);
    }
    render() {
        return (
          <View
            // forceInset={{ top: 'never' }}
            style={{ flex: 1, backgroundColor: 'blue' }}>
            <Routertow />
          </View>
        );
      }
}
function mapStateToProps({ userStore }) {
    return {
        userStore
    };
  }

export default connect(mapStateToProps, {
    getUserFromStorage
})(RouterRoot);

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: '#eee',
        height:49,
    },
});