import axios from 'axios'

export function request(config){
  //1、创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000
  })
  //2、设置axios拦截器
  //2.1 请求拦截                     //拦截到请求的参数config
  instance.interceptors.request.use(config => {
    return config  //要将拦截到的参数返回 不然无法进行后续操作
  },error => {
    console.log(error);
  })
  //2.2 响应拦截                       //拦截到请求回来的结果
  instance.interceptors.response.use(res => {
    return res.data  //返回结果中需要的数据data
  },error => {
    console.log(error);
  })
  //3、发送真正的网络请求
  return instance(config)
























}