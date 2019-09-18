<template>
  <div class="login">
    <router-view></router-view>
  </div>
</template>

<script>
import UserLogin from "@/components/UserLogin.vue";
import UserReg from "@/components/UserReg.vue";
import UserInfo from "@/components/UserInfo.vue";

export default {
  data() {
    return {
    };
  },
  methods: {
    },
  components:{
    UserLogin,UserReg,UserInfo
  }
};
</script>

<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  background-color: blue;
  background-image: url("https://pic.hanfugou.com/web/2019/8/30/15/edfd8d6a7e684902834fb9bf9cb95e64.jpeg_2000.jpg");
  background-size: cover;
}
</style>

