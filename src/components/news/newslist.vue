<template>
    <div>
       <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for='i in newslist' :key='i.id'>
                <router-link :to="'/home/newsinfo/'+i.id">
                    <img class="mui-media-object mui-pull-left" :src='i.img_url'>
                    <div class="mui-media-body">
                        <h2>{{i.title}}</h2>
                        <p class='mui-ellipsis'>
                            <span>时间:{{i.add_time | timeformat('')}}</span>
                            <span>人数:{{i.click}}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {newslist:[]}
    },
    created(){
        this.getlists()
    },
    methods:{
        getlists(){
            this.$http.get('/api/getnewslist').then(res=>{
                if(res.status==200&&res.data.status==0){
                    this.newslist = res.data.message
                }
                
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .mui-table-view{
        li{
            h2{font-size: 14px};
            p{display: flex;
                justify-content: space-between
            }
        }
    }
</style>
