<template>
  <div>
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button @click="gohome" icon slot="left">
        <mu-icon value="keyboard_arrow_left"></mu-icon>
      </mu-button>
      {{article.title}}
    </mu-appbar>
    <mu-card-media :title="article.title" :sub-title="article.time">
      <img src="http://www.muse-ui.org/static/img/sun.a646a52.jpg">
    </mu-card-media>
     <mu-card-header :title="article.author" sub-title="曹操财经创始人">
    <mu-avatar slot="avatar">
      <img src="../assets/logo.png">
    </mu-avatar>
    </mu-card-header>
    <mu-card-text>
      {{article.text}}
    </mu-card-text>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data () {
    return {
        article:{
        id:'',
      selected:'',
      thumb:'../assets/user.png',
      description:'hahaha',
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
    this.selected=0;
    var id=this.$route.params.id;
    this.$http.get('https://raw.githubusercontent.com/caocaofinance/json/master/'+id+'.json').then(response => {
  
      // get body data
      this.article = response.body;
    }, response => {
      // error callback
        Toast('文章不存在！');
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
