/*
 * @Author: shifan 
 * @Date: 2018-04-16 11:22:39 
 * @Last Modified by: shifan
 * @Last Modified time: 2018-06-08 19:09:58
 * @功能: {} 
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {
    resetAuthrizationResult
} from '../../../actions/types.js';
import { SegmentedView, Button, NavigationBar, Overlay, Input } from 'teaset';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    sasas(){
        this.props.resetAuthrizationResult();
    }
    render(){
        return(
            <View style={styles.main}>
            <NavigationBar
                    title={this.props.title}
                    style={{backgroundColor:'red'}}
                />
                <TouchableOpacity onPress={()=>this.sasas()}>
                    <View style={styles.main}>
                        <Text>
                            back
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
function select({ userStore }) {
    return {
        userStore
    }
}
export default connect(select,{
    resetAuthrizationResult
})(Home);