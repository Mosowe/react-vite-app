declare module 'react-router-dom'
declare module '@*'
declare module 'components*'
declare module 'axios'

interface Window {
  $cancelRequest: Function;
}
interface Date { // 给Date添加方法
  Format(params: any): void;
}
