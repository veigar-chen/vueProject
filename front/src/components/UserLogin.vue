<template>
    <div class="loginWindow">
      <div class="LoginLog">用户登录</div>
      <div class="loginMain">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm form"
        >
          <el-form-item label="用户名" prop="userName">
            <el-input v-model.number="ruleForm.userName"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="passWord">
            <el-input type="password" v-model="ruleForm.passWord" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            <el-button @click="turnReg">注册</el-button>
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
        callback(new Error("请输入用户名"));
        return;
      } 
      callback();
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
        return;
      } 
        callback();
    };
    return {
      ruleForm: {
        passWord: "",
        userName: ""
      },
      rules: {
        passWord: [{ validator: validatePass, trigger: "blur" }],
        userName: [{ validator: validataUser, trigger: "blur" }]
      }
    };
  },
  created() {
    localStorage.setItem("userName","");   
  },
  methods: {
    open() {
      this.$message({
        showClose: true,
        message: "登录成功",
        type: "success"
      });
    },
    open1() {
      this.$message({
        showClose: true,
        message: "用户不存在",
        type: "error"
      });
    },
    open2() {
      this.$message({
        showClose: true,
        message: "密码错误",
        type: "error"
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.axios({
            method: "post",
            url: "/user/login",
            data: this.ruleForm
          })
            .then(response => {
              if (response.data.code == 1) {
                this.open();
                localStorage.setItem("userName",response.data.userName);
                localStorage.setItem("avatar",response.data.avatar);
                this.$router.push({ path: "/"});
              } else if(response.data.code == -1) {
                this.open1()
              }else{
                this.open2()
              }
            })
            .catch(error => {
              console.log(error);
            });
        } else {
          return false;
        }
      });
    },
    turnReg() {
      this.$router.push({path:'/reg'});
    }
  }
};
</script>

<style lang="scss">
.LoginLog {
  text-align: center;
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: #0ABCFD;
  font-size: 24px;
  font-weight: 700;
}


.el-button {
  width: 100px;
}

.loginWindow {
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