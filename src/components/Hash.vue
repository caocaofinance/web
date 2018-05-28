<template>
  <div class="hello">
    hash
    <h1>{{ msg }}</h1>
    <p>{{ privateKey }}</p>
    <p>{{ address }}</p>
    <button v-on:click="make">make</button>
    <router-link to="/">
      home
    </router-link>
  </div>
</template>

<script>
import secp256k1 from 'secp256k1/elliptic'

import crypto from 'crypto'
import keccak from 'keccak'

export default {
  name: 'Hash',
  data () {
    return {
      msg: '',
      title:'',
      privateKey:'',
      address:'',
      items:[]
    }
  },
  methods:{
      make: function (event) {
          var privateKey=crypto.randomBytes(32);
          var publicKey = secp256k1.publicKeyCreate(privateKey, false).slice(1);
          var address = keccak("keccak256").update(publicKey).digest().slice(-20)
          var pk=privateKey.toString('hex')
          var ad=address.toString('hex')
          this.privateKey=pk;
          this.address=ad;
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
