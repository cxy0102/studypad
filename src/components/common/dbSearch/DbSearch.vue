<!--
 * @Project: cmis-pad-vue
 * @File:DbSearch
 * @Dsc: 描述
 * @Author wjz
 * @CreateDate 2021/9/2 15:21
-->
<template>


  <div>
    <span v-for="(item,index) in strs" :key="index">
      <h1>{{ item.LIBRARY_NAME }}</h1>
    </span>
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
      <van-search v-model="value" placeholder="请输入部门搜索关键词" class="db_vs" />

    </div>

  </div>
</template>

<script>
import { getDatabase } from '@/network/cadre'

export default {
  name: 'DbSearch',
  data () {
    return {
      columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
      columns2: [],
      show: false,
      fieldValue: '杭州',
      value: '',
      str: String,
      strs: [

        { 'UNIT_LIBRARY_ID': '2ADC9369-92E5-49CC-96FF-6A5EA7586EF2', 'LIBRARY_NAME': '省管干部库', 'InpFrq': '0' },
        { 'UNIT_LIBRARY_ID': 'ae506d65f1ee44aa9a9b0ef21f05f3b0', 'LIBRARY_NAME': '处级干部库', 'InpFrq': '1' },
        { 'UNIT_LIBRARY_ID': '6f871c6f-76af-4096-8249-68936e09ddef', 'LIBRARY_NAME': '代表委员库', 'InpFrq': '2' },
        { 'UNIT_LIBRARY_ID': 'da2582e1-7110-4fa3-b31d-163760c16a2c', 'LIBRARY_NAME': '引进生库', 'InpFrq': '3' },
        { 'UNIT_LIBRARY_ID': '8a0d802d59688f64015982403444003a', 'LIBRARY_NAME': '测试库', 'InpFrq': '4' },
        { 'UNIT_LIBRARY_ID': '758dd945-3f96-4cf0-bced-b0302a732bd7', 'LIBRARY_NAME': '中央驻闽单位库', 'InpFrq': '5' },
        { 'UNIT_LIBRARY_ID': '69423f1c-3f2c-459f-8acc-a71f225d49f5', 'LIBRARY_NAME': '后备库', 'InpFrq': '6' },
        { 'UNIT_LIBRARY_ID': '6babe47d-dcea-45e4-9a13-8a1d38dcfc18', 'LIBRARY_NAME': '县市区组织部长', 'InpFrq': '7' },
        { 'UNIT_LIBRARY_ID': '64fff9d9-f439-4ec2-89a0-8c512cdc9803', 'LIBRARY_NAME': '组织部长接收', 'InpFrq': '8' },
        { 'UNIT_LIBRARY_ID': '20e36a31-44b4-4f52-915f-0c0888c735a3', 'LIBRARY_NAME': '部机关干部库', 'InpFrq': '9' },

      ],
    }
  },
  methods: {
    onConfirm (value, index) {
      // Toast(`当前值：, 当前索引：${index}`);
      this.fieldValue = value
      this.show = false
    },
    onChange (picker, value, index) {
      // Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onCancel () {
      this.show = false
    },
  }, created () {
    getDatabase().then(res => {
      this.str = res
      this.strs = JSON.stringify(this.str)
      for (const resKey in this.strs) {

        if (!(typeof resKey.LIBRARY_NAME === 'undefined')) {
          console.log('name:' + resKey.LIBRARY_NAME)
          this.columns2.push(resKey.LIBRARY_NAME)
        }
      }
      console.log(this.columns2)
    })
  },
}
</script>

<style scoped>
.db_body {
  display: flex;
  text-align: center;
  line-height: 48px;
  height: 48px;
}

.db_vf {
  width: 100px;
  height: 100%;
  font-size: 15px;
}

.db_vs {
  width: 100%;
}
</style>
