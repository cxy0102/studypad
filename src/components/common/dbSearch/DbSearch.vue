<!--
 * @Project: cmis-pad-vue
 * @File:DbSearch
 * @Dsc: 描述
 * @Author wjz
 * @CreateDate 2021/9/2 15:21
-->
<template>
  <div id="database" class="db_body">
    <van-field
      v-model="fieldValue"
      is-link
      readonly
      label=""
      placeholder="请选择数据库"
      @click="show = true"
      class="db_vf"
    />
    <van-popup v-model="show" round position="bottom">
      <van-picker
        title="请选择数据库"
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="onCancel"
        @change="onChange"
      />
    </van-popup>
    <van-search v-model="value" placeholder="请输入部门搜索关键词" class="db_vs"/>

  </div>
</template>

<script>
export default {
  name: "DbSearch",
  data() {
    return {
      columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
      show: false,
      fieldValue: '杭州',
      value: '',
    };
  },
  methods: {
    onConfirm(value, index) {
      // Toast(`当前值：, 当前索引：${index}`);
      this.fieldValue = value;
      this.show=false;
    },
    onChange(picker, value, index) {
      // Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onCancel() {
      this.show=false;
    }
  }
}
</script>

<style scoped>
.db_body{
  display: flex;
  text-align: center;
  line-height: 48px;
  height: 48px;
}
.db_vf{
  width: 100px;
  height: 100%;
  font-size: 15px;
}
.db_vs{
  width: 100%;
}
</style>
