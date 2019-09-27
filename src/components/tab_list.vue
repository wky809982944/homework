<template>
    <div>
      <el-row>
        <el-col :span="5">&nbsp;</el-col>
        <el-col :span="7">
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                shop:[
                    {
                        self: 0,
                        img:"",
                        desc: "",
                        price:0,
                    }
                ]
            }
        },
    }
</script>

<style scoped>

</style>
