<template lang="">
    <div class='newsinfo'>
        <h1>{{news.title}}</h1>
        <p>
            <span>发表时间:{{news.add_time | timeformat('YYYY-MM-DD hh:mm:ss')}}</span>
            <span>评论数:{{news.click}}</span>
        </P>
        <div v-html='news.content'>
            
        </div>
        <!-- zujian -->
        <newscop :id='id'></newscop>
    </div>
</template>

<script>
import comment from '../sub/component.vue'

export default {
    data(){
        return {
            id:this.$route.params.id,
            news:[]
        }
    },
    created(){
        this.getinfo();
    },
    methods: {
        getinfo(){
            this.$http.get('/api/getnew/'+this.id).then(res=>{
                // console.log(res)
                if(res.status == 200&&res.data.status==0){
                    this.news = res.data.message[0]
                    // console.log(this.news)
                }
            })
        }
    },
    components:{
       newscop:comment
    }
}
</script>

<style lang="scss" scoped>
    .newsinfo{
        padding: 0 5px;
        h1{
            font-size: 16px;
            padding: 10px;
            color:red;
            text-align: center
        };
        p{
            padding: 0 10px;
            display: flex;
            justify-content:space-between;
            color: orchid;
            font-size: 14px;
        }

    }
</style>
