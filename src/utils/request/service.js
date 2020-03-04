import Vue from 'vue'
import axios from 'axios';
import router from '@/router'

// 创建axios实例
let service;


if (process.env.NODE_ENV === 'development') {
  service = axios.create({
    baseURL: '/api' // api的base_url
  });
} else {
  // 生产环境下
  service = axios.create({
    baseURL: '/' // api的base_url
  });
}

service.defaults.timeout = 50000; // 请求超时时间


// request拦截器 axios的一些配置
service.interceptors.request.use(
  config => {
    // 判断是否存在token，如果存在的话，则每个http header都加上Access-Token
    // console.log(store.state.user)

    // if (store.state.user.token) {
    //   config.headers['Access-Token'] = store.state.user.token;
    //
    // } else {
    //   let user = localStorage.getItem('cddUser');
    //   // console.log('我是axios'+user);
    //   if (user){
    //     // console.log(user);
    //     config.headers['Access-Token'] = JSON.parse(user).token;
    //   }
    //
    // }
    return config;
  },
  error => {
    // Do something with request error


  },
);

service.interceptors.response.use(
  response => {
    // console.log(response.data.code);

    // if (response.data) {
    //   switch (response.data.code) {
    //     case 400:
    //       console.log(response.data.message);
    //       // Toast(response.data.message);
    //       if (response.data.message.indexOf('请重新登录') >= 0){
    //         localStorage.removeItem('cddUser');
    //         router.replace({path:'/login'});
    //       }
    //       break;
    //
    //
    //   }
    // }
    return response;
  },

  error => {

    // if (error.data) {
    //   switch (error.data.code) {
    //     case 403 :
    //       localStorage.removeItem('cddUser');
    //       router.replace({path:'/login'});
    //       break;
    //
    //
    //   }
    // }
  }
);


export default service;
