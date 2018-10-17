<template>
    <div id="head">
        <!-- 头部 -->    
        <div class="tabs">
            <router-link  to="/"  exact>推广产品</router-link> 
            <router-link  to="/page01" exact>健康资讯</router-link> 
            <router-link  to="/page02" exact>我的帖子 </router-link> 
        </div>   
    </div>
</template>

<script>

export default {
    name: 'blog-header',
//  data(){
//      return {
//          showHead:true
//      }    
//  }
}
</script>

<style scoped>
	
.tabs{height: 53px;width: 100%;background: #eeeeee;margin-bottom:20px;}
.tabs a {display: block;float: left;width: 19.33%;color: #333;text-align: center;line-height: 50px;font-size: 15px;
text-decoration: none;margin: 0 7%;}
.tabs a.router-link-active{color:#1896f1}

</style>
