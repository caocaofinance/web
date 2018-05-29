<template>
  <div class="hello">
    hash
    <h1>{{ msg }}</h1>
    <p>mnemonic:{{ mnemonic }}</p>
    <p>privateKey:{{ privateKey }}</p>
    <button v-on:click="make">make</button>

    <div class="container">
        address:<input type="text" v-model="address">
        <button type="button"
            v-clipboard:copy="address"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError">Copy!</button>
    </div>
    <router-link to="/">
      home
    </router-link>
  </div>
</template>

<script>
import secp256k1 from 'secp256k1/elliptic'

import crypto from 'crypto'
import keccak from 'keccak'
import bip39 from 'bip39'
export default {
  name: 'Hash',
  data () {
    return {
      msg: '',
      title:'',
      mnemonic:'',
      privateKey:'',
      publicKey:'',
      address:'',
      items:[]
    }
  },
  created(){
  },
    mounted(){
        this.make();
        console.log('begin')
    },
  methods:{
      make: function (event) {
          var mnemonic=bip39.generateMnemonic();
          this.mnemonic=mnemonic;
          var privateKey=crypto.randomBytes(32);
          var publicKey = secp256k1.publicKeyCreate(privateKey, false).slice(1);
          var address = keccak("keccak256").update(publicKey).digest().slice(-20)
          this.privateKey=privateKey.toString('hex')
          this.address=address.toString('hex')
      },
      onCopy: function (e) {
        alert('You just copied: ' + e.text)
    },
    onError: function (e) {
        alert('Failed to copy texts')
    },
    
    
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
