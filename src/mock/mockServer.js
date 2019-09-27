/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './data.json'
const BASE_URL = '/api';
// 返回tabItems的接口
Mock.mock(BASE_URL +'/getTabItems', {code: 0, data: data.tabItems});
Mock.mock(BASE_URL +'/getCarousels', {code: 0, data: data.carousels});
// export default ???  不需要向外暴露任何数据, 只需要保存能执行即可

