<template>
    <div id="footer">
      <p>
        <a href="javascript:;">关于我们</a>
        <i>|</i>
        <a href="javascript:;">商家入驻</a>
        <i>|</i>
        <a href="javascript:;">入驻协议</a>
        <i>|</i>
        <a href="javascript:;">新手指南</a>
        <i>|</i>
        <a href="javascript:;">商务合作</a>
        <i>|</i>
        <a href="javascript:;">汉服荟</a>
      </p>
      <p class="copyright">
        <a href="http://szcert.ebs.org.cn/5121967f-66cd-4d9c-acbc-9f8bb5024b4f" class="ebs"></a>
        CopyRight ©2018 深圳市汉服荟网络科技有限公司 版权所有
        <a href="javascript:;">粤ICP备14046913号-1</a>
        电话：0755-21503399
      </p>
    </div>
</template>

<style lang="scss">
    #footer p i {
  color: #ddd;
  margin: 0 14px;
}

#footer p.copyright a.ebs {
  content: "";
  background: url(/Image/ebs_icon.png) no-repeat;
  display: inline-block;
  height: 36px;
  width: 27px;
  display: inline-block;
  position: relative;
  left: -17px;
  top: -2px;
  vertical-align: middle;
}

#footer {
  background: white;
  padding: 60px 0 20px 0;
  min-width: 1100px;
  margin-top: 80px;
}

#footer p {
  text-align: center;
  margin-bottom: 20px;
}
</style>