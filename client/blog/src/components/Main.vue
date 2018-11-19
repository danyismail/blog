<template>
    <div class="row space">
    <div class="col-md-2">
         
        <button  v-on:click="open" class="btn btn-primary">+ Add Article</button>
        <button v-on:click="close"> close</button>
        Cancel
    </div>
    <div class="col-md-5">
        <div v-if="addArticle" class="article">
            <h6 class="text-warning" v-if="error">Anda harus login untuk menambahkan article </h6>
            Title : <input v-model="title" type="text">
            <textarea v-model="content" name="" id="" cols="50" rows="10">
            </textarea>
            <button v-on:click="post" class="btn btn-success btn-sm">Post</button>
        </div>
    </div>
    <div class="col-md-12">
        <div v:listArticle v-for="(article, index) in listArticle" :key="index" class="card">
            <div class="card-header text-danger">
                {{article.title}}
            </div>
            <div class="card-body">
            <p class="card-text">{{article.content}}</p>
            <hr>
            <!-- <p v-for="(acomment, index) in listComments" :key="index"> {{acomment}}</p> -->
            <div v-if="commentStatus">
                <input v-model="mycomment" type="text" class="form-control"> 
                <button @click="postComment(article._id)" type="button">Add Comment</button>
                <button v-on:click="untoggleComment">Cancel</button>
            </div>

            <button v-on:click="deleted(article._id)" class="btn btn-danger">delete</button> ||
            <button v-on:click="detail(article._id)" class="btn btn-success">detail</button> ||
            <button v-on:click="toggleComment" class="btn btn-info">comment</button> ||
            </div>
            
        </div>
    </div>
    
    </div>
    
</template>
<script>
import jwt from 'jsonwebtoken'
export default {
    mounted() {  
      this.read()
    },
    data(){
        return{
            addArticle : false,
            mycomment : '',
            error : false,
            isLogin : true,
            title : '',
            content : '',
            listArticle : [],
            _id : null,
            commentStatus : false,
            listComments : [],
           
        }
    },
    methods : {
        read : function(){
           axios.get('http://localhost:1212/articles/all')
         .then(data=>{  
             console.log(data.data.data)
             this.listArticle = data.data.data
         })
         .catch(err=>{
            console.log(err)
         })
        axios.get('http://localhost:1212/comments/all')
         .then(data=>{  
             console.log(data.data.data)
             this.listComments = data.data.data
         })
         .catch(err=>{
            console.log(err)
         })
        },
        open : function(){
            this.addArticle = true  
        },
        close : function(){
            this.addArticle = false
        },
        post : function(){
            if(this.isLogin){
                axios.post('http://localhost:1212/articles/add',{
                    title : this.title,
                    content : this.content
                })
                 .then(data=>{
                 this.addArticle = false
                 this.title = ''
                 this.content = ''
                 this.read()

                 })
                 .catch(err=>{
                 console.log('Failed to add article')
                 })
            } else {
                this.error = true
            }
        },
        deleted : function(id){
            axios.delete(`http://localhost:1212/articles/delete/${id}`)
             .then(data=>{
                 console.log('deleted successfuly')
                 this.read()
                 
             })
             .catch(err=>{  
                 console.log(err)
             })
        },
        toggleComment : function(id){
            this.commentStatus = true
            
        },
        untoggleComment : function(id){
            this.commentStatus = false
            
        },
        postComment(id){
            let getToken = localStorage.getItem('token')
            axios.post(`http://localhost:1212/users/comments/${id}`,{
                comments : this.mycomment,
                token : getToken
            })
             .then(data=>{
                 console.log('berhasil menambahkan comment')
             })
             .catch(err=>{  
                 console.log(err)
             })
        }
    }
}
</script>

