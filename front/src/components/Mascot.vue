<template>
  <!-- 萌物库 -->
  <div>


    <div class="mascot">
      <!-- 萌物库列表 -->
      <div class="lqh-div">
        <div class="left">
          <ul class="left-ul">
            <li v-for="(item,index) in arrtitle" :key="index" class="left-li">{{item}}</li>
          </ul>
        </div>
        <div class="right">
          <ul v-for="(item,index) in arr" :key="index" class="lqh-ul">
            <li v-for="(items,index) in item" :key="index" class="lqh-li">{{items}}</li>
          </ul>
        </div>
      </div>
      <div class="mcshow">
        <mascot-show></mascot-show>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  methods: {},
  components: {}
};
</script>

<style>
.mascot {
  width: 100%;
  padding-top: 20px;
  height: 1000px;
  background-color: #ededef;
}

.lqh-div {
  width: 85%;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
}
.mcshow {
  width: 85%;
  margin: 20px auto 0;
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
  font: 14px;
}
.lqh-ul {
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: block;
}
.lqh-li {
  margin: 0 15px;
  height: 25px;
  float: left;
  color: #999999;
}
.lqh-li:hover {
  color: #ff4466;
}
.left-li:hover {
  color: #ff4466;
}
</style>