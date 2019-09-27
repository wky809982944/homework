<template>
    <div>
      <ul>
          <li v-for="(shop,index) in shops" :key="index">
            <div>
                {{shop.self}}
            </div>
            <img :src="shop.img" alt="">
            <div>
              {{shop.desc}}
            </div>
            <div>
              {{shop.price}}
            </div>
          </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "ShopList",
        components: {},
        mounted(){
            this._getShops();
        },
        data() {
            return {
                shops:[
                    {
                        self: 0,
                        img:"",
                        desc: "",
                        price:0,
                    }
                ]
            }
        },
        methods:{
            _getShops() {
                let i;
                for (i = 0; i < 20; i++) {
                    this.shops.push({
                        self:1,
                        img:"http://p2.jmstatic.com/product/004/917/4917242_std/4917242_350_350.jpg",
                        desc:"御泥坊 【第2件5折】御泥坊亮颜葡萄籽补水提亮修护面膜21片",
                        price: 59.9
                    })
                }

            }
        }
    }
</script>

<style scoped>

</style>
