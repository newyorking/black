<template>
    <div class='phoList'>
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',list.id==0?'mui-active':'']" v-for='list in lists' :key='list.id' @click='getAllPhotos(list.id)'>
                        {{list.title}}
                    </a>
                    
                </div>
            </div>
        </div>
        <ul>
            <router-link  v-for="item in list" :key='item.id' tag='li' :to="`/home/photoDetail/${item.id}`">
                <img v-lazy="item.img_url">
                <div class="info">
                    <div class="title">{{item.title}}</div>
                    <div class="content" v-html='item.content'></div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'
import {toast} from 'mint-ui'
export default {
    data(){
        return {
            lists:[],
            list:[]
        }
    },
    created(){
        this.getAllLists(),
        this.getAllPhotos(0)
    },
    mounted() {
         mui(".mui-scroll-wrapper").scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    methods:{
        getAllLists(){
            this.$http.get(`/api/getimgcategory`).then(res=>{
                // console.log(res)
                if(res.status==200&&res.data.status==0){
                    let listOne = {title:'全部',id:0}
                    res.data.message.unshift(listOne)
                    this.lists=res.data.message;

                }else{
                    Toast('sorry')
                }
            })
        },
        getAllPhotos(phoneId){
            this.$http.get(`/api/getimages/${phoneId}`).then(res=>{
                // console.log(res)
                if(res.status==200&&res.data.status==0){
                    this.list=res.data.message;
                }else{
                    Toast('sorry')
                }
            })
        },
        getphoto(){

        }
    }
}
</script>

<style lang="scss">
    *{
        touch-action: pan-y;
        list-style: none;
    }
    .phoList{
        ul{
            padding:10px;
            padding-bottom: 0;
            li{
                position: relative;

                img{
                    width: 100%;
                    // display: block;
                    vertical-align: middle
                }
                box-shadow: 0 0 9px #999;
                margin-bottom: 10px;
                text-align: center;
                background-color: #ccc;
                img[lazy='loading'] {
                        width: 40px;
                        height: 300px;
                        margin: auto;
                    }
                p{
                    color:#fff
                }
                .info{
                    padding: 0 5px;
                    position: absolute;
                    bottom: 0;
                    color:#fff;
                    text-align: left;
                    background-color: rgba(0,0,0,.4);
                    max-height: 84px;
                
                    .title{
                        font-size: 14px;
                    }
                    .content{
                        font-size: 13px;
                        p{
                            color:#fff;
                        }
                    }
                }
            
            }
        }
    }
    
</style>
