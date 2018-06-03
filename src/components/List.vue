<template>
  <div class="hello">
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
        <ul>
            <li v-for="item in list">{{ item }}</li>
        </ul>
    </mt-loadmore>
    <router-link to="/">
      home
    </router-link>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  name: 'List',
  props: {
    msg: String
  },
  data () {
    return {
      selected:'',
      thumb:'../assets/user.png',
      description:'hahaha',
      list:[1,2,3],
      topStatus:'',
      onTopLoaded:''
    }
  },
  methods:{
    loadTop() {
        var list=[];
        var i=0;
        for(i=0;i<5;i++){
            list.push(Math.random());
        }
        this.list=list;
        this.$refs.loadmore.onTopLoaded();
    },
    loadBottom() {
    // load more data
        this.allLoaded = true;// if all data are loaded
        this.$refs.loadmore.onBottomLoaded();
    }
  },
  mounted(){
    Toast('init');
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
  display: block;
  margin: 0 10px;
  width: 100%;
  height: 50px;
  line-height: 50px;
}
a {
  color: #42b983;
}
</style>
