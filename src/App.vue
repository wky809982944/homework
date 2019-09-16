<template>
  <div>
    <NavMenu></NavMenu>
    <br>
    <SearBar></SearBar>
    <br>
    <br>
    <Title></Title>
    <br>
    <Carousel></Carousel>
  </div>
</template>

<script>
    import NavMenu from "./components/NavMenu";
    import Title from "./components/Title";
    import SearBar from "./components/SearBar";
    import Carousel from "./components/Carousel";
    export default {
        name: 'App',
        components: {
            NavMenu,
            Title,
            SearBar,
            Carousel
        }
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
