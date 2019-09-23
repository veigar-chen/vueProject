<template>
<div class="goodsList">
    <div class="goodsShow" v-for="goods in goodsInfo" :key="goods.gid" >
    <img :src="goods.gPhoto" alt class="gPhoto" />
    <span class="gPrice">￥{{goods.gPrice}}</span>
    <p class="gDescription">{{goods.gDescription}}</p>
    <div class="shopOper">
        <el-button type="primary" @click="goodsEdit(goods.gid)">修改</el-button>
         <el-button type="danger" @click="goodsDel(goods.gid)">删除</el-button>
    </div>
  </div>
</div>
  
</template>

<script>
export default {
  data() {
    return {
      props: [],
      visible: false,
      goodsInfo:[],
    };
  },
  components:{
      
  },
  created() {
     this.getGoods();
  },
  
  methods: {
    open() {},
    getGoods:function(){
 this.axios.post('/shop',{shopId:localStorage.getItem("shopId")})
      .then(res => {
          this.goodsInfo = res.data
      })
      .catch(err => {
          console.error(err); 
      })
    },
    goodsEdit: function(e) {
      this.$router.push({path:'/manrage/edit',query:{goodsId:e}});
    },
    goodsDel: function(e) {
        this.axios({
          method:'post',
          url: "/shop/del",
          data: {
            goodsId:e,
            shopId:localStorage.getItem("shopId")
          }
        }).then((res)=>{
          this.getGoods();
        })
    }
  }
};
</script>

<style lang="scss">
.goodsList{
    display: flex;
    flex-wrap: wrap;
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
  background-color: #d1f;
  margin: 5px 5px;
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
  margin: 10px 0;
  color: #49f210;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>