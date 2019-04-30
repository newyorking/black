<template>
    <div>
       <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../../images/menu2.png">
                    <div class="mui-media-body">
                        <h2>幸福</h2>
                        <p class='mui-ellipsis'>
                            <span>时间:12-12-12 12:12:12</span>
                            <span>人数:0</span>
                        </p>
                    </div>
                </a>
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
            this.$http.get('/app/getnewslists').then(res=>{
                console.log(res)
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
