<!--
 * @Project: cmis-pad-vue
 * @File:index
 * @Dsc: 描述
 * @Author wjz
 * @CreateDate 2021/9/2 9:14
-->
<template>

  <div>
    <db-search></db-search>

    <div class="link-top"></div>
  </div>
</template>

<script>

import DbSearch from "@/components/common/dbSearch/DbSearch";

export default {
  name: "index",
  components:{
    DbSearch
  }
}
</script>

<style scoped>
.link-top {
  width: 100%;
  height: 1px;
  border-top: solid #ACC0D8 1px;
}

</style>
