/*
 * @Author: shifan 
 * @Date: 2018-04-16 11:22:32 
 * @Last Modified by: shifan
 * @Last Modified time: 2018-05-14 17:01:34
 * @功能: {} 
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { SegmentedView, Button, NavigationBar, Overlay, Input } from 'teaset';
export default class My extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 5 }
      }

      _onPressReset() {
        this.setState({ count: 0 })
      }
    
      _onPressInc() {
        this.setState({ count: this.state.count+1 });
      }
    
      _onPressDec() {
        this.setState({ count: this.state.count-1 });
      }
      
    render(){
        return(
            <View style={styles.main}>
            <NavigationBar
                    title={this.props.title}
                />
                <TouchableOpacity onPress={()=>Actions.login()}>
                        <Text>
                    go back
                        </Text>
                </TouchableOpacity>
                <Text style={styles.counter}>{this.state.count}</Text>
                <TouchableOpacity style={styles.reset} onPress={()=>this._onPressReset()}>
                <Text>归零</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.start} onPress={()=>this._onPressInc()}>
                <Text>加1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.stop} onPress={()=>this._onPressDec()}>
                <Text>减1</Text>
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
    },
    counter:{
        fontSize: 50,
    marginBottom: 70
    },
    reset: {
        margin: 10,
        backgroundColor: 'yellow'
      },
      start: {
        margin: 10,
        backgroundColor: 'yellow'
      },
      stop: {
        margin: 10,
        backgroundColor: 'yellow'
      }
})