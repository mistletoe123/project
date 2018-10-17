<template>
	<div class="Dolist"> 
	    <div class="content_slide">
            <a href="javascript:void(0);" class="aui-well-item" v-on:click="onClick">
                <div class="aui-well-item-hd">
                    <img src="../../style/images/ad-item001.png" alt="">
                </div>
                <div class="aui-well-item-bd">
                <h4>{{msgfromfather}}</h4>
                    <p>
                        <i class="icon icon-coll">
                            <img src="../../style/images/icon-coll.png" alt="">
                        </i>
                        <i class="icon icon-coll">
                            <img src="../../style/images/icon-time.png" alt="">
                        </i>2018-07-18
                    </p>
                </div>
            </a>
            <a href="javascript:void(0);" class="aui-well-item">
                <div class="aui-well-item-hd">
                    <img src="../../style/images/ad-item001.png" alt="">
                </div>
                <div class="aui-well-item-bd">
                <h4>响应长三角一体化发展布局 共谋儿童健康行动新篇</h4>
                    <p>
                        <i class="icon icon-coll">
                            <img src="../../style/images/icon-coll.png" alt="">
                        </i>
                        <i class="icon icon-coll">
                            <img src="../../style/images/icon-time.png" alt="">
                        </i>2018-07-18
                    </p>
                </div>
            </a>
        </div>       
        <!-- center -->
        
	</div>
	
	
</template>

<script>
export default {
    name: 'Dolist',
    data () {
        return {
          msg: 'hello word! my name is Queen'
         
          
        }
    },
    props:['msgfromfather'],
    methods:{
        onClick:function(){
           //console.log(this.msgfromfather);
           this.$emit('child-tell-me-something', this.msg);
        }
    }
}
</script>

<style>
    



</style>