<template>
  <div id="app">

    <div class="title_body">
      <img src="./assets/img/ic_launcher.png">
      <span>组工业务综合查询系统</span>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

 .title_body {
   /*flex 布局*/
   display: flex;
   /*实现垂直居中*/
   align-items: center;
   /*实现水平居中*/
   justify-content: center;
   text-align: center;
   width: 100%;
   padding: 20px 0px 20px;
   height: 60px;
 }
.title_body img{
  height: 60px;
}
.title_body span{
  font-size: 20px;
  line-height: 60px;
  height: 60px;
  padding-left: 20px;
}
</style>
