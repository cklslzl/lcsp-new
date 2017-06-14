/**
 * Created by WUZLC on 2017/6/5.
 */
/**
 * Created by itxyg on 2017-4-17.
 */

import Vue from "vue";
import CordHelp from "./cordova";
import config from "./config";

class base {
  options = {
    headers: {
      'Content-Type': 'application/json'
    },
    timeout: 15000
  }

  constructor() {
    this.popError = new window.YuTong.Pop.Error({ele: '#httpPopError'});
  }

  getSessionKey() {
    return CordHelp.getSessionKey();
  }

  getSessionKeyAndUid() {
    return CordHelp.getUser();
  }

}

//通用接口服务
class Http extends base {

  constructor() {
    super();
  }

  post(url, body) {
    this.body = {};
    let promise = new Promise((resolve, reject) => {
      this.getSessionKeyAndUid()
        .then((user) => {
          this.options.headers['sessionKey'] = user.sessionKey;
          this.url = url;
          Object.assign(this.body, body);
          Vue.http.post(this.url, JSON.stringify(this.body), this.options)
            .then(res => {
              if (res.data && res.data.result) {
                resolve(res.data);
              } else {
                reject(res.data);
              }
            }, err => {
              console.log('http:error:-------------------');
              console.log(JSON.stringify(err));
              this.popError.show('请求出错，请重试');
              reject(err);
            })
        })
    })
    return promise;
  }
}


export default new Http();
