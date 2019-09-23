<template>
	<div class="nav-head">
		<div class="top">
			<div class="top-center">
				<router-link to="/" class="logo"></router-link>
				<!-- <a href="" class="logo"></a> -->
				<div class="search">
					<div class="demo-input-suffix">
						<el-input placeholder="请输入内容" class="myClass myClass1" suffix-icon="el-icon-search" v-model="restaurants">
						</el-input>
					</div>

				</div>
				<div class="reg" v-if="isLogin">
					<router-link to="/reg" class="reg1">注册</router-link>
					<i class="sx">|</i>
					<router-link to="/login" class="reg1">登录</router-link>
					
				</div>
				<div v-else><img :src="avatar" alt=""><span>{{userName}}</span></div>
				<span @click="ret">注销</span>
			</div>
		</div>


		<div class="nav-list">
			<el-menu :default-active="activeIndex2" class="el-menu-demo nav-c" mode="horizontal" @select="handleSelect"
			 background-color="#fff" text-color="#000" active-text-color="#ff4466">
				<el-menu-item index="1" class="nav-h">
					<router-link to="/">首页</router-link>
				</el-menu-item>
				<el-menu-item index="2" class="nav-h">
					<router-link to="/sprout">萌物馆</router-link>
				</el-menu-item>
				<el-menu-item index="3" class="nav-h">
					<router-link to="/brand">品牌馆</router-link>
				</el-menu-item>
				<div class="shop">
					<router-link to="/brand" class="shoptext">
						<i class="shopl"></i>
						<span class="shoptext2">商铺入驻</span>
					</router-link>
				</div>
			</el-menu>
		</div>



	</div>



</template>

<script>
	export default {
		data() {
			return {
				restaurants: '',
				activeIndex2: '1',
				isLogin:true,
				avatar:"",
				userName:""
			};
		},
		created() {
			if(localStorage.getItem("userName")){
				this.isLogin = false;
				this.avatar = localStorage.getItem("avatar");
				this.userName = localStorage.getItem("userName");
			}
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			},
			ret(){
				this.isLogin = true;
			}
		}
	}
</script>

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
			line-height: normal;
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
</style>
