/**
 * @Dsc: 注释
 * @Author wjz
 * @Date 2021/9/1 15:01
 */
import axios from 'axios'

export function request (config) {
  const instance = axios.create({
    //baseURL:'http://192.168.12.53:9012/TestWebService.asmx',
    baseURL: 'http://192.168.3.183:10901/TestWebService.asmx',
    dataType: 'json',
    contentType: 'application/json;charset=GB2312',
    timeout: 5000,
  })

  instance.interceptors.request.use(config => {
    return config
  }, error => {})

  instance.interceptors.response.use(res => {
    return res.data
  }, err => {

  })

  return instance(config)
}
