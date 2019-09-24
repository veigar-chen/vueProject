<template>
<div>
  <div class="jyybody">
    <div id="jyycontainer">
      <div id="jyygoodslist">
        <div class="jyyshopinfo">
          <p class="jyytitle">热门品牌</p>
          <div id="jyyshops">
            <ul id="jyyshopul">
              <li v-for="shopid in shopslist" :key="shopid.sid">
                <shops-bar :prop="shopid.sid"></shops-bar>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="jyypage">
     <div>
    <el-pagination
      background
      :page-size="100"
     @current-change="handleCurrentChange"
      layout="pager, next"
      :total="1000"
    ></el-pagination>
  </div>
    </div>
  </div>
  <div class="jyyfooter">
    <p>
    <a href="#">关于我们<i>|</i></a>
    <a href="#">商家入驻<i>|</i></a>
    <a href="#">入驻协议<i>|</i></a>
    <a href="#">新手指南<i>|</i></a>
    <a href="#">商务合作<i>|</i></a>
    <a href="#">汉服荟</a>
  </p>
   <p class="copyright">
     <a href="http://szcert.ebs.org.cn/5121967f-66cd-4d9c-acbc-9f8bb5024b4f"></a>
     CopyRight ©2018 深圳市汉服荟网络科技有限公司 版权所有"
     <a href="#">粤ICP备14046913号-1</a> 电话：0755-21503399
    
   </p>
  </div>
  
  
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      shopslist: []
    };
  },
  // props: ["currentsid"],
  methods: {
    handleCurrentChange(e) {
     this.getSidList(e);
     },
    getSidList: function(e) {
      this.axios({
        method: "post",
        url: "/shop/getsidlist",
        data: {
          page:e||1
        }
      })
        .then(response => {
          this.shopslist = response.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getSidList();
  }
};
</script>
<style>
.jyybody {
  background-color: rgb(237, 237, 239);
}


#jyycontainer {
  width: 1100px;
  background-color: rgb(237, 237, 239);
  margin: 0 auto;
}
.jyytitle {
  color: #888;
  font-size: 18px;
  font-weight: 100;
  margin: 24px auto;
}
#jyyshopul {
  width: 1100px;
}

#jyyshopul > li {
  list-style: none;
  background-color: #fff;
  padding-bottom: 30px;
  border-bottom: 1px #dcdcdc dashed;
  display: flex;
  padding-top: 30px;
  overflow: hidden;
  
}

#jyyshops {
  background-color: #fff;
}
.jyypage{
  text-align: center;
  margin-top: 50px;
padding-bottom: 80px;
}
.jyyfooter{
   background: white;
    padding: 60px 0 20px 0;
    min-width: 1100px;
    margin-top: 10px;

}  
.jyyfooter>p{
  text-align: center;
  font-size: 14px;
    color:rgb(85, 85, 85);
    margin-top: 15px;
    margin-bottom: 30px;
}
.jyyfooter>p>a {
  font-size: 14px;
    text-decoration: none;
    cursor: pointer;
    outline: none;
    color:rgb(85, 85, 85);

}
.jyyfooter>p>a:hover {
    color: #ff4466;
}
.jyyfooter p i {
    color: #ddd;
    margin: 0 14px;
}


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