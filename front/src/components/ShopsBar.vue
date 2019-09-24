<template>
  <div class="jyyshopbar">
    <div class="jyyshop">
      <img :src="shopsInfo[0].SImg" alt />
      <p>{{shopsInfo[0].shopName}}</p>
      <p class="jyysInfo">
        商品：
        <span class="jyygnum">{{shopsInfo[0].goodsNum}}</span>
      </p>
    </div>

    <div class="jyygoods">
      <goods-showshop v-for="item in goodsInfo" :key="item.gid" :goods="item" ></goods-showshop>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      goodsInfo: [],
      shopsInfo: [{ SImg: "", shopName: "", goodsNum: "" }]
    };
  },
  props:["prop"],
  methods: {

    
      //获取商铺商品信息
    getShopGoods: function() {
      this.axios({
        method: "post",
        url: "shop/getshopgoods",
        data: {
          sid: this.prop
        }
      })
        .then(response => {
          this.goodsInfo = response.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
      //获取商铺信息
    getShops: function() {
      this.axios({
        method: "post",
        url: "/shop/getshops",
        data: {
          sid: this.prop
        }
      })
        .then(response => {
          this.shopsInfo = response.data;
        //   console.log(this.shopsInfo);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getShopGoods();
    this.getShops();
  }
};
</script>
<style>


.jyyshop {
  width: 116px;
  height: 288.8px;
  padding-right: 20px;
  text-align: center;
  margin-left: 32px;
  margin-right: 10px;
  border-right: 1px #f3f3f3 solid;
  background-color: rgb(255, 255, 255);
}
.jyyshop > img {
  width: 70px;
  height: 70px;
  margin: 0 0 8px 15px;
  border-radius: 6px;
  display: block;
}
.jyyshopbar {
  width: 100%;
  display: flex;
  height: 288.8px;
}
.jyygoods {
  display: flex;
  height: 288px;
  overflow: hidden;
  justify-content: flex-start;
}
.jyygnum {
  color: #ff6699;
  font-size: 24px;
}
.jyysInfo {
  margin-top: 10px;
  font-size: 14px;
  color: rgb(85, 85, 85);
}
</style>