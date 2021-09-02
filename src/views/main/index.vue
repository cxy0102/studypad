<!--
 * @Project: cmis-pad-vue
 * @File:index
 * @Dsc: 描述
 * @Author wjz
 * @CreateDate 2021/9/2 9:18
-->
<template>
  <div class="main_body">
    <main-nabar :ctitle="titleStr"></main-nabar>
    <router-view></router-view>
    <main-tabbar @tbclick="mnclick"></main-tabbar>
  </div>

</template>

<script>

import MainNabar from "@/components/content/mainNarbar/MainNabar";
import MainTabbar from "@/components/content/mainTabbar/MainTabbar";

export default {
  name: "index",

  components:{
    MainNabar,MainTabbar
  },
  data() {
    return {
      titleStr:'干部信息'
    };
  },methods:{
    mnclick(item){
      console.log(item);
      this.titleStr=item;
    }
  }
}
</script>

<style scoped>
  .main_body{
    background-color: #fff;
  }
</style>
