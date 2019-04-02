<template>
    <div>
        <h3>在beforeCreated之前创建：</h3>
        <div v-for="item in requestData" :key="item.id">
            {{item.group_name}}
        </div>
        <p>
            缺点： 使用立即执行函数，如果函数内部有错误，不能调试。
        </p>
    </div>
</template>
<script>
import Request from './../mixin/request.js'

export default {
    data () {
        return {
            requestData: []
        }
    },
    mixins: [Request],
    created(){
        this.$http.get('http://123.103.9.204:6058/official/rest/document/wenku/1/3293036/groupList', {pageSize: '1', pageSize: 30, groupType: 0}).then((res)=>{
            if(res.flag == 0){
                this.requestData = res.data
            }
        })
    }
}
</script>