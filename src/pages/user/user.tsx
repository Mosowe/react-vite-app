import { useState,useEffect } from 'react'
import { withRouter, Prompt, useHistory } from 'react-router-dom'
import {
  getPageCustomService,
  resetPassword,
  uploadImage,
  exportUrl
} from './services'

function User(props: any) {
  const [leave, setLeave] = useState(true)
  let history = useHistory()
  console.log(history)

  useEffect(() => {
    getData()
  }, [])

  // get请求
  const getData = async () => { 
    let { data, code } = await getPageCustomService()
    console.log(data,code)
  }
  // post请求
  const postData = async () => {
    let { code, data } = await resetPassword("gdtest002")
    console.log(code,data)
  }
  // 图片上传
  const [file, setFile] = useState(null) as any
  const imageUpload = async () => {
    if (!file) { 
      return
    }
    if (file?.size > 2 * 1024 * 1024) {
      alert('大了')
      return
    }
    let formData = new FormData();
    const fileName = props.name || 'file';
    formData.append(fileName, file);
    let {code,data} = await uploadImage(formData)
    console.log(code,data)
  }
  // 导出/下载文件流
  const exportData = async () => {
    let data = await exportUrl()
    console.log(data)
  }

  return (
    <div className="User">
      user
      <p>
        <button onClick={() => { postData() }}>post请求</button>
      </p>
      <p>
        <button onClick={() => { history.replace('/about') }}>点我去about</button>
      </p>
      <p>
        <button onClick={() => {exportData()}}>点我下载</button>
      </p>
      <p>
        <input type="file" onChange={(e:any) => {setFile(e.target.files[0])}}/>
        <button onClick={() => {imageUpload()}}>点我上传</button>
      </p>
      {/* <Prompt message={() => { 
        if (!leave) { 
          return true
        }
        const r = confirm('确定离开？')
        return r
      }} when={leave}></Prompt> */}
    </div>
  )
}

export default withRouter(User)