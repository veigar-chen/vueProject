<template>
  <div class="addWrapp">
    <h1 class="addH1">商品修改</h1>
    <div class="addFrom">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="商品名称">
          <el-input v-model="form.gName"></el-input>
        </el-form-item>
        <el-form-item label="商品类型">
          <el-select v-model="form.gType" placeholder="请选择商品类型">
            <el-option label="女款套装" value="0"></el-option>
            <el-option label="女款单品" value="1"></el-option>
            <el-option label="男款套装" value="2"></el-option>
            <el-option label="男款单品" value="3"></el-option>
            <el-option label="汉元素" value="4"></el-option>
            <el-option label="内衣/中衣" value="5"></el-option>
            <el-option label="配饰" value="6"></el-option>
            <el-option label="周边" value="7"></el-option>
            <el-option label="童装" value="8"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品分类">
          <el-radio-group v-model="form.gSort">
            <el-radio v-for="(item,index) in goodsSort" :key="index" :label="item"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="衣服尺码">
          <el-checkbox-group v-model="form.gSize">
            <el-checkbox label="M" name="type"></el-checkbox>
            <el-checkbox label="S" name="232"></el-checkbox>
            <el-checkbox label="L" name="type"></el-checkbox>
            <el-checkbox label="XL" name="type"></el-checkbox>
            <el-checkbox label="XXL" name="type"></el-checkbox>
            <el-checkbox label="其它" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item label="商品图片">
          <el-upload
            action="http://localhost:8888/goods/Photo"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-success="handleSuccess"
            :file-list="fileList"
            :limit="5"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible" size="tiny">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </el-form-item>

        <el-form-item label="商品价格">
          <el-input v-model="form.gPrice"></el-input>
        </el-form-item>

        <el-form-item label="商品描述">
          <el-input type="textarea" v-model="form.gDescription"></el-input>
        </el-form-item>
        <el-form-item label="商品详情">
          <el-input type="textarea" v-model="form.gInfo"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确定</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      fileList: [],
      goodsSortAll: [
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
      ],
      goodsSort: [],
      form: {
        gPhotoArr: [],
        gName: "",
        gSort: "",
        gType: "",
        gSize: [],
        gDescription: "",
        gInfo: "",
        gPrice: "",
        sid: "1",
        gPhoto: "",
        gid: ""
      }
    };
  },
  created() {
    this.axios({
      method: "post",
      url: "/shop/getGoods",
      data: {
        goodsId: this.$route.query.goodsId
      }
    })
      .then(res => {
        console.log(res.data);
        res.data[0].gSize = res.data[0].gSize.split(",");
        let PhotoArr = res.data[0].gPhotoArr.split(",");
        PhotoArr.forEach(item => {
          this.fileList.push({ url: item });
        });
        this.form = res.data[0];
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {
    "form.gType": function() {
      this.goodsSort = this.goodsSortAll[this.form.gType];
    }
  },
  methods: {
    open() {
      this.$message({
        message: "修改成功",
        type: "success"
      });
    },
    open1() {
      this.$message({
        message: "修改失败",
        type: "error"
      });
    },
    handleRemove(file, fileList) {
      console.log(file);

      console.log(this.form.gPhotoArr);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleSuccess(response, file, fileList) {
      this.fileList.push({ url: file.response.adress });
      console.log(this.form.gPhotoArr);
    },
    onSubmit() {
      let gPhotoStr = "";
      let isFirst = true;
      this.fileList.forEach(item => {
        gPhotoStr += (isFirst ? "" : ",") + item.url;
        isFirst = false;
      });
      this.form.gPhotoArr = gPhotoStr;
      this.form.gSize = this.form.gSize.toString();
      this.axios({
        method: "post",
        url: "/shop/edit",
        data: this.form
      })
        .then(res => {
          if (res.data.code == 1) {
            this.open();
            this.$router.push({ path: "/manrage" });
          } else {
            this.open1();
          }
        })
        .catch(err => {});
    }
  }
};
</script>

<style lang="scss">
.editWrapp {
  min-width: 960px;
  background-color: aquamarine;
  width: 100%;
  height: auto;
}

.editFrom {
  width: 100%;
  height: 100%;
}

.editH1 {
  font-size: 32px;
}
</style>