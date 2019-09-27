/*
直接更新state的多个方法的对象
 */
import Vue from 'vue'
import {
  RECEIVE_TABITEMS,
  RECEIVE_CAROUSELS
} from './mutation-types'

export default {
  [RECEIVE_TABITEMS] (state, {tabItems}) {
    state.tabItems = tabItems;
  },
  [RECEIVE_CAROUSELS] (state, {carousels}) {
    state.carousels = carousels;
  },
}
