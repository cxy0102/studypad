<!--
 * @Project: cmis-pad-vue
 * @File:MainTabbar
 * @Dsc: 描述
 * @Author wjz
 * @CreateDate 2021/9/2 11:10
-->
<template>
  <div>
    <van-tabbar v-model="active"  @change="onChange">
      <van-tabbar-item icon="friends-o" to="cadreinfo">{{items[0]}}</van-tabbar-item>
      <van-tabbar-item icon="search" to="search">{{items[1]}}</van-tabbar-item>
      <van-tabbar-item icon="phone-o" to="cadreinfo">{{items[2]}}</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="login">{{items[3]}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
  name: "MainTabbar",
  data() {

    const items=[
      '干部信息',
      '人员搜索',
      '电话簿',
      '设置'
    ]
    return {
      active: 0,
      title: String,
      items
    };
  },
  methods: {
    onChange(index) {
      this.$emit('tbclick',this.items[index]);
    },
  }
}
</script>

<style scoped>

</style>
