<template >
    <div class='comBox'>
        <h3>发表评论</h3>
        <textarea style="resize:none" placeholder="最多(200字)" maxlength="120" v-model='msg'></textarea>
        <mt-button type="primary" size='large' @click='postMsg'>发表评论</mt-button>
        <ul>
            <li v-for='(item, i) in comments' :key='item.id'>
                <h3 class="title"> 第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | timeformat('YYYY-MM-DD hh:mm:ss') }}</h3>
                <div class="content">{{item.content}}</div>
            </li>
        </ul>
        <mt-button type="danger" size='large' @click='more'>加载更多</mt-button>
    </div>
</template>

<script>
import {toast} from 'mint-ui'
export default {
    data(){
        return {
            // id:id,
            comments:[],
            pageindex:1,
            msg:''
        }
    },
    created() {
        this.getcomments()
    },
    props:['id'],
    methods: {
        getcomments(){
            this.$http.get(`/api/getcomments/${this.id}?pageindex=${this.pageindex}`).then(res=>{
                // console.log(res);
                if(res.status==200&&res.data.status==0){
                    this.comments = this.comments.concat(res.data.message)
                    // console.log(this.comments)
                }else{
                    Toast('sorry')
                }
            })
        },
        more(){
            this.pageindex++;
            this.getcomments();
        },
        postMsg(){
            if(this.msg.trim().length==0){
               return Toast('sorry u must write something')
            }
            this.$http.post(`/api/postcomment/${this.id}`,{content:this.msg}).then(res=>{
                // console.log(res)
                if(res.status==200&&res.data.status==0){
                    let comment ={
                        user_name:'mrs ming',
                        add_time:new Date(),
                        content:this.msg
                    }
                    this.comments.unshift(comment);
                    this.msg=''

                }
            })
        }

    },
}
</script>

<style lang="scss" scoped>
    .comBox{
        h3{
            font-size: 18px;
        }
        textarea{
           height: 85px;
           font-size: 14px;
           margin: 0;
           text-indent: 2rem;
        }
        ul{ padding: 0;
            li{
                list-style: none;
                .title{
                    background-color: #aaa;
                    font-size: 13px;
                    line-height: 30px;
                }
                .content{
                    line-height: 38px
                }
            }
        }
    }
</style>
