<template>
  <div>
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button @click="gohome" icon slot="left">
        <mu-icon value="keyboard_arrow_left"></mu-icon>
      </mu-button>
      文章详情
    </mu-appbar>
    <mu-card-media :title="article.title" :sub-title="article.time">
      <img :src="article.image">
    </mu-card-media>
     <mu-card-header :title="article.author" :sub-title="article.bio">
    <mu-avatar slot="avatar">
      <img :src="article.avatar">
    </mu-avatar>
    </mu-card-header>
    <mu-card-text>
      {{article.text}}
    </mu-card-text>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import { MessageBox } from 'mint-ui';
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data () {
    return {
        article:{
            title:'',
            time:'',
            image:'',
            avatar:'',
            time:'',
            text:''
        },
    }
  },
  methods: {
    handleClick: function() {
      this.$toast('Hello world!')
    },
    gohome(){
        this.$router.push('/');
    }
  },mounted(){
    var id=this.$route.params.id;
    this.$http.get('https://raw.githubusercontent.com/caocaofinance/json/master/'+id+'.json').then(response => {
      // get body data
      this.article = response.body;
    }, response => {
      // error callback
        MessageBox({
            title: '文章不存在！',
            message: '或可能网络原因',
            showCancelButton: true
        });
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
