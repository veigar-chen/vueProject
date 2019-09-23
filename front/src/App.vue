<template>
  <div id="app">
    <router-view />
  </div>
</template>



<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
}
i {
  font-style: normal;
}

body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, div, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, option, select, th, td, img, background {
    border: none;
    border: 0;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    color: #555555;
    font: 14px "\5fae\8f6f\96c5\9ed1",Helvetica,PingFang SC,Tahoma,Arial,sans-serif;
    outline: none;
    resize: none;
    word-break: break-all;
}

#app {
  width: 100%;
  height: 100vh;
}
a:hover {
    color: #ff4466;
}
a:hover, a.active {
    color: #ff6699;
    text-decoration: none;
}

a {
    color: #555555;
}

ul, ol, li {
    list-style: none;
    margin: 0px;
    padding: 0px;
}
</style>