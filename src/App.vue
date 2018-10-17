<template>
    <div id="app">
        <!-- 头部 -->    
        <!--<div class="tabs" v-if="showHead">
            <router-link  to="/"  exact>推广产品</router-link> 
            <router-link  to="/page01" exact>健康资讯</router-link> 
            <router-link  to="/page02" exact>我的博客</router-link> 
        </div>   -->
        
     <!--   <blog-header v-if="showHead"></blog-header>-->
        <router-view></router-view>
    </div>
</template>

<script>
//import BlogHeader from './components/BlogHeader'
export default {
    name: 'app',
    
    data(){
        return {
            showHead:true
        }    
    }
    //,
//  components: {
//      BlogHeader
//  }
    //,
//  beforeRouteEnter (to, from, next) {
////      next(vm => {
////        // 通过 `vm` 访问组件实例
////       vm.deleteScan();
////      })
//      console.log(next);
//
//  }
  }
</script>

<style>
.fix{width:100%;margin:0 auto;background:#f5f5f5;height: 10px;}	
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

</style>
