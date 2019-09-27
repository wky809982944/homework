<template>
  <div>
    <div>
      <el-row>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-col :span="4">&nbsp;</el-col>
          <el-col :span="1.5" class="homework-welcome">
            <el-menu-item index="1">欢迎来到聚美</el-menu-item>
          </el-col>
          <el-col :span="1">
            <el-submenu index="2">
              <template slot="title">请登录</template>
            </el-submenu>
          </el-col>
          <el-col :span="1">
            <el-menu-item index="3">快速注册</el-menu-item>
          </el-col>

          <el-col :span="7">&nbsp;</el-col>

          <el-col :span="1">
            <el-menu-item index="4">正品保证</el-menu-item>
          </el-col>
          <el-col :span="1">
            <el-menu-item index="5">订单查询</el-menu-item>
          </el-col>
          <el-col :span="1">
            <el-menu-item index="6">收藏的品牌</el-menu-item>
          </el-col>
          <el-col :span="1">
            <el-submenu index="7">
              <template slot="title">我的聚美</template>
              <el-menu-item index="7-1">我的订单</el-menu-item>
              <el-menu-item index="7-2">我的现金券</el-menu-item>
              <el-menu-item index="7-3">我的红包</el-menu-item>
              <el-menu-item index="7-4">我的余额</el-menu-item>
              <el-menu-item index="7-5">我的体现退款</el-menu-item>
              <el-menu-item index="7-6">我的收藏</el-menu-item>
              <el-menu-item index="7-7">会员中心</el-menu-item>
              <el-menu-item index="7-8">礼品卡兑换</el-menu-item>
            </el-submenu>
          </el-col>

          <el-col :span="1">
            <el-menu-item index="8">手机聚美</el-menu-item>
          </el-col>

          <el-col :span="1">
            <el-submenu index="9">
              <template slot="title">更多</template>
              <el-menu-item index="9-1">邀请好友</el-menu-item>
              <el-menu-item index="9-2">加入收藏</el-menu-item>
              <el-menu-item index="9-3">新浪微博</el-menu-item>
              <el-menu-item index="9-4">聚美微信</el-menu-item>
              <el-menu-item index="9-5">百度贴吧</el-menu-item>
              <el-menu-item index="9-6">腾讯微博</el-menu-item>
              <el-menu-item index="9-7">人人公众主页</el-menu-item>
            </el-submenu>
          </el-col>


        </el-menu>

      </el-row>
    </div>

    <div class="line"></div>

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

<style>
  .el-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
