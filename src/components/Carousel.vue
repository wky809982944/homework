<template>
  <div class="block">
    <el-carousel height="500px">
      <el-carousel-item v-for="carousel in carousels" :key="carousel.uuid">
        <img :src="IMG_BASE_URL+carousel.url" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  import {IMG_BASE_URL} from "../api";
  import {mapState} from "vuex";
  export default {
      data() {
          return {
              IMG_BASE_URL
          };
      },
      mounted() {
          this.$store.dispatch('getCarousels');
      },
      computed:{
          ...mapState(['carousels']),
      },
      methods:{
      }

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
