<template>
    <div>
      <NavMenu></NavMenu>
      <SearchBar></SearchBar>
      <Title></Title>
      <Carousel></Carousel>
      <home_top_tab></home_top_tab>
      <tab_item></tab_item>
      <copy_right></copy_right>
    </div>
</template>

<script>
    import NavMenu from "../components/NavMenu";
    import SearchBar from "../components/SearchBar";
    import Carousel from "../components/Carousel";
    import home_top_tab from "../components/home_top_tab";
    import tab_list from "../components/tab_list";
    import tab_item from "../components/tab_item";
    import copy_right from "../components/copy_right";
    import Title from "../components/Title";
    export default {
        components: {
            NavMenu,
            Title,
            SearchBar,
            Carousel,
            home_top_tab,
            tab_list,
            tab_item,
            copy_right
        }
    }
</script>

<style>

</style>
