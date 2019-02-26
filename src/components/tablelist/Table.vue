<template>
  <div class='table'>
    <h1>导航一</h1>
    <!-- 按钮组部分 -->
    <div class="btn-group">
      <el-button type='primary' icon='el-icon-plus' class='btn primary'>新建</el-button>
      <el-button type='success' icon='el-icon-edit' class='btn success'>修改</el-button>
      <el-button type='warning' icon='el-icon-delete' class='btn warning'>删除</el-button>
      <el-button type='info' icon='el-icon-upload' class='btn info'>导入</el-button>
      <div class="searchbox">
        <el-input placeholder="请输入内容" v-model='searchVal' clearable></el-input>
        <el-button type='primary' icon='el-icon-search' class='btn primary'>查询</el-button>
      </div>
    </div>
    <!-- 表格内容部分 -->
    <el-table :data="tableData" stripe style="width:100%" @selection-change='checkTable'>
      <el-table-column prop='data' width='50' type='selection'></el-table-column>
      <el-table-column prop='date' label='日期' width='180' sortable></el-table-column>
      <el-table-column prop='name' label='姓名' width='180'></el-table-column>
      <el-table-column prop='address' label='地址'></el-table-column>
      <el-table-column width='80' label='查询'>
        <template slot-scope="scope">
          <el-button type='primary' icon='el-icon-search' size='small' class='btn primary'></el-button>
        </template>
      </el-table-column>
      <el-table-column width='80' label='修改'>
        <template slot-scope="scope">
          <el-button type='success' icon='el-icon-edit' size='small' class='btn success'></el-button>
        </template>
      </el-table-column>
      <el-table-column width='80' label='删除'>
        <template slot-scope="scope">
          <el-button type='warning' icon='el-icon-delete' size='small' class='btn warning'></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      popper-class='themeSelect'
      @size-change="changePage"
      @current-change='getCurrentPage'
      :page-sizes="[5,10,15,20]"
      :page-size="pageSize"
      :current-page="currentPage"
      layout="total, sizes, prev, pager, next, jumper"
      :total='total'>
    </el-pagination>
  </div>
</template>

<script>
import { test } from '@/api/index.js'
export default {
  data() {
    return {
      currentPage:1,
      total:10,
      pageSize:5,
      searchVal: "",
      tableData:[
        {date:'2016-05-02',name:'王小虎',address:'北京朝阳区办事处'},
        {date:'2017-06-01',name:'赵晓抗',address:'上海凤凰大道'},
        {date:'2018-07-11',name:'宋小龙',address:'深圳龙岗小区201'},
        {date:'2016-05-02',name:'王小虎',address:'北京朝阳区办事处'},
        {date:'2017-06-01',name:'赵晓抗',address:'上海凤凰大道'},
        {date:'2018-07-11',name:'宋小龙',address:'深圳龙岗小区201'},
        {date:'2016-05-02',name:'王小虎',address:'北京朝阳区办事处'},
        {date:'2017-06-01',name:'赵晓抗',address:'上海凤凰大道'},
        {date:'2018-07-11',name:'宋小龙',address:'深圳龙岗小区201'},
        {date:'2016-05-02',name:'王小虎',address:'北京朝阳区办事处'},
        {date:'2017-06-01',name:'赵晓抗',address:'上海凤凰大道'},
        {date:'2018-07-11',name:'宋小龙',address:'深圳龙岗小区201'},
        {date:'2016-05-02',name:'王小虎',address:'北京朝阳区办事处'},
        {date:'2017-06-01',name:'赵晓抗',address:'上海凤凰大道'},
        {date:'2018-07-11',name:'宋小龙',address:'深圳龙岗小区201'},
        {date:'2016-05-02',name:'王小虎',address:'北京朝阳区办事处'},
        {date:'2017-06-01',name:'赵晓抗',address:'上海凤凰大道'},
        {date:'2018-07-11',name:'宋小龙',address:'深圳龙岗小区201'},
      ]
    };
  },
  mounted () {
    // test().then(res => {
    //   console.log(res.data)
    // })
  },
  methods:{
    changePage (val) {
      console.log('每页'+val+'条')
    },
    getCurrentPage (val) {
      console.log('当前第'+val+'页')
    },
    checkTable (val) {
      // 当前选中的表格行
      console.log(val[0].address + val[0].date + val[0].name)
    },
    // 点击查询
    searchDatas () {
      console.log(this.searchVal)
    }
  }
};
</script>

<style style lang="sass" scoped>

</style>



