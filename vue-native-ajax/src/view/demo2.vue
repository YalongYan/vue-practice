<template>
    <div>
        <h3>挂载到vue全局</h3>
        <!-- 参考： https://www.cnblogs.com/guomin/p/9073042.html
        参考： https://segmentfault.com/a/1190000012296163 -->
        <div v-for="item in requestData" :key="item.id">
            {{item.group_name}}
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                requestData: []
            }
        },
        created(){
            var reuestData = {
                url: "http://123.103.9.204:6058/official/rest/document/wenku/1/3293036/groupList",
                data:  {pageSize: '1', pageSize: 30, groupType: 0}
            }
            this.$get(reuestData).then((res)=>{
                if(res.flag == 0) {
                    this.requestData = res.data
                }
            })
        }
    }
</script>