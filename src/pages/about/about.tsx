import { useState } from 'react'
import style from './index.module.less'
import HelloWord from 'components/helloWord/helloWord'
import { Button,ImageViewer,Image } from 'antd-mobile'
function About() {
  const demoImages = [
    'https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80',
    'https://images.unsplash.com/photo-1601128533718-374ffcca299b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3128&q=80',
    'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3113&q=80',
    'https://images.unsplash.com/photo-1624993590528-4ee743c9896e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=1000&q=80'
  ]
  const [visible, setVisible] = useState(false)
  return (
    <div className={style.about}>
      <p className={style.text}>about</p>
      <HelloWord />
      <Button color="primary" >按钮</Button>
      <Image src={demoImages[0]} width={100} height={100} fit='fill' onClick={() => { setVisible(true)}}/>
      <ImageViewer.Multi
        images={demoImages}
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
      />
    </div>
  )
}

export default About