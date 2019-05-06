<template>
    <div>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swipe :lunboList='goodslist'></swipe>
                </div>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-header">页眉</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
                </div>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-header">页眉</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
                </div>
            </div>
            <div class="mui-card-footer">页脚</div>
        </div>
    </div>
</template>

<script>
import swipe from '../sub/swipe.vue'
export default {
    data(){
        return {
            id:this.$route.params.id,
            goodslist:[]
        }
    },
    created() {
        this.getLunbo()
    },
    methods: {
        getLunbo(){
            this.$http.get(`/api/getthumimages/${this.id}`).then(res=>{
               if(res.status==200&&res.data.status==0){
                   this.goodslist=res.data.message
                   this.goodslist.forEach(item => {
                       item.img = item.src
                   });
               }
            })
        }
    },
    components:{
        swipe
    }
}
</script>