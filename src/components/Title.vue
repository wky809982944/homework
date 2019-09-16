<template>
    <div>
      <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">极速免税店</el-menu-item>
          <el-menu-item index="3">母婴特卖</el-menu-item>
          <el-menu-item index="4">美妆商城</el-menu-item>
          <el-menu-item index="5">国际轻奢</el-menu-item>
          <el-menu-item index="6">服装运动</el-menu-item>
          <el-menu-item index="6">鞋包配饰</el-menu-item>
        </el-menu>
      </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                input: ''
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style >

</style>
