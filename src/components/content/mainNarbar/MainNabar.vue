<!--
 * @Project: cmis-pad-vue
 * @File:MainNabar
 * @Dsc: 描述
 * @Author wjz
 * @CreateDate 2021/9/2 11:07
-->
<template>
  <div>
    <van-nav-bar
      :title=ctitle
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>

<script>
export default {
  name: "MainNabar",
  props:[
    'ctitle'
  ],
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
  }
}
</script>

<style scoped>

</style>
