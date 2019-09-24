<template>
	  
	<!-- 底部 -->
	<div class="sdb-button">
		<div class="sdb-boxs">
			<router-link to="/" class="sdb-news">关于我们</router-link>
			<i class="sdb-box1">|</i>
			<router-link to="/" class="sdb-news">商家入驻</router-link>
			<i class="sdb-box1">|</i>
			<router-link to="/" class="sdb-news">入驻协议</router-link>
			<i class="sdb-box1">|</i>
			<router-link to="/" class="sdb-news">新手指南</router-link>
			<i class="sdb-box1">|</i>
			<router-link to="/" class="sdb-news">商务合作</router-link>
			<i class="sdb-box1">|</i>
			<router-link to="/" class="sdb-news">汉服荟</router-link>
		</div>
		<div class="sdb-num">
			<router-link to="/"><p class="sdb-img"></p></router-link>
			<p class="sdb-text">CopyRight ©2018 深圳市汉服荟网络科技有限公司 版权所有 </p>
			<a href="http://www.beian.miit.gov.cn" class="sdb-news">粤ICP备14046913号-1</a>
			
			<!-- <router-link to="/" class="sdb-news">粤ICP备14046913号-1</router-link> -->
			<p class="sdb-text"> 电话：0755-21503399</p>

		</div>
	</div>
</template>

<script>
</script>

<style>
	.sdb-button {
		width: 100%;
		height: 200px;
		margin-top: 80px;
		
		background-color:white;
	}
	.sdb-boxs{
		width: 100%;
		height: 40px;
		text-align: center;
		line-height: 40px;
		padding-top: 50px;
		
	}
	
	.sdb-news{
		color: #555555;
		font-size: 14px;
	}
	.sdb-news:hover{
		color:#ff4466;
	}
	.sdb-box1{
		font-size: 14px;
		color: #ddd;
		margin: 0 14px;
	}
	.sdb-num{
		width: 100%;
		height: 40px;
		margin-top: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.sdb-img{
		width: 29px;
		height: 34px;
		display: inline-block;
		background-image: url(https://www.hanfugou.com/Image/ebs_icon.png);
		background-position: center center;
	}
	.sdb-text{
		color: #555555;
		font-size: 14px;
		margin-left:15px;
		margin-right:10px;
	}
</style>
