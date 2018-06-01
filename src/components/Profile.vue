<template>
  <div class="hello">
    <wv-header title="profile" @headerClick="onHeaderClick" :fixed="true" background-color="#2196f3">
        <div class="btn-back" slot="left">
            <i class="iconfont icon-back" @click="$router.push('/')"></i>
        </div>
        <div class="btn-menu" slot="right">
            <i class="iconfont icon-menu" @click="$router.push('/')"></i>
        </div>
    </wv-header>
    
    <mt-button @click.native="handleClick">Button</mt-button>
    <router-link to="/about">
      about
    </router-link>

    <router-link to="/hash">
      hash
    </router-link>

    <router-link to="/bip39">
      bip39
    </router-link>

    <router-link to="/eth">
      eth
    </router-link>

    <router-link to="/first">
      first
    </router-link>
    <wv-footer class="footer-demo" text="Copyright © 2017 wevue.org"></wv-footer>
  </div>
</template>

<script>

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
        onHeaderClick: function() {
          this.$toast('Hello world!')
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
