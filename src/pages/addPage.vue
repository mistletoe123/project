<template>
    <div id="addPage">
        <h2>添加帖子</h2>
        <div class="addForm">
            <form>  
                <div class="labelText">
                    <label>主题:</label>
                    <textarea type="text" v-model="blog.title" required="required" /></textarea>     
                </div>
                <div class="labelText labelImg">
                    <p>上传图片<input class="file" name="file" type="file" accept="image/png,image/gif,image/jpeg" @change="update($event)"/></p>     
                </div>
                <div class="labelText">
                    <label>标签:</label>
                    <select v-model="selected">
                        <option v-for="(author,index) in authors" :key="author.text"  v-bind:value="author.value" :disabled="author.disabled">
                            {{ author.text }}
                            <!--{{ author.text }}{{index}}{{author.disabled}}-->
                        </option>
                    </select>
                </div>    
                <button v-on:click.prevent="AddPost">发表帖子</button>
            </form>   
        </div>
        <loading v-show="!is_uploading"></loading>
    </div>
</template>

<script>
import loading from "@/loading/loading" 


export default {
    name: 'addPage',
    components: {
        loading
    },
    data(){
        return {
            //title:'',
            is_uploading:false,
            blog:{
                title:"",
                author:"",
            },
            selected: '借款',  
            //authors:["借款","信用卡","网贷"],
            authors: [
                {text: '借款', value: '借款', disabled: ''},  
                {text: '信用卡', value: '信用卡'},
                {text: '保险', value: '保险'},
                {text: '征信', value: '征信'}
            ]
        }    
    },
    methods:{
        //图片上传

        update(e){
            this.loading();
            // 利用fileReader对象获取file
            var file = e.target.files[0];
            var filesize = file.size;
            var filename = file.name;
            // 2,621,440   2M
            if (filesize > 2101440) {
                this.$layer.msg('图片尺寸不能超过2M');
                return false;
            }
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = e =>{
                var imgcode = e.target.result;
                // console.log(imgcode);
                let param = new URLSearchParams();
                param.append('file',imgcode); 
                console.log(param);
//              let config = {
//                  headers:{'Content-Type':'multipart/form-data'}
//              };
                this.$axios.post('/apis/ibroker-api/friend/friendImgUploadFor64',param).then(response=>{
                    console.log(response.data);
                }) 
            
                
            }
 
        },
        
   

        
        //接口
        AddPost:function(){
            var title=this.blog.title;
            var author=this.selected;
            if(title=='' ||title==null ||title==undefined ){
                this.$layer.msg('请输入主题');
                return false;
            }
            
            var params = new URLSearchParams();
            params.append('user_id','100582');
            params.append('type','3');
            params.append('label',author);
            params.append('content',title);
            params.append('imgsUrl','');
           
            this.$axios.post('/apis/ibroker-api/friend/addFriend',params).then((response)=>{
                console.log(response.data);
                this.$layer.msg(response.data.message);
                setTimeout(() => {
                    this.$router.go(-1);
                },2000)
            }); 




            
            
            
            
        }
    },
//  created: function(){
//      this.blog.authors = '111';
//  }
    
    
    
    
  }
</script>

<style scoped>
h2{font-size:18px;text-align:center;color:#333;padding:20px 0;}  
input {width:100%;margin:0 auto;}   
button{width:80%;margin:40px auto 10px;background:#1896f1;border-radius: 10px;font-size: 16px;color:#fff;padding:15px 0;}
.addForm{width:92%;margin:0 auto;}
.addForm textarea{width:96%;margin:0 auto;background:transparent;height: 100px;padding:2% 1% ;font-size: 18px;color: #666;border:1px solid #999;
border-radius: 10px;}

.labelText{width:100%;margin:10px auto;}
.labelText label{font-size:18px;text-align:left;color:#666;display: block;margin:10px auto;}
select{width:100%;margin:0 auto;background:transparent;padding:8px 0;font-size:18px;color:#666;border: 1px solid #999;border-radius: 1px;
padding-left: 5%;-webkit-appearance:menulist-button;}

.labelImg{width:100%;margin:15px auto;background:transparent;border:1px solid #999;font-size:16px;color:#333;
height: 40px;line-height: 40px;position: relative;border-radius: 4px;}
.labelImg input.file{width:100%;margin:0 auto;background:rgba(0,0,0,0.3);height: 40px;line-height: 40px;
position:absolute;top:0%;left:0%;z-index:9;}


   
</style>