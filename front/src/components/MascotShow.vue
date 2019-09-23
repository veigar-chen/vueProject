<template>
  <div class="goodsList" >
    <div class="goodsShow" v-for="goods in goodsAllInfo" :key="goods.gid">
      <div class="gPhoto"  @click="allGoods(goods.gid)"><img :src="goods.gPhoto" alt="imgs"/></div>
      <span class="gPrice">￥{{goods.gPrice}}</span>
      <p class="gDescription"  @click="allGoods(goods.gid)">{{goods.gDescription}}</p>
      <p class="lqh-shop">{{goods.shopName}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsAllInfo:[]
    };
  },
  components: {},
  created() {
    this.getAllGoods();
  },

  methods: {
    open() {},
    getAllGoods: function() {
      this.axios
        .post("/goods/getAllGoods")
        .then(res => {
          console.log(res.data);
          this.goodsAllInfo = res.data;
        })
        .catch(err => {
          console.error(err);
        });
    },
    allGoods:function(e){
      this.$router.push({path:"/product",query: { goodsId: e }});
    }
  }
};
</script>

<style lang="scss">
.goodsList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.shopOper {
  text-align: center;
}
.shopOper .el-button {
  width: 70px;
  height: 30px;
  padding: 0;
}

.goodsShow {
  width: 248px;
  height: 371px;
  background-color: #ffffff;
  margin: 15px 5px;
}
.gPhoto {
  width: 248px;
  height: 248px;
  background-color: blue;
}

.gPrice {
  color: #ff4466;
  font-size: 24px;
}

.gDescription {
  margin: 10px 5px;
  color: #707070;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.lqh-shop {
  color: #aaaaaa;
  margin: 0 5px;
}
</style>
