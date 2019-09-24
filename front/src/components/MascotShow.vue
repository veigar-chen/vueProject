<template>
<div class="mcshow">
  <div class="goodsList">
    <div class="goodsShow" v-for="goods in goodsAllInfo" :key="goods.gid">
      <img :src="goods.gPhoto" alt="imgs" class="gPhoto" @click="allGoods(goods.gid)" />
      <span class="gPrice">￥{{goods.gPrice}}</span>
      <p class="gDescription" @click="allGoods(goods.gid)">{{goods.gDescription}}</p>
      <p class="lqh-shop">{{goods.shopName}}</p>
    </div>
  </div>
</div>

</template>

<script>
export default {
  data() {
    return {
      goodsAllInfo: []
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
    allGoods: function(e) {
      this.$router.push({ path: "/product", query: { goodsId: e } });
    }
  }
};
</script>

<style lang="scss">
.mcshow {
  width: 1100px;
  margin: 0 auto;
  display: block;
}
.goodsList {
  width: 1136px;
  display: inline-block;
}

.goodsShow {
  height: 371px;
  position: relative;
    float: left;
    background: white;
    width: 248px;
    margin: 36px 36px 0 0;
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
