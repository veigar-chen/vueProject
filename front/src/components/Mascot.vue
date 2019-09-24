<template>
  <!-- 萌物库 -->
  <div class="mascot">
    <!-- 萌物库列表 -->
    <div class="lqh-div">
      <div class="left">
        <ul class="left-ul">
          <li
            v-for="(item,index) in arrtitle"
            :key="index"
            class="left-li"
            @click="lqhli(index)"
          >{{item}}</li>
        </ul>
      </div>
      <div class="right">
        <ul v-for="(item,index) in arr" :key="index" class="lqh-ul">
          <li
            v-for="(items,index2) in item"
            :key="index2 = indexNum"
            :count="indexNum++"
            class="lqh-li"
            @click="lqhli(index2)"
          >{{items}}</li>
        </ul>
      </div>
    </div>

    <!-- 萌物库 商品 -->
    <mascot-show></mascot-show>

    <!-- 萌物库 分页 -->
    <div class="lqh-pager">
      <el-pagination
        background
        :page-size="100"
        @current-change="handleCurrentChange"
        layout="prev,pager, next"
        :total="1000"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      indexNum: 8,
      goodslist: [],
      props: [],
      arrtitle: [
        "女款套装：",
        "女款单品：",
        "男款套装：",
        "男款单品：",
        "汉元素：",
        "内衣/中衣：",
        "配饰：",
        "周边：",
        "童装："
      ],
      arr: [
        [
          "交领襦裙",
          "对襟襦裙",
          "齐胸襦裙",
          "袒领襦裙",
          "褙子套装",
          "袄裙",
          "圆领袍",
          "直裾",
          "曲裾",
          "襦袴"
        ],
        [
          "半臂",
          "襦/衫",
          "上袄",
          "褙子",
          "宋裤",
          "袄裙",
          "比甲",
          "披风",
          "大袖衫",
          "褶裙",
          "破裙",
          "马面",
          "补服"
        ],
        [
          "衣裳",
          "直裰",
          "直身",
          "深衣",
          "道袍",
          "圆领袍",
          "直裾",
          "曲裾",
          "襕衫",
          "曳撒",
          "贴里",
          "裋褐",
          "玄端",
          "官服"
        ],
        ["半臂", "上襦", "褙子", "大氅", "袴", "裳"],
        ["上衣下裙", "连衣裙", "上衣（女）", "上衣（男）", "裙", "裤", "衣裤"],
        ["抹胸", "中衣/裤/裙", "主腰", "义领", "云袜"],
        [
          "披帛",
          "斗篷",
          "发带",
          "冠巾",
          "首饰",
          "颈饰",
          "胸针",
          "手饰",
          "革带",
          "腰佩宫绦",
          "鞋/靴",
          "诃子",
          "其他"
        ],
        [
          "包类",
          "手捂",
          "扇子",
          "围脖/毛领",
          "布料",
          "油纸伞",
          "子母扣/扣子",
          "香事",
          "流苏",
          "弓箭",
          "文房",
          "篆刻",
          "茶道",
          "食味",
          "手工皂",
          "娃衣",
          "舞服",
          "其他"
        ],
        [
          "襦裙/袄裙/衣裳",
          "圆领/曲裾/曳撒/直裾",
          "襦/衫/褙子",
          "裙/裤",
          "裋褐",
          "汉元素",
          "配饰"
        ]
      ]
    };
  },

  props: ["goods"],
  methods: {
    lqhli: function(e) {
      console.log(e);
      this.$router.push({ path: "/sprout", query: { t: e } });
    },
    handleCurrentChange(e) {
      this.getGidList(e);
    },
    getGidList: function(e) {
      this.axios({
        method: "post",
        url: "/goods/getgidlist",
        data: {
          page: e || 1
        }
      })
        .then(response => {
          this.goodsAllInfo = response.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  
  components: {}
};
</script>

<style>
.mascot {
  width: 100%;
  background-color: #ededef;
  height: 100%;
  padding-top: 20px;
}

.lqh-div {
  width: 1100px;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  padding: 20px 0;
}

.left {
  width: 10%;
}
.right {
  width: 90%;
}
.left-ul {
  height: 50px;
  line-height: 50px;
}
.left-li {
  text-align: right;
  color: #555555;
  height: 50px;
  line-height: 50px;
  font-size: 15px;
}
.lqh-ul {
  width: 100%;
  height: 50px;
  line-height: 50px;
}
.lqh-li {
  margin: 0 15px;
  height: 25px;
  float: left;
  color: #999999;
  line-height: 50px;
  font-size: 16px;
}
.lqh-li:hover {
  color: #ff4466;
}
.left-li:hover {
  color: #ff4466;
}
.lqh-pager {
  padding: 50px 0;
  display: flex;
  justify-content: center;
}
</style>