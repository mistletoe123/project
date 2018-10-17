<template>
    <div class="Dolist" id="Dolist"> 
        <div class="content_slide">
            <!--v-on:click="doThis(item)"  -->
            <router-link href="javascript:void(0);" v-bind:to="'/homechid/'+item.id" class="aui-well-item"   v-for="(item,i) in items" :key="item.id">
                <div class="aui-well-item-hd" >
                    <img :src="item.img" alt="">
                </div>
                <div class="aui-well-item-bd" >
                    <h4>{{item.title}}</h4>
                    <p>
                        <span class="icon icon-coll">
                            <img src="../../style/images/icon-coll.png" alt="">{{item.money}}
                        </span>
                        <span class="icon icon-coll">
                            <img src="../../style/images/icon-time.png" alt="">{{item.reward}}
                        </span>
                    </p>
                </div>
            </router-link>
        </div>       
        <!-- center -->
    </div>
</template>



<script>
export default {
    name: 'Dolist',
    data () {
      return {
        items:[],
        showHead:false
      }
     
    },
    created(){ 
        let self = this;
        this.$axios.post('/apis/ibroker-api/homepage/hotProducts?type=2').then((response)=>{
            console.log(response.data);
            self.items = response.data.data;
          
        })  
    },
    methods:{
//      doThis:function(e){
//          this.$emit('showhome',this.showHead);
//          
//      }
    }
}
</script>

<style>
    



</style>