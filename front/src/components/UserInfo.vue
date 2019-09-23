<template>
  <div class="infoWindow">
    <div>{{$route.params.tel}}</div>
    <div class="infoLog">信息填写</div>

    <div class="infoMain">
      <el-upload
        class="avatar-uploader"
        action="http://localhost:8888/user/avatar"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm form"
      >
        <el-form-item label="昵称" prop="userName">
          <el-input v-model="ruleForm.userName"></el-input>
        </el-form-item>
        <div class="gender">
          <el-radio v-model="radio" label="1">小哥哥</el-radio>
          <el-radio v-model="radio" label="0">小姐姐</el-radio>
        </div>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var validataUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入昵称"));
        return;
      }
      this.axios({
        method: "post",
        url: "/user/isExist",
        data: {
          userName: value
        }
      })
        .then(res => {
          if (res.data.code == -1) {
            callback(new Error("该昵称已存在"));
          } else {
            callback();
          }
        })
        .catch(error => {
          console.log(error);
        });
    };
    return {
      ruleForm: {
        userName: ""
      },
      rules: {
        userName: [{ validator: validataUser, trigger: "blur" }]
      },
      radio: "1",
      imageUrl: ""
    };
  },
  methods: {
    open() {
      this.$message({
        showClose: true,
        message: "注册完成",
        type: "success"
      });
    },
    open1() {
      this.$message({
        showClose: true,
        message: "注册失败",
        type: "error"
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.axios({
            method: "post",
            url: "/user/reg",
            data: {
              tel: localStorage.getItem("tel"),
              passWord: localStorage.getItem("passWord"),
              userName: this.ruleForm.userName,
              gender: this.radio,
              avatar: this.imageUrl
            }
          })
            .then(response => {
              if (response.data.code == 1) {
                this.open();
                localStorage.setItem("userName", response.data.userName);
                localStorage.setItem("avatar", response.data.avatar);
                this.$router.push({ path: "/" });
                return;
              }
              this.open1();
            })
            .catch(error => {
              console.log(error);
            });
        } else {
          return false;
        }
      });
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = res.adress;
      //   this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>

<style lang="scss">
.avatar {
  width: 100px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #06abf8;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 100px;
  height: 100px;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.el-upload .el-icon-plus {
  line-height: 100px;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #0c6bf0;
  width: 100px;
  height: 100px;
  text-align: center;
}
.avatar-uploader {
  text-align: center;
}

.gender {
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}
.infoLog {
  text-align: center;
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: #0abcfd;
  font-size: 24px;
  font-weight: 700;
}

.el-button {
  width: 100px;
}

.infoWindow {
  width: 400px;
  height: 400px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.6);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.el-form {
  margin-top: 30px;
}

.el-form .el-input {
  width: 70%;
}
</style>