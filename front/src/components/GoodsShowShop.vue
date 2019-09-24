<template>
  <div class="jyygoodsShow">
    <div class="jyygPhoto">
      <img :src="goods.gPhoto" @click="goodsdetial" alt />
    </div>
    <span class="jyygPrice" >￥{{goods.gPrice}}</span>
    <p class="jyygDescription" @click="goodsdetial">{{goods.gName}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      props: []
    };
  },
  methods: {
    goodsdetial:function(){
    this.$router.push({path:'/product',query:{goodsId:this.goods.gid}})
    }
  },
  props: ["goods"]
};
</script>

<style lang="scss">
.jyygoodsShow {
  width: 200px;
  height: 288.8px;
  margin-left: 31px;
  overflow-y: no;
  text-align: center;
}
.gPhoto {
  width: 100%;
  height: 70%;
}
.jyygPhoto > img {
  width: 200px;
  height: 200px;
  cursor: pointer;
}
.jyygPrice {
  color: #ff4466;
  font-size: 24px;
}

.jyygDescription {
  margin-top: 10px;
  font-size: 14px;
  color: #555555;
  overflow: hidden;
    // text-overflow: ellipsis;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
     /*! autoprefixer: off */
    -webkit-box-orient: vertical;
}
.jyygDescription:hover{
  color: #ff4466;
  cursor: pointer;
}

.jyyshopName {
  color: #ccc;
  font-size: 14px;
}
</style>