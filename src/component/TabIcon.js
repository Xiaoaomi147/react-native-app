/*
 * @Author: shifan 
 * @Date: 2018-04-13 20:08:02 
 * @Last Modified by: shifan
 * @Last Modified time: 2018-04-13 20:16:56
 * @功能: {} 
 */
import React from 'react';
import {
    Text,
    View,
    Image
} from 'react-native'

const TabIcon = (props) =>{
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:20}}>
                {props.title}
            </Text>
        </View>
    )
}
export default TabIcon;