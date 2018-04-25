<template>
  <div>
    <template>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
    export default {
        name: "topHead",
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],

        }
      },
        methods:{
          wna(){
            this.axios.get('/api/cms/nologin/getRecommendCourses').then((response) => {
              console.log(response.data.data.length);
              console.log(this.tableData[1].date);
              console.log(response.data.data[1].curriculaTime);

               for(let  i = 0; i< response.data.data.length;i++){
                  // this.tableData[i].date = response.data.data[i].curriculaTime;
                  this.tableData[i].name = response.data.data[i].title;
                  this.tableData[i].address = response.data.data[i].title;
               }
            })
          }
        },
      mounted(){
        this.wna();
      },

    }
</script>

<style scoped>

</style>
