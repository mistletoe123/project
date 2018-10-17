<template>
    <div class="Childer" id="Childer"> 
        <h2>{{textF.title}}</h2>
        <div class="text" >
            <img :src="textF.advert_img" v-if="textF.advert_img">
            <div v-html="textF.content"></div>
        </div>
        <!-- center this.$route.params.id-->
    </div>
</template>



<script>
export default {
    name: 'Childer',
    data () {
        return {
            id:this.$route.params.id,
            textF:{}
        }
    },
    created(){ 
        //let self = this;
        this.$axios.post('/apis/ibroker-api/kouzi/getKouziDetail?id='+ this.id ).then((response)=>{
            console.log(response.data.data);
            this.textF = response.data.data;
          
        })  
    }
    
}


</script>

<style scoped>
    h2{font-size:18px;text-align: center;padding:30px 0;color: #333;}  
    .text{width:90%;margin:0 auto;font-size:16px;text-align: left;line-height: 1.5em;margin-bottom: 30px;}
    .text img{width:100%;height:auto;margin-bottom: 30px;}

</style>