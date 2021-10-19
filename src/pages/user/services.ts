import request from '@/axios/axios'
import api from '@/axios/apiNames'


// 获取服务信息
export const getPageCustomService = () => { 
    let params = {
      url: api.PageCustomService
    }
  return request.get(params)
}
// 重置密码
export const resetPassword = (name:any) => { 
  let params = {
    url: api.resetPassword,
    data: {
      name
    }
  }
  return request.post(params)
}
// 上传图片
export const uploadImage = (formData:any) => { 
  let params = {
    url: api.commonUpload,
    data: formData
  }
  return request.file(params)
}

// 导出申请清单
export const exportUrl = () => { 
  let params = {
    url: api.exportDetails,
    data: {
      id: 4,
      fileName: '申请商品明细.xls',
      export: 1,
    }
  }
  return request.get(params)
}