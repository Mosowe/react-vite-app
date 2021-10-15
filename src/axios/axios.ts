import request from './axiosConfig';
import { sessions } from '@/utils/utils'

interface api { 
  url: string
  data?: any
  header?:any
}

const httpConfig = (method:string,params?:any) => { 
  let token = sessions.get(`token`)
  let data: any = null
  if (method !== 'FILE') { // 非文件上传
    if (method === 'POST' || method === 'PUT') {
      data = {
        data: params.data,
      }
    } else if (method === 'GET' || method === 'DELETE') {
      data = {
        params: params.data,
      }
    }
    return new Promise((resolve, reject) => {
      request(params.url, {
        method,
        ...data,
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Authorization': token ? token : 'Basic aHc6aHc=',
          ...params.header
        }
      }).then((res:any) => { 
        resolve(res)
      }).catch((err:any)=>{
        console.log(err,'异常')
      })
    })

  } else { // 文件上传
    return new Promise((resolve, reject) => {
      request(params.url, {
        method: 'post',
        data: params.data,
        requestType: 'form',
        headers: {
          'Authorization': token ? token : 'Basic aHc6aHc='
        }
      }).then((res:any) => { 
        resolve(res)
      }).catch((err:any)=>{
        console.log(err,'异常')
      })
    })
  }

}

export default {
  post: (params: api) => {
    return httpConfig('POST', params)
  },
  get: (params:api) => {
    return httpConfig('GET', params)
  },
  delete: (params:api) => {
    return httpConfig('DELETE', params)
  },
  put: (params:api) => {
    return httpConfig('PUT', params)
  },
  file: (params:api) => {
    return httpConfig('FILE', params)
  },
}