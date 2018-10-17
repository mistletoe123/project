<template>
    <div class="loading_container" @touchmove.prevent @scroll.prevent>
        <div class="spinner">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>
            <p class="loadin_tip">{{loadingText}}</p>
        </div>

    </div>
</template>

<script type="text/javascript">
export default {
    name: "loading",
    data(){
        return {
            loadingText:"加载中..." 
        }
    }
    //,
//  props:{
//      loadingText:{
//          type:String,
//          default:"加载中..." 
//      }
//
//  }
}
</script>
<style type="text/css"  scoped>
.loading_container{
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,.5);
    text-align:center;
    z-index: 9999;
    
}
.loading_container span{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
}
.spinner {
    width: 90%;
    height: auto;
    position: relative;
    top:50%;
    left:50%;
    transform: translate(-50%,-45%);
}
.loadin_tip{
    color: #FFF;
    position: relative;
    top:64px;
    font-size:16px;
}
.double-bounce1, .double-bounce2 {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #67CF22;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left:-30px;
    -webkit-animation: bounce 2.0s infinite ease-in-out;
    animation: bounce 2.0s infinite ease-in-out;
}
.double-bounce2 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
}
@-webkit-keyframes bounce {
    0%, 100% { -webkit-transform: scale(0.0) }
    50% { -webkit-transform: scale(1.0) }
}
@keyframes bounce {
    0%, 100% {
        transform: scale(0.0);
        -webkit-transform: scale(0.0);
    } 50% {
        transform: scale(1.0);
        -webkit-transform: scale(1.0);
    }
}
</style>
<style type="text/css" >
.loading .rolling{
        width:50px;
        height:50px;
        border-radius:50%;
        border:1px solid transparent;
        border-top-color: #dedede;
        animation:rolling 2s infinite;
    
}



@keyframes rolling{
    from{
        transform:rotate(0deg);
        -ms-transform:rotate(0deg); /* Internet Explorer */
        -moz-transform:rotate(0deg); /* Firefox */
        -webkit-transform:rotate(0deg); /* Safari 和 Chrome */
        -o-transform:rotate(0deg); /* Opera */
    }
    to{
        transform:rotate(360deg);
        -ms-transform:rotate(360deg); /* Internet Explorer */
        -moz-transform:rotate(360deg); /* Firefox */
        -webkit-transform:rotate(360deg); /* Safari 和 Chrome */
        -o-transform:rotate(360deg); /* Opera */
    }
}
</style>

