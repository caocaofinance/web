<template>
  <mu-grid-list class="gridlist">
        <mu-sub-header>最新文章</mu-sub-header>
        <mu-grid-tile @click="view(index)" v-for="tile, index in list" :key="index">
          <img :src="tile.image" >
          <span slot="title">{{tile.title}}</span>
          <span slot="subTitle">by <b>{{tile.author}}</b></span>
        </mu-grid-tile>
      </mu-grid-list>
</template>

<script>
import List from './List.vue'
import Msg from './Msg.vue'
import Profile from './Profile.vue'
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data () {
    return {
      list:[
        {
          id:'59',
          title:'最好的风景，总是在脚下',
          image:'http://www.muse-ui.org/static/img/sun.a646a52.jpg',
          author:'caocao'
        }
      ],
      thumb:'../assets/user.png',
      description:'hahaha',
      component:[List,Msg,Profile]
    }
  },
  methods: {
    handleClick: function() {
      this.$toast('Hello world!')
    },
    view(index){
      console.log(this.list[index]);
      this.$router.push('/view/'+this.list[index].id);
    }
  },mounted(){
    this.selected=0;
    this.$http.get('https://raw.githubusercontent.com/caocaofinance/json/master/list.json').then(response => {
  
      // get body data
      this.list = response.body;
    }, response => {
      // error callback
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
