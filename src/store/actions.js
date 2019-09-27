/*
通过mutation间接更新state的多个方法的对象
 */
import {
 RECEIVE_TABITEMS,
  RECEIVE_CAROUSELS
} from './mutation-types'
import {
  getTabItems,
  getCarousels
} from '../api'

export default {
  // 异步获取首页展示图标
  async getTabItems({commit},callback) {
    // 发送异步ajax请求
    const result = await getTabItems();
    // 提交一个mutation
    if (result.code === 0) {
      const tabItems = result.data;
      commit(RECEIVE_TABITEMS, {tabItems});
      // 数据更新了, 通知一下组件
      callback && callback()
    }
  },
  // 异步获取首页展示图标
  async getCarousels({commit},callback) {
    // 发送异步ajax请求
    const result = await getCarousels();
    // 提交一个mutation
    if (result.code === 0) {
      const carousels = result.data;
      commit(RECEIVE_CAROUSELS, {carousels});
      // 数据更新了, 通知一下组件
      callback && callback()
    }
  },
}
