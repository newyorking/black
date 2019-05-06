<template>
    <div class='photoInfo'>
        <h3>{{info.title}}</h3>
        <div class="info">
            <span>发表时间:{{info.add_time |timeformat('YYYY-MM-DD hh:mm:ss')}}</span>
            <span >点击:{{info.click}}次</span>
        </div>

        <vue-preview :slides="littlePho" @close="handleClose"></vue-preview>
        <p v-html='info.content' class="content"></p>

        <pho-comm :id='id'></pho-comm>
    </div>
</template>
<script>
// import {}
import comment from '../sub/component.vue'
export default {
    data(){
        return {
            id:this.$route.params.id,
            info:[],
            littlePho:[],
            }
            
        
    },
    created() {
        this.detail();
        this.getLitlePho()
    },
    methods: {
        detail(){
            this.$http.get(`api/getimageInfo/${this.id}`).then(res=>{
                // console.log(res)
                if(res.status==200&&res.data.status==0){
                    this.info=res.data.message[0]
                    // console.log(this.info)
                }else{
                    Toast('sorry info')
                }
            })
        },
         handleClose () {
        console.log('close event')
      },
      getLitlePho(){
          this.$http.get(`api/getthumimages/${this.id}`).then(res=>{
              if(res.status==200&&res.data.status==0){
                 this.littlePho = res.data.message;
                 this.littlePho.forEach(item => {
                     item.msrc=item.src;
                     item.w=600;
                     item.h=400
                 });
              }else{
                   Toast('sorry getLitlePho')
              }
          })
      }
    },
    components:{
        'pho-comm':comment
    }
}
</script>


<style lang="scss">
    .photoInfo{
        padding:5px;
        h3{
            color:orchid;
            font-size: 15px;
            text-align: center;
            margin: 15px 0;
        }
        .info{
            display:flex;
            justify-content: space-between;
            font-size: 13px;
        }
        p{
            line-height: 30px;
        }
        my-gallery{
            display:flex;
            justify-content: space-between
        }
        figure{
            width: 30%;
            display: inline-block;
            box-shadow: 0 0 6px #999;
            margin: 5px;
            img{
                width: 100%;
                display: block;
            }
        }
    }
</style>
