import { Switch ,NavLink,withRouter} from 'react-router-dom';
import RouterView from '@/router/routerConfig'
import {useState,useEffect,Suspense} from 'react'
import routerMap from './router/router'
import './App.css'

function App(props:any) {
  const [footerShow, setFooterShow] = useState(false)
  const routerChange = () => {
    const targetRouter = routerMap.find((item: any) => item.path === props.location.pathname);
    setFooterShow(targetRouter?.footerShow)
  }
  useEffect(() => {
    routerChange()
  }, [props.location])
  return (
    <div className="page">
      <div className="content">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <RouterView />
          </Switch>
        </Suspense>
      </div>
      {footerShow ? <div className="footer">
        <NavLink to="/home" className="item">首页</NavLink>
        <NavLink to="/about" className="item">关于</NavLink>
      </div> : ''}
    </div>
  )
}

export default withRouter(App)
