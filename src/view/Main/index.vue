<!--
 * @Title: cmis-pad-vue
 * @file: index
 * @Dsc: 首页九宫格
 * @Author wjz
 * @CreateDate 2021/9/1 15:35
-->
<template>
  <div>
    <div class="title_body">
      <img src="@/assets/img/ic_launcher.png">
      <span>组工业务综合查询系统</span>
    </div>
      <van-grid clickable  :gutter="20" :column-num="3" class="van-grid-items">
        <van-grid-item icon="friends-o" text="干部信息"  />
        <van-grid-item icon="search" text="干部搜索"  />
        <van-grid-item v-for="value in 17" :key="value" icon="photo-o" text="文字" />
      </van-grid>
  </div>


</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>
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
    background-color: #02429b;
  }
  .title_body img{
    height: 60px;
  }
  .title_body span{
    font-size: 20px;
    line-height: 60px;
    height: 60px;
    padding-left: 20px;
    color: #fff;
  }

  .van-grid-items{
    height: 100%;
    text-align: center;
  }


</style>
