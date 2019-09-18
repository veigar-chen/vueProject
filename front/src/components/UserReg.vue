<template>
  <div class="regWindow">
    <div class="regLog">手机号注册</div>
    <div class="regMain">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm form"
      >
        <el-form-item label="手机号" prop="tel">
          <el-input v-model.number="ruleForm.tel"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="passWord">
          <el-input type="password" v-model="ruleForm.passWord" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="turnReg('ruleForm')">下一步</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var validateTel = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
        return;
      } this.axios({
        method: "post",
        url: "/user/isExist",
        data: {
          tel: value
        }
      })
        .then(res => {
          if (res.data.code == -1) {
            callback(new Error("该手机号已被注册"));
          } else {
            callback();
          }
        })
        .catch(error => {
          console.log(error);
        });
    };
    var validatePassWord = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
        return;
      }
      callback();
    };
    return {
      ruleForm: {
        tel: "",
        passWord: ""
      },
      rules: {
        tel: [{ validator: validateTel, trigger: "blur" }],
        passWord: [{ validator: validatePassWord, trigger: "blur" }]
      }
    };
  },
  methods: {
    turnReg(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          localStorage.setItem( "tel",this.ruleForm.tel );
          localStorage.setItem( "passWord",this.ruleForm.passWord );
          this.$router.push("/info");
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss">
.regLog {
  text-align: center;
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: #0abcfd;
  font-size: 24px;
  font-weight: 700;
}

.el-form-item__content .el-button {
  background-color: #0abcfd;
}

.regWindow {
  width: 400px;
  height: 300px;
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