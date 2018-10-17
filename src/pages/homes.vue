<template>
    <div class="Dolist" id="Dolist">
        <blog-header></blog-header>
        
        <div class="content_slide">
            <!--v-on:click="doThis(item)"  -->
            <router-link href="javascript:void(0);" class="aui-well-item"  v-bind:to="'/homechid/'+item.id"  v-for="(item,i) in items" :key="item.id">
                <div class="aui-well-item-hd" >
                    <img :src="item.imgUrl" alt="">
                </div>
                <div class="aui-well-item-bd" >
                    <h4>{{item.title}}</h4>
                    <p>
                        <span class="icon icon-coll">
                            <img src="../../style/images/icon-coll.png" alt="">{{item.reading}}
                        </span>
                        <span class="icon icon-coll">
                            <img src="../../style/images/icon-time.png" alt="">{{item.upvote_count}}
                        </span>
                    </p>
                </div>
            </router-link>
        </div>       
        <!-- center -->
    </div>
</template>



<script>

import BlogHeader from '@/components/BlogHeader'
export default {
    components: {
        BlogHeader
    },
    name: 'Dolist',
    data () {
      return {
        items:[],
        showHead:false
      }
     
    },
    created(){ 
        let self = this;
        this.$axios.post('/apis/ibroker-api/kouzi/getToutiaoLabelList?subjectId=0&pageNum=1&pageSize=30').then((response)=>{
            //console.log(response.data.list);
            self.items = response.data.data.list;
          
        })  
    },
    methods:{
       // doThis:function(e){
            //console.log(e.id);
            //this.$router.push({path: '/homeChid',params:{ id:'1'}});
            //location.assign('./homeChid')
            //this.$router.push({path:'/homechid'});
            
       // }
    }
}
</script>

<style scoped>
    
.content_slide{width:100%;margin:0 auto;}
/*.tabs a.router-link-exact-active {color:#0088ff}*/
.content_slide .aui-well-item{padding: 14px 15px;position: relative;
  position: relative;display: -webkit-box;margin-bottom: 10px;
  display: -webkit-flex;display: flex;color: #000000;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);}
.aui-well-item-hd{max-width: 120px;margin-right: 10px;width:30%;}
.aui-well-item-hd img{max-width: 120px;width:90%;border: none;border-radius: 20px;}
.aui-well-item-bd{position: relative;width:70%;}
.aui-well-item-bd h4 {font-size: 15px;font-weight: normal;color: #3b3b3b;line-height: 1.4;overflow: hidden;text-align: left;
    text-overflow: ellipsis;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;}

.aui-well-item-bd p {position: absolute;bottom: 0;font-size: 13px;color: #868686;width:100%;text-align: left;}
.icon-coll {width: auto;height: 15px;display:inline-block; margin-right: 5px;margin-top: 0px;}
.icon-coll img {width: 15px;height: 15px;display: inline-block;border: none;margin-right: 5px;}





</style>