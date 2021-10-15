declare module 'react-router-dom'
declare module '@/*'
declare module 'axios'

interface Date { // 给Date添加方法
  Format(params: any): void;
}
