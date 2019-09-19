<template>
  <!-- 萌物库 -->
  <div class="mascot">
       <!-- 萌物库列表 -->
    <div class="category">
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <el-button type="text" class="item">女款套装：</el-button>
            <el-button type="text">交领襦裙</el-button>
            <el-button type="text">文字按钮1</el-button>
            <el-button type="text">文字按钮1</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <el-button type="text" class="item">女款单品：</el-button>
            <el-button type="text">文字按钮1</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style>
.mascot {
  height: 300px;
  background-color: #ededef;
}
.category {
  width: 80%;
  margin: 0 auto;
  background-color: #fff;
}
.el-button {
    color: #555555;
}
.item {
    color: #555555;
}
.el-row {
  width: 90%;
  margin: 0 auto;
}
.el-col {
  border-bottom: 1px dashed #eeeeee;
}

.grid-content {
  min-height: 36px;
}
</style>