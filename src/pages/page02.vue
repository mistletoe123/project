<template>
    <div id='translateTail' class="translateTail">
        <blog-header></blog-header>
        <div class="tranText">
            <router-link :to="'/addpage'"><button class="Addbutton">{{title}}</button></router-link>
        </div>
        <div class="formTail">
            <div class="tranList"  v-for="(list,i) in lists" :key="list.id">
                <div class="fix" v-if="i!=0"></div>  
                <ul class="clearfix">
                    <li class="f1">
                        <img :src="list.headimgurl" v-if="list.headimgurl">
                        <img src="../assets/t.jpg" v-else>
                    </li>
                    <li class="f2"><h2>{{list.nickname}}</h2><p>{{list.create_time}}</p></li>
                </ul> 
                <div class="tranCont">
                    <p>{{list.content}}</p>
                    
                    <div class="tranImg clearfix"  v-if="list.imgList.length>0">
                        <p v-for="part in list.imgList" :style="{backgroundImage:'url('+part.img+')'}"></p>
                    </div>
                    <p class="tigs">
                        <span  @click="addZan(list);"><img src="../../style/images/icon-coll.png">{{list.reading}}</span>
                        <span><img src="../../style/images/icon-time.png">{{list.upvote_count}}</span>
                    </p>
                </div>
            </div>
            
            <!--end-->
        </div>

    </div> 
</template>

<script>
    
import BlogHeader from '@/components/BlogHeader'  
export default {
    name: 'translateTail',
    components: {
        BlogHeader
    },
    data () {
      return {
        title: '添加帖子',
        lists:{},
        //imgLists:{}
        reading:''
        
      }
    },
    created(){ 
        let self = this;
        this.$axios.post('/apis/ibroker-api/friend/getFriendList?user_id=100582&pageNum=1&pageSize=10').then((response)=>{
            //console.log(response.data);
            this.lists=response.data.data.list;
            this.imgLists=response.data.data.list[0].imgList;
            //console.log(this.imgLists);
        })  
    },
    methods:{
        addZan(list){
            //console.log(list.reading);
            list.reading++;

        }
        
    }
   
}
</script>


<style scoped>

.tranText{width:92%;margin:0 auto;text-align: right;}
input,select{width:50px;height:25px;border:1px solid #900;color:#333;}
button{width:100px;margin:0 auto;background:#1896f1;border-radius: 10px;font-size: 14px;color:#fff;padding:8px 0;}
.formTail{width:100%;margin:20px auto 0;text-align: left;position: relative;}
.formTail .tranList{width:100%;margin:20px auto;}


.tranList ul{width:92%;margin:20px auto 0;}
.tranList ul img{width:60px;height: 60px;border-radius: 50%;}
.tranList ul li{float: left;text-align: left;}
.tranList ul li.f1{width:20% ;}
.tranList ul li.f2{width:80% ;}
.tranList ul li h2{font-size: 16px;text-align: left;margin-top:8px;color: #666;}
.tranList ul li p{font-size: 14px;text-align: left;margin-top:10px;color: #999;}
.tranList .tranCont{width:92%;margin:10px auto;}
.tranList .tranCont p{font-size:16px;text-align:left;color:#333;line-height: 1.7em;margin:20px 0 ;}
.tranList .tranCont p.tigs{width:100%;margin:10px auto 0;text-align: right;}
.tranList .tranCont p.tigs img{width:20px;height:auto;margin-right: 10px;}
.tranList .tranCont p.tigs span{margin-left: 10px;color: #999;font-size: 16px;}
.tranList .tranImg{width:100%;margin:20px auto;}
.tranList .tranImg p{width:32%;display:inline-block;float: left;height:100px;margin:0;overflow: hidden;text-align: center;
line-height:initial;background-size: cover;background-repeat: no-repeat;background-position: center center;}
.tranList .tranImg p:nth-child(2){margin:0 1.5% ;}
.tranList .tranImg img{width:100%;display:inline-block;float: left;vertical-align: middle;}


</style>

