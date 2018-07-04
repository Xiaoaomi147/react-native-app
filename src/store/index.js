/*
 * @Author: shifan 
 * @Date: 2018-05-14 17:05:46 
 * @Last Modified by: shifan
 * @Last Modified time: 2018-06-13 14:40:20
 * @功能: {} 
 */

import {createStore, applyMiddleware, compose} from 'redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
// const logger = store => next => action => {
//     if (typeof action === 'function') console.log('------->>dispatching a function');
//     else console.log('------->>dispatching', action);
//     let result = next(action);
//     console.log('------->>next state', store.getState());
//     return result;
// }
const sagaMiddleware = createSagaMiddleware();


// const createSoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

//配置store信息
export default function configureStore(initialState = {}) {

    const middlewares = [sagaMiddleware, createLogger];

    const enhancers = [
        applyMiddleware(...middlewares)
    ];

    //将reducer组合起来
    // const reducer = combineReducers(reducers);

    const store = createStore(
        rootReducer,
        initialState,
        compose(...enhancers) 
      );

    //创建store
    store.runSaga = sagaMiddleware.run;

    return store;
}