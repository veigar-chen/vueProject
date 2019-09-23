<template>
	<div class="names">
		<top-head></top-head>
		<router-view></router-view>
	</div>
</template>

<script>
import GoodsParticulars from "@/components/GoodsParticulars.vue";
import Mascot from "@/components/Mascot.vue";
export default {
  data() {
    return {
    };
  },
  methods: {
    },
  components:{
   GoodsParticulars,
   Mascot
  }
};

	
</script>

<style>
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
</style>
