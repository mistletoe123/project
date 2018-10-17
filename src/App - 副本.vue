<template>
    <div id="app">
        <!-- 头部 -->    
        <div class="tabs">
            <a  hidefocus="true" v-bind:class="{active:site.iFinished}" v-on:click="doThis(site)" v-for="site in sites" >{{ site.name }}</a>
        </div>   
       <!-- <h1>tell me:{{childWords}}</h1>-->
        <first msgfromfather='you die!' v-on:child-tell-me-something='listenToMy'></first>
    	<!--<img src="./assets/logo.png">-->
    	
    	
     	
     	<!-- foot -->
        <router-view/>
        
    </div>
</template>

<script>
import first from './components/first' //引入

export default {
    name: 'app',
    components:{first },
    data(){
        return {
            sites: [
                { name: '新闻公告' ,iFinished:true},
                { name: '健康资讯' ,iFinished:false},
                { name: '主题活动' ,iFinished:false}
            ]
            
        }    
    },
    methods:{
        doThis:function(items){
            items.iFinished = ! items.iFinished
                   
        },
        listenToMy:function(msg){
            console.log(msg);
        }
    }
    
  
}
</script>

<style>
	
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.tabs{height: 43px;width: 100%;background: #eeeeee;}
.tabs a {display: block;float: left;width: 19.33%;color: #333;text-align: center;line-height: 40px;font-size: 15px;
text-decoration: none;margin: 0 7%;}
.content_slide{width:100%;margin:0 auto;}
.tabs a.active{color:#900}
.content_slide .aui-well-item{padding: 14px 15px;position: relative;
  position: relative;display: -webkit-box;margin-bottom: 10px;
  display: -webkit-flex;display: flex;color: #000000;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);}
.aui-well-item-hd{max-width: 120px;margin-right: 10px;width:30%;}
.aui-well-item-hd img{max-width: 120px;width:90%;border: none;border-radius: 5px;}
.aui-well-item-bd{position: relative;width:70%;}
.aui-well-item-bd h4 {font-size: 15px;font-weight: normal;color: #3b3b3b;line-height: 1.4;overflow: hidden;text-align: left;
    text-overflow: ellipsis;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;}

.aui-well-item-bd p {position: absolute;bottom: 0;font-size: 13px;color: #868686;}
.icon-coll {width: 15px;float: left;height: 15px;
    display: block;margin-right: 5px;margin-top: 0px;}
.icon-coll img {width: 15px;height: 15px;display: block;border: none;}





</style>
