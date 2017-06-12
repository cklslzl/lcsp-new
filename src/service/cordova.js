/**
 * Created by itxyg on 2017-4-10.
 */
import config from "./config";
export default class CordovaExec {

  constructor() {
    config.isDev ? (this.cordova = null) : this.cordova = cordova;
  }

  getUser() {
    if (config.isDev) {
      return new Promise(resolve => {
        resolve({sessionKey: '0000'});
      })
    }
    return new Promise((resolve, reject) => {
      if (!this.cordova) {
        return reject('获取cordova失败');
      }
      this.cordova.exec(function (success) {
          const result = JSON.stringify(success);
          const obj = JSON.parse(result);
          resolve(obj);
        },
        function (error) {
          reject(error);
        }, "MideaUser", "getUser", []);
    })
  }

  getSessionKey() {
    if (config.isDev) {
      return new Promise(resolve => {
        resolve('0000');
      })
    }
    else {
      return new Promise((resolve, reject) => {
        this.getUser().then(function (user) {
          let sessionKey = user['sessionkey'];
          const key2 = user['token'];
          if (!sessionKey && key2 != undefined) {
            sessionKey = key2;
          }
          if (!sessionKey) {
            return reject('sessionKey获取失败');
          }
          resolve(sessionKey);
        }, function (err) {
          reject(err);
        })
      })
    }
  }

}
