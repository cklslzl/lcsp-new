/**
 * Created by itxyg on 2017-4-10.
 */
import config from "./config";
class CordovaExec {

  constructor() {
    config.isDev ? (this.cordova = null) : this.cordova = cordova;
    this.isDev = config.isDev;
    this.user = null;
    this.deviceReady = false;
  }

  getUser() {
    return new Promise((resolve, reject) => {
      //已有用户信息
      if (this.user) {
        return resolve(this.user);
      }
      //模拟用户
      if (this.isDev) {
        return resolve(config.demoUser);
      }
      //等设备加载完毕后执行
      if (!this.cordova) {
        return reject('获取cordova失败');
      }
      this.holdForDevice().then(() => {
        this.cordova.exec(function (success) {
            const result = JSON.stringify(success);
            const obj = JSON.parse(result);
            obj.sessionKey = obj.sessionkey;
            console.log(obj);
            if (obj.sessionKey === undefined) {
              obj.sessionKey = obj.token;
            }
            if (obj.uphone === undefined && obj.mobile !== undefined) {
              obj.uphone = obj.mobile;
            }
            if (obj.gender === undefined && obj.midea_gender !== undefined) {
              obj.gender = obj.midea_gender;
            }
            obj.usex = obj.gender === 'M' ? '男' : '女';
            obj.uname = obj.cn;
            resolve(obj);
          },
          function (error) {
            reject(error);
          }, "MideaUser", "getUser", []);
      })
    })
  }

  holdForDevice() {
    return new Promise((resolve, reject) => {
      if (this.deviceReady || this.isDev) {
        return resolve();
      }
      //等设备加载完毕后执行
      if (!this.cordova) {
        return reject('获取cordova失败');
      }
      document.addEventListener('deviceready', function () {
        resolve();
      }, false);
    })
  }

  getSessionKey() {
    return new Promise((resolve, reject) => {
      this.getUser().then(
        user => {
          resolve(user.sessionKey);
        },
        err => {
          reject(err);
        })
    })
  }

  getLocation() {
    return new Promise((resolve, reject) => {
      if (this.isDev) {
        return resolve(config.demoLocation);
      }
      this.holdForDevice().then(() => {
        this.cordova.exec(function (success) {
          // latitude = success.latitude;
          // longitude = success.longitude;
          // currentAddress = success.address;
          resolve(success);
        }, function (err) {
          reject(err);
        }, "MideaMap", "location", []);
      })
    })
  }
}

export default new CordovaExec();
