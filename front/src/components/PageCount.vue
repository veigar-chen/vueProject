<template>
  <div>
    <el-pagination
      background
      :page-size="100"
     @current-change="handleCurrentChange"
      layout="pager, next"
      :total="1000"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
    };
  },
  created() {},
  methods: {
    handleCurrentChange(e) {
      this.axios({
          method:'post',
          url: "/shop/getshops",
          data: {
              page:e
          }
      }).then(()=>{})
    }
  }
};
</script>
<style>
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #ff4466;
  color: #fff;
}
.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  margin: 0 5px;
  background-color: #f9f9f9;
  color: #ff4466;
  min-width: 30px;
  border-radius: 2px;
  border: 1px solid #ff4466;
  font-size: 14px;
  font-weight: 400;
}
.el-pagination.is-background .el-pager li:not(.disabled):hover {
  background-color: #fbe6ed;
  color: #ff4466;
}
</style>