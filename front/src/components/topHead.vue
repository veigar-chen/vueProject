<template>
  <div id="header">
    <div class="header_top">
      <div class="m_info">
        <a href class="logo"></a>
        <div class="logins fr">
          <span v-if="isLogin">欢迎登陆,{{userName}}</span>
          <a v-else href="/reg" >注册</a>&nbsp;&nbsp;|&nbsp;&nbsp;
          <a v-if="isLogin" href="/login">注销登陆</a>
          <a v-else href="/login">登录</a>
        </div>
        <div class="search fr">
          <input type="text" placeholder="请输入您要搜索的商品或店铺" />
          <a href></a>
        </div>
      </div>
    </div>
    <div class="header_nav">
      <div class="m_info">
        <div class="header_nav_list">
          <a href="/" class="default">首页</a>
          <a href="/" class="type">萌物库</a>
          <a href="/shop" class="shop">品牌馆</a>
          <a href="/manrage" class="default">同袍社区</a>
        </div>
        <a class="fr shop_manage font_red" href>
          <i></i>
          店铺入驻
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data:function(){
        return {
            isLogin:false,
            userName:""
        }
    },
    created() {
        if(localStorage.getItem("userName")){
            this.isLogin = true;
            this.userName = localStorage.getItem("userName");
        }
    },
}
</script>

<style lang="scss">
.header_nav .shop_manage {
  font-size: 14px;
  margin-top: 12px;
}

.header_nav .shop_manage i {
  width: 14px;
  height: 14px;
  background: url(https://www.hanfugou.com/Image/base_icon.png) no-repeat 0 -230px;
  display: inline-block;
  vertical-align: middle;
  margin: -2px 4px 0 0;
}

.header_nav .shop_manage {
  font-size: 14px;
  margin-top: 12px;
}

.header_nav_list a:hover,
.header_nav a.active {
  border-bottom-color: #ff4466;
  color: #ff4466;
}

.header_nav_list a {
  height: 43px;
  width: 106px;
  float: left;
  line-height: 46px;
  font-size: 16px;
  border-bottom: 3px #fff solid;
  text-align: center;
}

.m_info {
  width: 1100px;
  margin: 0px auto;
  height: 100%;
}

.header_top .search .topage {
  width: 16px;
  height: 16px;
  background: url(https://www.hanfugou.com/Image/base_icon.png) no-repeat 0 -51px;
  float: right;
  margin: 7px 10px 0 0;
}

.header_top .search input[type="text"] {
  background: none;
  color: #fbe5e9;
  line-height: 30px;
  height: 30px;
  margin-left: 16px;
  width: 290px;
  padding: 0px;
  border: none;
  display: inline-block;
}

.header_top .logins a {
  color: #ffd3dc;
}

.header_top .search {
  margin-top: 20px;
  width: 340px;
  height: 30px;
  border-radius: 40px;
  background: #ff627f;
}

.header_top .logins {
  margin: 24px 20px 0;
  color: #fff;
}

.header_top .logo {
  background: url(https://www.hanfugou.com/Image/base_icon.png?v=3);
  width: 310px;
  height: 36px;
  display: inline-block;
  margin-top: 18px;
}

.m_info {
  width: 1100px;
  margin: 0px auto;
  height: 100%;
}

.header_nav {
  height: 46px;
  background: #fff;
  border-bottom: 1px #eee solid;
}

.header_top {
  height: 70px;
  background: #ff4466;
}

#header {
  width: 100%;
  min-width: 1100px;
}
</style>
