import { Switch ,NavLink,withRouter} from 'react-router-dom';
import RouterView from '@/router/routerConfig'
import {useState,useEffect,Suspense} from 'react'
import routerMap from './router/router'
import style from './App.module.less'

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
    <div className={style.page}>
      <div className={style.content}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <RouterView />
          </Switch>
        </Suspense>
      </div>
      {footerShow ? <div className={style.footer}>
        <NavLink to="/home" className={style.item} activeClassName={style.active}>首页</NavLink>
        <NavLink to="/about" className={style.item} activeClassName={style.active}>关于</NavLink>
      </div> : ''}
    </div>
  )
}

export default withRouter(App)
