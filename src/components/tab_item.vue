<template>
  <div>
    <el-row v-for="(tabItems ,index ) in tabItemArr" :key="index" >
      <el-col :span="5">&nbsp;</el-col>
      <el-col :span="7" v-for="tabItem in tabItems" :key="tabItem.uuid"><img :src="BASE_URL+tabItem.url" width="535" height="212" alt=""></el-col>
    </el-row>
  </div>
</template>

<script>
    import {getTabItems} from "../api";
    import {mapState} from "vuex";

    export default {
        data() {
            return {
                BASE_URL:"http://test.wangkaiyi.com/homework/tabItems/",
            };
        },
        mounted() {
            this.$store.dispatch('getTabItems')
        },
        methods: {
            /*test() {
                alert(this.tabItems)
            }*/

        },
        computed: {
            ...mapState(['tabItems']),
            /*
            根据tabItems一维数组生成一个二维数组
            小数组中的最大元素是8
             */
            tabItemArr () {
                const {tabItems} = this;
                //准备空的二维数组
                const arr=[];
                //准备小数组（最大长度为8）
                let minArr =[];
                //遍历tabItems
               tabItems.forEach(c => {
                    //  如果当前小数组已经满了，创建一个新的
                    if (minArr.length === 2) {
                        minArr=[]
                    }
                    //  如果minArr是空的，将小数组保存到大数组中
                    if (minArr.length === 0) {
                        arr.push(minArr)
                    }
                    //将当前分类保存到小数组中
                    minArr.push(c)
                });
                return arr
            },
        },

    }
</script>

<style>

</style>
