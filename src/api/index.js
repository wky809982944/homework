/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'
const BASE_URL = '/api';
export const IMG_BASE_URL = "http://test.wangkaiyi.com/homework/";
// 1、获取首页展示图标
export const getTabItems = () => ajax(BASE_URL + '/getTabItems');
export const getCarousels = () => ajax(BASE_URL + '/getCarousels');
