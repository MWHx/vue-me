<template>
  <div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane  v-for="(item,index) in list" name="" :label="item.listContent">{{index+1}}-{{item.listContent}}</el-tab-pane>
    </el-tabs>
    <span class="el-icon-loading" style="color: red;font-size: 40px"></span>
    <el-input placeholder="请输入内容" v-model="input4">
      <template slot="prepend">Http://</template>
      <template slot="append">.com</template>
    </el-input>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        editableTabsValue:'2',
        activeName: 0,
        list:[],
        type:'border-card',

      };
    },

    methods: {
      handleClick(tab, event) {
        // console.log(tab, event);
      },
      postList(){
        this.axios.post(`/es/cms_content_index/cms_content_type/_search`,{
          "query": {
                  "bool": {
                    "must": [
                      {
                        "term": {
                          "cms_content_type_classifyId": "402881e65d301f5b015d31077085001c"
                        }
                      }
                    ]
                  }
                },
                "from": 0,
                "size": 10,
                "sort":{
                  "cms_content_type_createdAt":{
                    "order":"desc"
                  }
                }
        })
          .then( response =>{
            let list = response.data.hits.hits,listArr =[];

            for(let i = 0;i<list.length;i++){
              listArr.push({
                listContent:list[i]._id,
                listTitle:list[i]._index,
              });
              this.list =listArr
            }
          })
          .catch(err =>{
                  console.log(err);
                })
      }
      // postList(){
      //   this.axios.post(`/es/cms_content_index/cms_content_type/_search`,{
      //     "query": {
      //       "bool": {
      //         "must": [
      //           {
      //             "term": {
      //               "cms_content_type_classifyId": "402881e65d301f5b015d31077085001c"
      //             }
      //           }
      //         ]
      //       }
      //     },
      //     "from": 0,
      //     "size": 10,
      //     "sort":{
      //       "cms_content_type_createdAt":{
      //         "order":"desc"
      //       }
      //     }
      //   })
      //     .then(data =>{
      //       console.log(data.data.hits.hits);
      //       var arr = data.data.hits.hits ,arrList = [];
      //       for ( let i = 0;i<arr.length;i++){
      //         arrList.push({
      //           indexArr:arr[i]._source.cms_content_type_content ,
      //           idArr:arr[i]._id,
      //         });
      //         this.arr = arrList
      //       }
      //     })
      //     .catch(err =>{
      //       console.log(err+"没有有拿到数据");
      //     })
      // }
    },
    mounted(){
      this.postList()
    }
  }
</script>
<style>

</style>
