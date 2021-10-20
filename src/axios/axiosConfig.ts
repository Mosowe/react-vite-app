/**
 * axios 网络请求工具
 */
import axios from 'axios';
import api from './apiNames'
import url from './url'

// 服务器状态码
const codeMessage:any = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};
// 接口返回状态码
const apiCode: any = {
  toast: 101, // 错误信息，需要toast提示
  loginFail: 10086, // 登录失效
}

let request = axios.create({
  baseURL: url,
  timeout: 2e4,
  responseType: 'json',
});
/**
 * 异常处理程序
 */
const errorHandler = (response: any) => {
  if (response && response?.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;
    if (response?.status === 401) { // 登录失效
      setTimeout(() => {
        window.sessionStorage.clear();
        window.location.href = `${window.location.origin}/login`;
      }, 1e3);
    } else {
      console.log(`请求错误 ${status}: ${url},${errorText}`);
    }
  }
  return response;
};

// 取消请求
const cancelAxios:any = [];
request.interceptors.request.use((config:any) => {
  const c = config;
  c.cancelToken = new axios.CancelToken((cancel:any) => {
    cancelAxios.push(cancel);
  });
  return c;
}, () => {
  // console.log(error);
});
// 触发axios取消事件，挂载到window
window.$cancelRequest = () => { 
  cancelAxios.forEach((element:any, index:number) => {
    element('cancel');
    delete cancelAxios[index];
  });
};


// 过滤导出excel错误提示，文件流下载接口声明列表
const list = [
  { url: api.exportDetails, type: 'export', export: 1},
];

// 添加请求拦截器
request.interceptors.request.use((config:any) => {
  const finds = list.find(item => config.url.includes(item.url));
  const num = config[config.method.toUpperCase() === 'GET' ? 'params' : 'data']?.export || 0;
  if (finds && num === 1) { // 下载
    config.responseType = 'blob'
  }
  
  return config
}, (error: any) => {
    console.log(error)
})

// 添加响应拦截器
request.interceptors.response.use(async (response: any) => {
  const options = response.config
  const finds = list.find(item => options.url.includes(item.url));
  const num = options[options.method.toUpperCase() === 'GET' ? 'params' : 'data']?.export || 0;
  if (finds && num === 1 && response.status === 200) { // 文件流下载，请求中必须含：export：1，可选fileName，默认时间
    const blob = new Blob([response.data], {type: 'application/vnd.ms-excel'});
    let filename = options[options.method.toUpperCase() === 'GET' ? 'params' : 'data']?.fileName || new Date().Format('YYYY-MM-DD hh:mm:ss');
    // 创建一个超链接，将文件流赋进去，然后实现这个超链接的单击事件
    const elink = document.createElement('a');
    elink.download = filename;
    elink.style.display = 'none';
    elink.href = URL.createObjectURL(blob);
    document.body.appendChild(elink);
    elink.click();
    URL.revokeObjectURL(elink.href); // 释放URL 对象
    document.body.removeChild(elink);
    return blob
  }
  if (response.status === 200) { // 一般性接口请求
    try {
      if (response.data.code) {
        if (response.data.code !== 200) {
          if (response.data.code === apiCode.loginFail) { // 登录失效
            setTimeout(() => {
              window.sessionStorage.clear();
              window.location.href = `${window.location.origin}/login`;
            }, 1e3);
          }
          if (response.data.code === apiCode.toast) {
            alert(response.data.errorMsg);
          } else { 
            console.log(response.data.errorMsg);
          }
        }
      }

    } catch (err) {
      console.log('接口请求失败');
    }
  } else {
    errorHandler(response)
  }
  return response.data;
});

export default request