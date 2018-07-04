import request from './request';

const API_ROOT = 'https://zz.bdstatic.com/';
 const API_ROOT2 = 'http://bbs.uestc.edu.cn/mobcent/app/web/index.php?r=';
 const API_ROOT3 = 'https://b2b-dev.cfucome.com/api/v1/';
function callApi(endpoint, options) {
    return request(`${API_ROOT}${endpoint}`, options);
  }
  function callApi2(endpoint, options) {
    return request(`${API_ROOT3}${endpoint}`, options);
  }

  function getPublishFetchOptions(body) {
    return {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(body)
    };
  }

export default {
    fetchlinksubmit: ({userName,password}) => {
        return callApi(`linksubmit/push.js`);
    },
    loginG: ({userName,password}) => {
        console.log('**********',userName,password)
        // let json = `{'username': ${userName}, 'password': ${password}}`;
        let parmin={
            username:userName,
            password:password,
        } 
        let opt = getPublishFetchOptions(parmin);
        return callApi2(`user/login/app`,opt);
    }
}