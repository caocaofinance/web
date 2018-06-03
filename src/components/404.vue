<template>
  <div>
    <img :src="bg"/>
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
        bg:'../assets/404.jpg',
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
