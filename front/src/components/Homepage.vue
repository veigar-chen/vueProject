<template>

	<div class="nav-list">
		<div class="top-lun">
			<el-carousel>
				<el-carousel-item v-for="item in sdbdoods" :key="item.gid">
					<img :src="item.gPhoto" alt="" class="sdb-lun">
				</el-carousel-item>
			</el-carousel>
		</div>
		<div class="seller">
			<div class="title">本周热卖</div>
			<ul class="sellers">
				<li v-for="e in sdbgoods" :key="e.gid" class="minbox">
					<img :src="e.gPhoto" class="img1" alt="">
					<div class="text">
						<p class="price">
							<i class="men">￥</i>
							{{e.gPrice}}
						</p>
						<div class="content">{{e.gDescription}}</div>
					</div>
				</li>
			</ul>
			<div class="title">汉服女装</div>
			<ul class="sellers">
				<li v-for="e in womengoods" :key="e.gid" class="minbox">
					<img :src="e.gPhoto" class="img1" alt="">
					<div class="text">
						<p class="price">
							<i class="men">￥</i>
							{{e.gPrice}}
						</p>
						<div class="content">{{e.gDescription}}</div>
					</div>
				</li>
			</ul>

			<div class="title">汉服男装</div>
			<ul class="sellers">
				<li v-for="e in mengoods" :key="e.gid" class="minbox">
					<img :src="e.gPhoto" class="img1" alt="">
					<div class="text">
						<p class="price">
							<i class="men">￥</i>
							{{e.gPrice}}
						</p>
						<div class="content">{{e.gDescription}}</div>
					</div>
				</li>
			</ul>

			<div class="newbooks"></div>
			<div class="title">汉元素</div>
			<ul class="sellers">
				<li v-for="e in chinesegoods" :key="e.gid" class="minbox">
					<img :src="e.gPhoto" class="img1" alt="">
					<div class="text">
						<p class="price">
							<i class="men">￥</i>
							{{e.gPrice}}
						</p>
						<div class="content">{{e.gDescription}}</div>
					</div>
				</li>
			</ul>


			<div class="title">周边配饰</div>
			<ul class="sellers">
				<li v-for="e in accessoriesgoods" :key="e.gid" class="minbox">
					<img :src="e.gPhoto" class="img1" alt="">
					<div class="text">
						<p class="price">
							<i class="men">￥</i>
							{{e.gPrice}}
						</p>
						<div class="content">{{e.gDescription}}</div>
					</div>
				</li>
			</ul>

			<div class="title">热门品牌</div>
			<ul class="sellers1">
				<li v-for="e in sdbbrand" :key="e.sid" class="minbox1">
					<img :src="e.shopPhoto" class="img2" alt="">
				</li>
			</ul>


		</div>
	</div>

</template>

<script>
	export default {
		data: function() {
			return {
				sdbdoods: [],
				sdbgoods: [],
				sdbbrand: [],
				womengoods: [],
				mengoods: [],
				chinesegoods: [],
				accessoriesgoods: []


			}

		},

		created() {
			this.getbooks();
			this.getsdbdoods();
			this.getsdbbrand();
			this.getwomens();
			this.getmens();
			this.getchineses();
			this.getaccessories();
		},

		components: {

		},

		methods: {
			// 本周热卖
			getbooks: function() {
				this.axios.post('/goods/getbooks', {
						gType: "1"
					})
					.then(res => {
						this.sdbgoods = res.data
					})
					.catch(err => {
						console.error(err);
					})
			},


			// 女装
			getwomens: function() {
				this.axios.post('/goods/getwomens', {
						gType: "1"
					})
					.then(res => {
						this.womengoods = res.data
					})
					.catch(err => {
						console.error(err);
					})
			},

			// 男装
			getmens: function() {
				this.axios.post('/goods/getmens', {
						gType: "3"
					})
					.then(res => {
						this.mengoods = res.data
					})
					.catch(err => {
						console.error(err);
					})
			},
			// 汉元素
			getchineses: function() {
				this.axios.post('/goods/chineses', {
						gType: "4"
					})
					.then(res => {
						this.chinesegoods = res.data
					})
					.catch(err => {
						console.error(err);
					})
			},
			// 周边配饰
			getaccessories: function() {
				this.axios.post('/goods/accessories', {
						gType: "6"
					})
					.then(res => {
						this.accessoriesgoods = res.data
					})
					.catch(err => {
						console.error(err);
					})
			},
			// 轮播图
			getsdbdoods: function() {
				this.axios.post('/shop/sdbdoods', {
						shopId: "6"
					})
					.then(res => {
						this.sdbdoods = res.data
					})
					.catch(err => {
						console.error(err);
					})
			},
			// 商铺图标
			getsdbbrand: function() {
				this.axios.post('/shop/sdbbrand', {
						// shopId: "6"
					})
					.then(res => {
						this.sdbbrand = res.data
					})
					.catch(err => {
						console.error(err);
					})
			}
		},

	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	.el-carousel__item h3 {
		color: #475669;
		font-size: 18px;
		opacity: 0.75;
		line-height: 300px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}

	.nav-list {
		width: 80%;
		margin: 0 auto;
	}


	.title {
		width: 100%;
		height: 100px;
		text-align: center;
		line-height: 100px;
		font-size: 28px;
		color: #8b8b8b;
		background-color: #ededef;
	}

	.sellers {
		width: 100%;
		display: flex;
		/* background-color: #ededef; */
		justify-content: space-between;
		flex-wrap: wrap;

	}

	.sellers1 {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
	}

	.minbox {
		width: 230px;
		height: 370px;
		margin: 10px 0 10px 0;
	}

	.img1 {
		width: 100%;
		height: 248px;

	}

	.text {
		width: 100%;
		height: 122px;
		background-color: #fff;
		padding: 5px;
		box-sizing: border-box;
	}

	.price {
		width: 100%;
		height: 46px;
		line-height: 46px;
		color: #ff4466;
		font-size: 34px;
		font-weight: 100;
	}

	.price .men {
		font-size: 18px;
	}

	.content {
		width: 100%;
		height: 68px;
		color: #555555;
		font-size: 14px;
		overflow: hidden;
	}

	.content:hover {
		color: #ff4466;
	}

	.newbooks {
		width: 100%;
		height: 140px;
		margin-top: 10px;
		background-image: url(https://pic.hanfugou.com/pc/2016/9/30/23/088b331f59d74d43a16052d8360525b6.png);
		background-size: 100% 140px;
	}

	.img1:hover {
		cursor: pointer;
		/* -webkit-animation:scaleout 1s infinite ; */
		animation: scaleout 1s infinite;

	}

	@-webkit-keyframes scaleout {
		0% {
			-webkit-transform: scale(1.0);
			opacity: 0.8;
		}

		100% {
			-webkit-transform: scale(1.0);
			opacity: 0.8;
		}

	}

	.top-lun {
		width: 100%;
		margin: 20px auto;
	}

	.sdb-lun {
		/* margin: 10px auto; */
		width: 100%;
		height: 100%;
	}



	.minbox1 {
		width: 176px;
		height: 176px;
		position: relative;
		border: 1px solid #f3f3f3;
		background-color: #fff;
	}

	.minbox1:hover {
		background-color: #fafafa;
		cursor: pointer;
	}


	.img2 {
		width: 100px;
		height: 100px;
		/* background-color: #8B8B8B; */
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		overflow: hidden;
	}
</style>
