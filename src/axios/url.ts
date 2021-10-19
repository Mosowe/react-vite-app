let url = ''
switch (process.env.NODE_ENV) { 
  case 'development': url = "http://127.0.0.1:9999"; break;
  case 'test': url = "http://127.0.0.1:9999"; break;
  case 'production': url = "http://127.0.0.1:9999"; break;
  default:  url = "http://127.0.0.1:9999"; break;
}
export default url