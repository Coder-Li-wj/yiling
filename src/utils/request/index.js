import service from "./service";
import Vue from "vue";




/**
 * 分页参数: page=4&size=20&sort=id,desc
 * @param {*} url
 * @param {*} param
 * @param {*} callback
 */
export const post = (url, param, callback) => {
  service.post(url, param).then(res => {
    callback(res);
  });
};
