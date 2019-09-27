<template>
  <div>
    <el-row>
      <el-col :span="4">&nbsp;</el-col>

      <el-col :span="4">
        <span>聚美优品</span>
      </el-col>

      <el-col :span="4">
        <span>

          <input v-model="input" placeholder="请输入内容 " @keyup.enter="search"></input>
        </span>
      </el-col>
      <el-col :span="6">&nbsp;</el-col>
      <el-col :span="4">
        <span>去购物车结算</span>
      </el-col>
    </el-row>
    <div class="line"></div>
  </div>
</template>

<script>
    export default {
        data() {
            return{
                input: ''
            }
        },
        methods:{
            search(){
                this.$router.push("/search");
            }
        }
    }
</script>

<style >
</style>
