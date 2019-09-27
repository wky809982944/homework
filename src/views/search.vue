<template>
    <div>
      <NavMenu></NavMenu>
      <SearchBar></SearchBar>
      <Title></Title>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <ShopList></ShopList>
        </el-container>
        <el-aside width="200px">Aside</el-aside>
      </el-container>
    </div>
</template>

<script>
    import NavMenu from "../components/NavMenu";
    import SearchBar from "../components/SearchBar";
    import Title from "../components/Title";
    import ShopList from "../components/ShopList";
    export default {
        components: {
            ShopList,
            NavMenu,
            Title,
            SearchBar,
        },
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style scoped>

</style>
