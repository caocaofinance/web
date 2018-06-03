<template>
  <div class="hello">
    <mt-header fixed title="我">
        <router-link to="/" slot="left">
            <mt-button  @click="onHeaderClick" icon="back">返回</mt-button>
        </router-link>
    </mt-header>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  name: 'Profile',
  props: {
    msg: String
  },
  data () {
    return {
      selected:''
    }
  },
  methods: {
        onHeaderClick() {
          Toast('Upload Complete');
        },
        handleClose(){

        }
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
