<template>
    <div class='goodsWrap'>
       <ul class="goods">
           <li v-for="item in goods" :key='item.id' @click='goDetail(item.id)'>
               <img :src="item.img_url" alt="">
               <h3>{{item.title}}</h3>
               <div class="info">
                   <div class="price">
                       <span class="now">￥{{item.sell_price}}</span>
                       <span class="old">￥{{item.market_price}}</span>
                   </div>
                   <div class="num">
                       <span>热卖中</span>
                       <span>剩余:{{item.stock_quantity}}件</span>
                   </div>
               </div>
           </li>
       </ul>
       <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            goods:[],
            pageindex:1
            }

    },
    created() {
        this.getgoods()
    },
    methods: {
        getgoods(){
            this.$http.get(`/api/getgoods?pageindex=${this.pageindex}`).then(res=>{
                console.log(res)
                if(res.data.status==0){
                    this.goods=this.goods.concat(res.data.message)
                }
            })
        },
        getMore(){
            this.pageindex++;
            this.getgoods()
        },
        goDetail(id){
            this.$router.push(`/home/goodsDetail/${id}`)
        }
    },
}
</script>

<style lang="scss" scope>
    .goods{
        padding: 7px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li{
            border:1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            width: 49%;
            margin: 4px 0;
            padding: 2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            img{
                width: 100%;
                display: block;
            }
            h3{
                font-size: 14px;
            }
            .info{
                background-color: #ccc;
                .price{
                    .now{
                        font-size: 16px;
                        color:red;
                        font-weight: bold;
                    }
                    .old{
                        font-size: 12px;
                        text-decoration: line-through;
                        margin-left: 10px;
                    }
                }
                .num{
                    display: flex;
                    justify-content: space-between;
                    font-size: 13px;
                }
            }
        }
    }
</style>