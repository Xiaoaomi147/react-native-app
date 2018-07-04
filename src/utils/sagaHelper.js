import { call, put } from 'redux-saga/effects';

export function* fetchResource(resource, api, payload) {
  console.log('---------->1', resource);
  console.log('---------->2', api);
  console.log('---------->3', payload);
//   console.log('---------->4',resource.request(payload))
//  yield put(resource.request(payload));
  const { data, error } = yield call(api,payload);
  console.log('请求数据',data, error)
  if (!error) {
    // The 2nd argument will be treated as `meta` field.
    if(data.status == 200){
      console.log('userSuccess',data, payload);
      yield put(resource.userSuccess(data, payload));
    }else{
      console.log('failure',data, payload);
      yield put(resource.failure(data, payload));
    }
  } else {
    yield put(resource.failure(error, payload));
  }
}