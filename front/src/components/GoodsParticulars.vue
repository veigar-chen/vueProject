<template>
  <div class="m_info">
    <div class="productinfo_main">
      <div class="left">
        <div class="face_box">
          <img :src="goodInfo.gPhoto" alt class="img_pro_head" />
        </div>
      </div>
      <div class="right">
        <p class="title">{{goodInfo.gName}}</p>
        <div class="price_box">
          <div class="price">
            <i>￥</i>
            <span class="now_price">{{goodInfo.gPrice}}</span>
          </div>
          <div class="fr">
            <p>
              交易成功:
              <i>{{goodInfo.gPayNum}}</i>
            </p>
          </div>
        </div>
        <div class="sku_box">
          <div class="sku">
            <span class="tit">样式</span>
            <div class="sku_list">
              <ul class="sku_style_ul">
                <li title="套装 现货" v-for="(item,index) in gPhotoArr" :key="index">
                  <a class="o">
                    <img :src="item" alt="套装 现货" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="sku">
            <span class="tit">尺码</span>
            <div class="sku_list">
              <ul class="sku_size_ul">
                <li v-for="(item,index) in gSize" :key="index">
                  <a>{{item}}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="stock_box">
          <div class="buycount">
            <span class="tit">库存</span>
            <span class="f1">
              <i class="this_stock">库存数量</i>件
            </span>
          </div>
        </div>
        <div class="buybtn">
          <a href="javascript:;" class="gobuy">立即剁手</a>
          <a href="javascript:;" class="addcart">加入购物车</a>
        </div>
        <div class="save_line">
          <span>种草</span>(
          <span>{{goodInfo.gColectNum}}</span> 人已种)
        </div>
      </div>
    </div>
    <div class="productinfo_desc">
      <div class="shop_left">
        <div class="shop_left_info">
          <div class="shopname_box">
            <div class="shopname">
              <a href="javasricpt:;">{{shopInfo.shopName}}</a>
            </div>
          </div>
          <div class="data">
            <div class="count">
              <div class="one">
                <i>{{shopInfo.goodsNum}}</i>
                <span>商品</span>
              </div>
              <div class="one">
                <i>{{shopInfo.concernNum}}</i>
                <span>关注</span>
              </div>
            </div>
          </div>
        </div>
        <div class="first_three_product_list">
          <ul class="product_list js_product">
            <li class="post">
              <a href="javascript:;">
                <img
                  src="https://pic.hanfugou.com/web/2019/8/14/20/c53369f453d84e1ea717288a366e5318.jpg_250x250.jpg"
                  alt
                />
              </a>
              <p class="price">
                <span class="buy">￥123</span>
              </p>
              <p class="name long_hide">
                <a href="javascript:;">汉尚华莲凡歌原创汉服对襟一片式高腰齐胸襦裙刺绣渐变色百搭款夏</a>
              </p>
              <p class="other">
                <a class="shops" href="javascript:;">哈好说话</a>
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div class="right">
        <div class="title_box">
          <div class="title">
            <a class="active" href="javascript:;" @click="lookGoods">
              <i></i>商品详情
            </a>
            <a href="javascript:;" @click="lookComms">
              <i></i>累计评论
              <span class="font_red">380</span>
            </a>
          </div>
        </div>
        <div class="desc_box">
          <div v-if="lookComm" class="descinfo" style="display: block;">
            <p class="productinfo_desc_tit">
              <i></i>商品描述
              <span class="line"></span>
            </p>
            <div class="text">如图</div>
            <p class="productinfo_desc_tit">
              <i></i>商品展示
              <span class="line"></span>
            </p>
            <div class="piclist">
              <img v-for="(item,index) in gPhotoArr" :key="index" :src="item" alt />
            </div>
          </div>
          <div v-else class="desccomm">
            <ul class="js_commlist">
              <li>
                <div class="user">
                  <a target="_blank">
                    <img src="https://pic.hanfugou.com/android/2019/4/1/78d1d489e0a142beb796b2f7f7b2fe50.jpg_50x50.jpg" alt="">
                  </a>
                  <a target="_blank">厌离晚吟</a>
                </div>
                <div class="info">
                  <div>图片评论</div>
                  <div>图片</div>
                  <p>19-09-23 10:29:47   上衣＋裙子全套（现货） 下单24小时内发出,XL</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      lookComm:true,
      goodInfo: "",
      shopInfo: "",
      commentInfo: "",
      gSize: [],
      gPhotoArr: []
    };
  },
  methods: {
    lookComms(){
      this.lookComm = false;
    },
    lookGoods(){
      this.lookComm = true;
    }
  },
  created() {
    this.axios
      .post("/goods/getAllInfo", {
        goodsId: "37" //$route.query.goodsId //路由传过来的ID
      })
      .then(res => {
        this.goodInfo = res.data[0][0];
        this.gSize = res.data[0][0].gSize.split(",");
        this.gPhotoArr = res.data[0][0].gPhotoArr.split(",");
        this.shopInfo = res.data[1][0];
        this.commentInfo = res.data[2][0];
        console.log(this.gSize);
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>

<style lang="scss">
.productinfo_desc .desccomm ul li .info {
  margin-left: 110px;
  padding-top: 10px;
}

.productinfo_desc .desccomm ul li .user a {
  display: block;
  text-align: center;
}

.productinfo_desc .desccomm ul li .info {
  margin-left: 110px;
  padding-top: 10px;
}

.productinfo_desc .desccomm ul li .user {
  width: 110px;
  float: left;
}

.productinfo_desc .desccomm ul li {
  display: inline-block;
  width: 100%;
  padding: 14px 0;
  border-bottom: 1px #f3f3f3 solid;
}

.productinfo_desc .desccomm {
  padding: 20px;
}



.product_list li .other .shops {
    margin-top: 8px;
    color: #aaa;
    text-decoration: underline;
    font-size: 12px;
}

.product_list li .other {
    margin: 0px 14px 14px 14px;
    height: 24px;
}

.product_list li .name {
    margin: 4px 14px 8px 14px;
    height: 21px;
}

.long_hide {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.product_list li .price .buy {
    color: #ff4466;
    font-size: 22px;
}

.product_list li .price {
    margin: 10px 14px 0 14px;
}

.product_list li img {
    display: block;
    width: 100%;
    height: 248px;
}

.first_three_product_list .product_list li {
  width: 238px;
  border: 1px #eeeeee solid;
  margin-right: 0px;
  margin-top: 10px;
}

.product_list li {
  position: relative;
  float: left;
  background: white;
  width: 248px;
  margin: 36px 36px 0 0;
}

.first_three_product_list .product_list {
    width: 100%;
}

.productinfo_desc .descinfo .piclist img {
    max-width: 100%;
    margin-bottom: 0;
    display: block;
    margin: 0px auto;
}

.productinfo_desc .descinfo .text {
    margin-bottom: 20px;
}

.productinfo_desc .descinfo .text,
.productinfo_desc .descinfo .text p {
  line-height: 28px;
  word-wrap: break-word;
}

.productinfo_desc_tit .line {
    background: url(https://www.hanfugou.com/Image/line_de.png) repeat;
    height: 6px;
    width: 100%;
    display: inline-block;
}

.productinfo_desc_tit i {
    background: url(https://www.hanfugou.com/Image/base_icon.png) no-repeat -34px -308px;
    width: 12px;
    height: 12px;
    display: inline-block;
    margin-right: 6px;
}

.productinfo_desc_tit {
    font-size: 16px;
    color: #f46;
    margin-top: 20px;
}

.productinfo_desc .descinfo {
    padding: 30px 0 0 34px;
}

.productinfo_desc .right .title .font_red {
    margin-left: 5px;
    color:#ff6699; 
}
.productinfo_desc .right .title a.active i {
    position: absolute;
    border-color: #f46 transparent transparent transparent;
    border-style: solid dashed dashed dashed;
    border-width: 4px;
    left: 50%;
    margin-left: -2px;
}

.productinfo_desc .right .title a.active {
    border-top: 3px #f46 solid;
    background: white;
    border-bottom: 1px white solid;
    color: #ff6699;
}

.productinfo_desc .right .title a {
    font-size: 18px;
    float: left;
    line-height: 60px;
    border-right: 1px #dcdcdc solid;
    border-top: 1px #dcdcdc solid;
    padding: 0 46px;
    position: relative;
}

.productinfo_desc .right .title {
    height: 61px;
    border-bottom: 3px #dcdcdc solid;
    background: white;
}

.productinfo_desc .right .title_box {
    height: 64px;
}

.productinfo_desc .right {
  width: 856px;
  float: left;
}

.shop_head_info .count .one i,
.shop_left_info .count .one i {
  display: block;
  height: 36px;
  color: #f46;
  font-size: 26px;
}

.shop_head_info .count .one span,
.shop_left_info .count .one span {
  display: block;
  color: #999;
}

.shop_head_info .count .one,
.shop_left_info .count .one {
  width: 103px;
  float: left;
  text-align: center;
  padding-bottom: 4px;
}

.shop_head_info .count .one:first-child,
.shop_left_info .count .one:first-child {
  width: 102px;
  border-right: 1px #ccc dotted;
}

.shop_head_info .count,
.shop_left_info .count {
  display: inline-block;
  margin: 6px 0 10px 0;
}

.shop_head_info .data,
.shop_left_info .data {
  padding: 10px 16px;
}

.shop_left_info .shopname {
    border-bottom: 1px #dfdfdf solid;
    background: #f6f6f6;
    padding: 17px 16px;
    font-size: 18px;
}

.shop_left_info .shopname_box {
    height: 62px;
    border-top: 1px #dfdfdf solid;
}

.shop_left_info {
    border: 1px #dfdfdf solid;
    border-top: none;
}

.productinfo_desc .right {
    width: 856px;
    float: left;
}

.shop_left {
    float: left;
    width: 240px;
}

.productinfo_desc {
    margin-top: 20px;
    width: 100%;
    display: inline-block;
}

.productinfo_main .right .save_line {
    margin: 28px 0 0 48px;
    height: 40px;
}

.productinfo_main .right .buybtn .addcart {
    float: left;
    background: #f46;
    color: white;
    font-size: 20px;
    padding: 7px 40px;
    margin-left: 10px;
}

.productinfo_main .right .buybtn .gobuy {
    float: left;
    border: 1px #f46 solid;
    padding:  6px 40px;
    font-size: 20px;
    color: #f46;
    background: #ffeff2;
}

.productinfo_main .right .buybtn {
  margin: 20px 0 0 48px;
  height: 44px;
}

.productinfo_main .right .stock_box .f1 i {
  font-size: 14px;
}

.productinfo_main .right .stock_box .f1 {
  display: inline-block;
  margin: 5px 0 0 10px;
  font-size: 14px;
  width: auto;
  height: 28px;
}
.productinfo_main .right .stock_box {
  margin-top: 20px;
  width: 100%;
  display: inline-block;
}

.productinfo_main .right .sku_list li a {
  border: 1px #dcdcdc solid;
  padding: 4px 10px;
  font-size: 12px;
  display: inline-block;
}

.productinfo_main .right .sku_list li {
  float: left;
  margin: 10px 10px 0 0;
}

.productinfo_main .right .sku_list li a:active {
  border: 2px #f46 solid;
  padding: 3px 9px;
}

.productinfo_main .right .sku_list li a.o {
  padding: 0px;
}

.productinfo_main .right .sku_list li a {
  border: 1px #dcdcdc solid;
  padding: 4px 10px;
  font-size: 12px;
  display: inline-block;
}

.productinfo_main .right .sku_list li img {
  width: 30px;
  height: 30px;
  padding: 1px;
  display: block;
}

.productinfo_main .right .sku_list li {
  float: left;
  margin: 10px 10px 0 0;
}

.productinfo_main .right .sku_list ul {
  width: 602px;
  margin-top: -10px;
  display: inline-block;
}

.productinfo_main .right .sku_list {
  width: 100%;
  display: inline-block;
  width: 592px;
}
.productinfo_main .right .tit {
  line-height: 28px;
  float: left;
  color: #999;
  margin-right: 20px;
}

.productinfo_main .right .sku {
  display: inline-block;
  width: 100%;
  margin-top: 10px;
  color: #999;
}

.m_info {
  width: 1100px;
  margin: 20px auto 0;
  height: 100%;
}

.productinfo_main {
  display: inline-block;
  margin-top: 30px;
  width: 100%;
}

.productinfo_main .left {
  width: 390px;
  float: left;
}

.productinfo_main .right {
  width: 680px;
  float: left;
  margin-left: 30px;
}

.productinfo_main .face_box {
  width: 390px;
  height: 390px;
  border: 1px solid #dcdcdc;
  display: table-cell;
  vertical-align: middle;
}

.productinfo_main .face_box .img_pro_head {
  max-width: 400px;
  max-height: 400px;
  display: inline-block;
  vertical-align: middle;
}

.productinfo_main .right .price_box {
  background-color: #faf5f9;
  overflow: hidden;
  padding: 10px;
}

.productinfo_main .right .title {
  font-size: 20px;
  margin-bottom: 10px;
}

.productinfo_main .right i {
  font-size: 24px;
}

.productinfo_main .right .price {
  float: left;
  font-size: 50px;
  color: #f46;
}

.productinfo_main .right .fr {
  float: right;
  margin-right: 10px;
  color: #999;
}

.productinfo_main .right .sku_box {
  margin-top: 20px;
}
</style>