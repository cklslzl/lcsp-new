/**
 * Created by itxyg on 2017-4-17.
 */

import Vue from "vue";
import cordovaHelp from "./cordova";
import config from "./config";

class base {

  method = 'post';

  options = {
    headers: {
      'Content-Type': 'application/json'
    },
    timeout: 15000
  }
  body = {
    params: {}
  };

  constructor(postData) {
    Object.assign(this.body, postData);
  }

  getSessionKey() {
    return new cordovaHelp().getSessionKey();
  }

  getSessionKeyAndUid() {
    return new cordovaHelp().getSessionKeyAndUid();
  }

}

//通用接口服务
class ServiceApi extends base {

  constructor(postData) {
    super(postData);
    this.url = config.attendanceUrl;
  }

  post() {
    return new Promise((resolve, reject) => {
      this.getSessionKeyAndUid()
        .then(
          (info) => {
            this.url += info.sessionKey;
            this.body.params.uid = info.uid;
            Vue.http.post(this.url, JSON.stringify(this.body), this.options)
              .then(
                function (res) {
                  resolve(res);
                },
                function (err) {
                  reject(err);
                }
              )
          },
          (err) => {
            reject(err);
          })
    })
  }
}


/*
 * 获取领导信息：{"id":{"serviceId": "GetPerson"},"params":{searchField:姓名}}
 * 获取考勤列表：{"id":{"serviceId": "AttendanceQuery"},"params":{DateTime:"拉取月份"}}
 * 提交考勤：{"id":{"serviceId": "LeaveSubmit"},"params": {"RequestType":"1为请假，2为公出",
 "ApplyType": "申请种类",
 "BeginTime": "开始时间",
 "EndTime": "结束时间",
 "ReasonDesc": "请假、公出说明",
 "Leadership": "直接领导",
 "Temp1":   "扩展字段1",
 "Temp2":   "扩展字段2",
 "Temp3":  "扩展字段3"}}
 * */

export default ServiceApi;
