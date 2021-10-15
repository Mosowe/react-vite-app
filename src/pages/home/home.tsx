import { withRouter,Link } from 'react-router-dom'
function Home(props: any) {
  return (
    <div className="Home">
      <p>home</p>
      <Link to='/user'>user</Link><br/>
      <Link to='/user?id=1111'>user(search)</Link><br/>
      <Link to={{ pathname: '/user', search: 'id=123' }}>user(search)</Link><br/>
      <Link to={{ pathname: '/user', state: { num: '002' } }}>user(state)</Link><br/>
      <Link to={{ pathname: '/user', query: { num: '003' } }}>user(query)</Link><br />
      <button onClick={() => props.history.push({pathname:"/user",search:'123456'})}>通过函数跳转</button>
    </div>
  )
}

export default withRouter(Home)