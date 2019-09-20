<template>
  <div class="manrage">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">所有商品</el-menu-item>
          <el-menu-item index="2">
            商品添加
          </el-menu-item>
          <el-submenu index="3">
            <template slot="title">我的工作台</template>
          </el-submenu>
          <el-menu-item index="4">
            <a href="https://www.ele.me" target="_blank">订单管理</a>
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-container class="my-container">
        <el-aside width="200px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-setting"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
          <!-- <goods-show v-for="item in goodsInfo" :key="item.gid" :goods="item"></goods-show> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import GoodsAdd from "@/components/GoodsAdd.vue";
import GoodsShow from "@/components/GoodsShow.vue";
import GoodsEdit from "@/components/GoodsEdit.vue";



export default {
  data() {
    return {
      activeIndex: "1",
    };
  },
  components:{
    GoodsAdd,GoodsShow,GoodsEdit
  },
  methods: {
    handleSelect(key, keyPath) {
      switch(key){
        case "1":this.$router.push({path:"/manrage"});break;
        case "2":this.$router.push({path:"/manrage/add"});break;
      }
    },
    handleOpen(key, keyPath) {
      
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath,1234);
    }
  },
};
</script>

<style lang="scss">
.manrage {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.el-container .el-header {
  padding: 0;
}

.el-menu-vertical-demo{
  height: calc(100vh - 60px);
}

.el-container .el-main {
  height: calc(100vh - 60px);
  padding: 0;
}
</style>