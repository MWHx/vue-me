<template>
  <div id="topHead">
    <template>
      <el-table
        :data="nose"
        border
        style="width: 100%">
        <el-table-column
          prop="nostId"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="nostTitle"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="nostPictures"
          label="地址">
        </el-table-column>
      </el-table>
    </template>
    <!--{{nose}}-->
  </div>
</template>

<script>
    export default {
        name: "topHead",
      data() {
        return {
          nose:[],
        }
      },
        methods:{
          dataList(){
            this.axios.get(`/api/cms/nologin/getRecommendCourses`,{})
              .then(response=>{
                console.log(response);
                let nose = response.data.data,nostArr =[];
                for(let i = 0;i<nose.length;i++){
                  nostArr.push({
                    nostId:nose[i].id,
                    nostTitle:nose[i].title,
                    nostPictures:nose[i].pictures
                  });
                  this.nose = nostArr
                }
              })
              .catch(err=>{
                console.log(err);
              })

          }
          // wna(){
          //   this.axios.get('/api/cms/nologin/getRecommendCourses', {})
          //   .then(response=>{
          //     let nose = response.data.data,noseArr =[];
          //     console.log(nose);
          //     for(let i = 0;i<nose.length;i++){
          //       noseArr.push({
          //         nostTitle:nose[i].title,
          //         nostlowPrice:nose[i].lowPrice
          //       });
          //       this.nose = noseArr
          //     }
          //   })
          //     .catch(err => {
          //       console.log(err)
          //     })
        },
      mounted(){
          this.dataList()
      },

    }
</script>

<style scoped>

</style>
<style>
  #topHead .el-table th>.cell{
      text-align: center;
  }
</style>
