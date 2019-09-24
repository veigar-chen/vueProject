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

<<<<<<< HEAD
<style>
	/* 修改input默认样式,只作用于该页面 */
	.myClass input.el-input__inner {
		width: 340px;
		height: 30px;
		display: inline-block;
		border-radius: 40px;
		background: #ff627f;
		border: none;
		box-sizing: border-box;
		line-height: 30px;
		color: #fff;
	}

	.myClass1 .el-input__icon {
		height: 100%;
		width: 25px;
		text-align: center;
		line-height: 30px;
		color: #fff;
	}

	.nav-c .el-menu-item {
		font-size: 16px;
	}
</style>


<style scope>
	* {
		padding: 0;
		margin: 0;
		list-style: none;
		text-decoration: none;
		box-sizing: border-box;

	}

	.reg1 {
		text-decoration: none;
		color: #fff;
		font-size: 14px;
		padding-right: 15px;
		box-sizing: border-box;
	}

	.sx {
		color: #fff;
		font-size: 14px;
		padding-right: 15px;
		box-sizing: border-box;
	}

	.reg1:hover {
		color: #fcff00;
	}

	.top {
		width: 100%;
		height: 70px;
		background-color: #ff4466;
	}

	.top-center {
		width: 80%;
		height: 70px;
		display: flex;
		align-items: center;
		margin: 0 auto;
	}

	.logo {
		width: 310px;
		height: 36px;
		display: inline-block;
		background-image: url(https://www.hanfugou.com/Image/base_icon.png?v=3);
		background-position: 0 0;
		margin-top: 17px;

	}

	.search {
		margin-left: 270px;

	}

	/* .my-autocomplete {
		li {
			line-height:normal;
			padding: 7px;
			.name {
				text-overflow: ellipsis;
				overflow: hidden;
			}

			.addr {
				font-size: 12px;
				color: #b4b4b4;
			}

			.highlighted .addr {
				color: #ddd;
			}
		}
	} */



	.reg {
		width: 120px;
		height: 30px;
		margin-left: 20px;
		line-height: 30px;
	}


	.nav-list {
		width: 80%;
		margin: 0 auto;
	}

	.shop {
		width: 120px;
		/* height:60px; */
		margin-left: 940px;
		margin-top: 16px;
		font-size: 14px;

	}

	.shoptext {
		width: 120px;
		height: 30px;
		line-height: 30px;
		display: flex;
		align-items: center;
		color: #ff6699 !important;
		display: flex;
	}

	.shoptext2 {
		color: #ff6699;
		display: block;
		height: 30px;
		line-height: 30px;
	}

	.shopl {
		width: 18px;
		height: 15px;
		display: inline-block;
		background-image: url(https://www.hanfugou.com/Image/base_icon.png?v=3);
		background-position: 0px -230px;
	}
=======
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
>>>>>>> a8fcc88009387e6c93ab1d9932a5411c7bb0a8e7
</style>
