/**
 * Created by itxyg on 2017-4-11.
 */
const prodUrl = 'https://mobile.yutong.com:9680/';
const devUrl = 'https://mobile.yutong.com:9680/';
const isDev = true;
const baseUrl = isDev ? devUrl : prodUrl;
export default{
  isDev: isDev,
  demoUser: {
    sessionKey: 'user_5kzqEXThoPNwQt88XVbRRI4qftssCYBijxv',
    uid: '90126783',
    cn: '吴战磊',
    uname: '吴战磊',
    usex: '男',
    uphone: '15638142232'
  },
  demoLocation: {
    latitude: 34.689306,
    longitude: 113.695264,
    address: '中国河南省郑州市管城回族区宇通路'
  },
  pageSize: 15,
  url: {}
}
