/*
 * @Author: shifan 
 * @Date: 2018-04-16 11:22:49 
 * @Last Modified by: shifan
 * @Last Modified time: 2018-06-08 19:10:05
 * @功能: {} 
 */
import React ,{Component}from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    AsyncStorage
} from 'react-native';
import {connect} from 'react-redux';
import {
    userLogin,
    resetAuthrizationResult
} from '../../actions/types';
import Button from 'apsl-react-native-button';
import { Actions } from "react-native-router-flux";
class Longin extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loginName: '',
            password: ''
        };
      }
      
    // componentWillReceiveProps(nextProps) {
    //     console.log('Longin--------componentWillReceiveProps',nextProps)
    //     let { result, userLogin, authrization } = nextProps.userStore;
    //     if (result) {
    //         // this.props.resetAuthrizationResult();
    //         // authrization = JSON.stringify(authrization);
    //         // console.log('authrization',authrization)
    //         // AsyncStorage.setItem('authrization', authrization)
    //         //     .then(() => {
    //         //         console.log('authrization------ok')
    //         //     // Remove all cache except authrization.
    //         //     // this.props.cleanCache({ isLogin: true });
    //         //     // // Back home page.
    //         //     // this.props.navigation.dispatch(resetAction);
    //         //     });
    //         Actions.home();
    //         return false;
    //     }
    // }

    userLogin(loginName,password) {
        this.props.userLogin({
            userName:loginName,password
        })
        // Actions.home();
    }
    componentWillMount(){
        console.log('------<<><><',this.props)
        if(this.props.userStore){
            if(this.props.userStore.result){
                Actions.home();
            }
         }
    }
     render(){
        //  console.log('------<<><><',this.props)

         
        let {
            userStore: {
                isFetching
            },
          } = this.props;
          let { loginName, password } = this.state;
          let isDisabled = !loginName || !password || isFetching;
         return(
            <View style={styles.main}>
            <View>
                <Text>
                    {`用户名:${loginName}`}
                    {`密码:${password}`}
                </Text>
            </View>
            <TextInput
                style={{width:300,height:40,backgroundColor:'#fff',borderRadius:5}}
                onChangeText={(value) => this.setState({loginName:value})}
                placeholder="loginName"
                onSubmitEditing={() => this.passwordInput.focus()}
            />
            <TextInput
                ref={component => this.passwordInput = component}
                style={{width:300,height:40,backgroundColor:'#fff',borderRadius:5,marginTop:10}}
                onChangeText={(value) => this.setState({password:value})}
                placeholder="password"
                onSubmitEditing={()=>this.userLogin(loginName,password)}
            />
            <Button
            style={styles.formItem}
            textStyle={styles.formSubmitText}
            isDisabled={isDisabled}
            isLoading={isFetching}
            onPress={() => this.userLogin(loginName,password)}>
            登录
            </Button>
            </View>
         )
     }
 }
 const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#02DF82',
    },
    formItem: {
        height: 40,
        borderRadius: 5,
        width:200,
        backgroundColor: '#fff',
        marginLeft:100,
        marginTop:20
    },
    formSubmitText: {
    color: '#000',
    }
})

function select({ userStore }) {
    return {
        userStore
    }
}

export default connect(select,{
    userLogin,
    resetAuthrizationResult
})(Longin);