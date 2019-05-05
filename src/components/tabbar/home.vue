<template>
    <div>
        <!-- <h1>home</h1> -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for='list in lunboList' :key='list.img'>
                <img :src="list.img" alt="">
            </mt-swipe-item>
            <!-- <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item> -->
        </mt-swipe>

         <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/news">
                    <img src="../../images/menu1(1).png" alt="">
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to='/home/photolist'>
                   <img src="../../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div></router-link>
                    </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                     <img src="../../images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                     <img src="../../images/menu5.png" alt="">
                    <div class="mui-media-body">视屏专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                     <img src="../../images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div></a></li>
        </ul> 

    </div>
</template>

<script>
export default {
    data(){
       return {
           lunboList:[]
       } 
    },
    created(){
        this.getLunbo()
    },
    methods:{
        getLunbo(){
            this.$http.get('/api/getlunbo').then(res=>{
                if(res.status==200&&res.data.status==0){
                    this.lunboList = res.data.message
                }
                // console.log(res)
            })

            
        }
    }
}
</script>

<style lang="scss" scope>
    
    .mint-swipe-items-wrap{
       height: 200px;
        /* & div:nth-child(1){
            background-color: cyan;
        };
        & div:nth-of-type(2){
            background-color: orchid;
        };
        & div:nth-child(3){
            background-color: red;
        }; */
        img{
            height:100%;
            width:100%;
            // background-size: contain;
            display: block
        }
    }

    .mui-table-view.mui-grid-view.mui-grid-9{
        background-color: #fff;
        border:none;
        li{
            border:none;
            .mui-media-body{font-size: 13px;}
            img{
                width: 100%;
                display: block;
            }
        }
    }
</style>