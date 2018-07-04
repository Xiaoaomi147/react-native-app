/*
 * @Author: shifan 
 * @Date: 2018-04-16 16:03:18 
 * @Last Modified by: shifan
 * @Last Modified time: 2018-05-21 17:31:32
 * @功能: {} 
 */

 'use strict';

// import ActionType from '../actions/types';
import {
    USER_LOGIN_IN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    SET_AUTHRIZATION,
    RESET_AUTHRIZATION_RESULT
} from '../actions/types';

const defaultUserState = {
    status: null,
    userLogin:{},
    result: false,
    isFetching:false
};
export default function Users(state = defaultUserState, action) {
    // console.log('------->>    state',state);
    console.log('------->>    action',action);
    switch (action.type) {
        case SET_AUTHRIZATION:
            return {
                ...state,
                authrization: action.payload
            };
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                status:action.type,
                result:true,
                isFetching:false,
                authrization:action.payload
            };
        case USER_LOGIN_IN:
            return {
                ...state,
                status:action.type,
                userLogin:action.payload,
                isFetching:true
            };
        case USER_LOGIN_FAILURE:
            return {
                ...state,
                status:action.type,
                userLogin:action.payload,
                isFetching:false
            }
        case RESET_AUTHRIZATION_RESULT:
            return {
                ...state,
                result: false
            };
        default:
            return state;
    }
}