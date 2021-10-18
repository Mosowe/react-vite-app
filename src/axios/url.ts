let url = ''
switch (process.env.NODE_ENV) { 
  case 'development': url = "http://10.21.1.104:9999"; break;
  case 'test': url = "http://10.21.1.104:9999"; break;
  case 'production': url = "http://10.21.1.104:9999"; break;
  default:  url = "http://10.21.1.104:9999"; break;
}
export default url