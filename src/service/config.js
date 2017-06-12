/**
 * Created by itxyg on 2017-4-11.
 */
const prodUrl = 'http://10.8.7.201/barbie/app/proxy/ajax.do';
const devUrl = 'http://10.8.7.201:8083/app/proxy/ajax.do?username=90000091&name=1';
const isDev = true;
export default{
  isDev: isDev,
  baseUrl: isDev ? devUrl : prodUrl
}
