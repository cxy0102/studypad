<!--
 * @Title: cmis-pad-vue
 * @file: index
 * @Dsc: 描述
 * @Author wjz
 * @CreateDate 2021/9/1 15:35
-->
<template>
  <van-grid clickable  :gutter="20" :column-num="3">
    <van-grid-item icon="home-o" text="路由跳转" to="/" />
    <van-grid-item icon="search" text="URL 跳转" url="/vant/mobile.html" />
    <van-grid-item v-for="value in 7" :key="value" icon="photo-o" text="文字" />
  </van-grid>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>
