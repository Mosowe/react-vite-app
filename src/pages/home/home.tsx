import React, {useEffect} from 'react'
import useCounterModel from '@/store/store'
import { withRouter, Link } from 'react-router-dom'
import { Button } from 'antd-mobile'
function Home(props: any) {
  const model = useCounterModel()

  window.hasOwnProperty('$cancelRequest') ? window.$cancelRequest() : ''
  
  useEffect(() => {
    console.log('值变了')
  }, [model.count])

  return (
    <div className="Home">
      <p className="about">home</p>
      <Link to='/user'>user</Link><br/>
      <Link to='/user?id=1111'>user(search)</Link><br/>
      <Link to={{ pathname: '/user', search: 'id=123' }}>user(search)</Link><br/>
      <Link to={{ pathname: '/user', state: { num: '002' } }}>user(state)</Link><br/>
      <Link to={{ pathname: '/user', query: { num: '003' } }}>user(query)</Link><br />
      <Button color="danger" onClick={() => props.history.push({ pathname: "/user", search: '123456' })}>通过函数跳转</Button><br /><br />
      {model.count}<br /><br />
      <Button color="danger" onClick={() => { 
        model.increment()
      }}>加个数</Button><br /><br />
      <Button color="danger" onClick={() => { 
        model.decrement()
      }}>减一下</Button><br /><br />
      <Button color="danger" onClick={() => { 
        model.increment(20)
      }}>加20</Button><br /><br />
    </div>
  )
}

export default withRouter(Home)