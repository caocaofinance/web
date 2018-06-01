<template>
  <div class="hello">
    home
    <mt-button @click.native="handleClick">Button</mt-button>
    <h1>{{ selected }}</h1>
    <wv-panel title="文字组合列表">
      <wv-media-box :thumb="thumb" title="标题一" :description="description" to="/" type="text"></wv-media-box>
      <wv-media-box :thumb="thumb" title="标题二" :description="description" to="/" type="text"></wv-media-box>

      <wv-cell title="查看更多" is-link slot="ft"></wv-cell>
    </wv-panel>
    <wv-tabbar>
    <wv-tabbar-item to="/news">
      <img class="weui-tabbar__icon" src="../assets/flash.png" slot="icon"> 快讯
    </wv-tabbar-item>
    <wv-tabbar-item to="/msg">
      <span slot="icon" style="display: inline-block; position: relative;">
        <img class="weui-tabbar__icon" src="../assets/msg.png" slot="icon">
        <wv-badge is-dot style="position: absolute;top: 0;right: -6px;">8</wv-badge>
      </span>
       消息
    </wv-tabbar-item>
    <wv-tabbar-item to="/profile">
      <img class="weui-tabbar__icon" src="../assets/user.png" slot="icon"> 我
    </wv-tabbar-item>
  </wv-tabbar>
  </div>
</template>

<script>

export default {
  name: 'Home',
  props: {
    msg: String
  },
  data () {
    return {
      selected:'',
      thumb:'../assets/user.png',
      description:'hahaha'
    }
  },
  methods: {
        handleClick: function() {
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
