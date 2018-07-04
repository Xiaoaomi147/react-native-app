/*
 * @Author: shifan 
 * @Date: 2018-04-16 15:29:09 
 * @Last Modified by: shifan
 * @Last Modified time: 2018-05-21 11:56:16
 * @功能: { 实例action } 
 */
import { createAction } from 'redux-actions';

export const USER_LOGIN_IN = Symbol();
export const userLogin = createAction(USER_LOGIN_IN);

export const RETRIEVE = Symbol();
export const getUserFromStorage = createAction(RETRIEVE);

export const USER_LOGIN_SUCCESS = Symbol();
export const userSuccess = createAction(USER_LOGIN_SUCCESS);

export const USER_LOGIN_FAILURE = Symbol();
export const failure = createAction(USER_LOGIN_FAILURE);

export const SET_AUTHRIZATION = Symbol();
export const RESET_AUTHRIZATION = Symbol();
export const RESET_AUTHRIZATION_RESULT = Symbol();
export const setAuthrization = createAction(SET_AUTHRIZATION);
export const resetAuthrization = createAction(RESET_AUTHRIZATION);
export const resetAuthrizationResult = createAction(RESET_AUTHRIZATION_RESULT);
