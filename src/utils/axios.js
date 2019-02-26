import axios from 'axios'
const baseUrl = process.env.API_ROOT
const service = axios.create({
    baseURL: baseUrl,  //基础URL
    timeout: 30000, //请求延时时间
    // headers:{'X-Requested-With': 'XMLHttpRequest'},   //自定义请求头内容
    // responseType:'json',  //请求数据类型包括  'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    // params: {},  //无论请求为何种类型，在params中的属性都会以key=value的格式在urlzhong拼接
    // transformRequest: [function(data){
        // return data
    // }],   // 只适用于 POST,PUT,PATCH，transformRequest` 允许在向服务器发送前，修改请求数据。后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
    // transformResponse: [function(data){
        // return data
    // }],   //transformResponse` 在传递给 then/catch 前，允许修改响应数据
    // validateStatus: function(status){
    // 　　return status < 400 //状态码小于400时均为成功（返回true）
    // }, //validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
    // cancelToken 
})

// request 拦截器
// service.interceptors.request.use(config => {
//     // if (localStorage.getItem.token) {
//     //     config.headers['X-Token'] = getToken()
//     // }
// },error => {
//     Promise.reject(error)
// })

// // response 拦截器
// service.interceptors.response.use(response  => response,

// )

export default service