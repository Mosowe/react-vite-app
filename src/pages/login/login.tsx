import { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { sessions } from '@/utils/utils'
function Login(props:any) {
  const login = () => { 
    let redirect = decodeURIComponent(props.location.search.split('redirect=')[1]).split('&')
    let path = redirect[0]
    const data = redirect.length >= 2 ? JSON.parse(redirect[1]) : {}
    sessions.set('token', 'eyJhbGciOiJIUzUxMiJ9.eyJtb2JpbGUiOiIxMzI3NzA4MjY3OCIsImV4cCI6MTYzNDM0NTcwMywidXNlcklkIjoiMjMyMl9fMl8wXzE2MzQyNTkzMDMifQ.pCmWnB_Gx00RaDAIX1gm8GbevL_B6U7N_xbVH1xf6pa1dY3TudnRcHNkMf4T9rBzaOGMyUbCvJn8FPFfQ9jXCw')
    props.history.replace({pathname:path,...data})
  }
  return (
    <div className="login">
      login
      <button onClick={() => { 
        login()
      }}>登录</button>
    </div>
  )
}

export default withRouter(Login)