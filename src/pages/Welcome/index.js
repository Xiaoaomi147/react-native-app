/*
 * @Author: shifan 
 * @Date: 2018-04-14 10:37:35 
 * @Last Modified by: shifan
 * @Last Modified time: 2018-06-08 19:11:01
 * @功能: {} 
 */

import React ,{Component}from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    AsyncStorage
} from 'react-native';
import { Actions } from "react-native-router-flux";
import { connect } from 'react-redux'
import { getUserFromStorage } from '../../actions/types'
class Welcome extends Component{
    componentDidMount(){
       
        this.loningTime = setTimeout(()=>{
                   Actions.login();
                },2000);
    }
    componentWillReceiveProps(nextProps) {
        // console.log('Welcome-----componentWillReceivePropsyuisasa');
        // let { authrization } = nextProps.userStore;
        // console.log('hahhaha',authrization);
        // let NewDate = new Date().getTime();
        
        // if(!authrization.dateTime && NewDate/1000>((authrization.dateTime-0)+86400)){
        //     this.loningTime = setTimeout(()=>{
        //         Actions.home();
        //     },2000);
        // }else{
        //     this.loningTime = setTimeout(()=>{
        //         Actions.login();
        //     },2000);
        // }
    }
    componentWillUnmount(){//组件卸载
        // console.log('componentWillUnmount')
        clearTimeout(this.loningTime);
    }
    
     render(){
         console.log('qwqwq------->',this.props.userStore)
         return(
            <View style={styles.main}>
                <Image source={require('../../Asset/WechatIMG67.png')} style={styles.img}/>
            </View>
         )
     }
 }

 function mapStateToProps({ userStore }) {
    return {
        userStore
    };
  }
  
export default connect(mapStateToProps, {
    getUserFromStorage
})(Welcome);

 const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fff',
    },
    img:{
        flex:1,
        // width:100,
        // height:400,
        resizeMode:'contain'
    }
})