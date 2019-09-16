<template>
  <div id="homework-searchBar">
    <div class="homework-logo">
      <span>聚美优品</span>
    </div>
    <div class="homework-search">
        <span><el-autocomplete
          v-model="input"
          placeholder="请输入内容"
          @select="handleSelect"
        ></el-autocomplete></span>
    </div>
    <div class="homework-car-box">
      <span>去购物车结算</span>
    </div>
  </div>
</template>

<script>
    export default {}
</script>

<style >
  .homework-logo {
    float: left;
  }

  .homework-search {
    float: left;
    margin-left: 500px;
  }

  .homework-car-box {
    float: left;
    margin-left: 200px;
  }

  #homework-searchBar {
    width: 1200px;
    margin: 0 auto;
  }
</style>
