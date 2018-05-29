<template>
  <div class="hello">
    hash
    <h1>{{ msg }}</h1>
    <p>mnemonic:{{ mnemonic }}</p>
    <p>seedHex:{{ seedHex }}</p>
    <p>rootkey:{{ rootkey }}</p>
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
const bitcoin = require('bitcoinjs-lib')
export default {
  name: 'Bip39',
  data () {
    return {
      msg: '',
      title:'',
      mnemonic:'',
      seedHex:'',
      rootkey:'',
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
          //
        let
            words = bip39.generateMnemonic(),
            password = '';
        //1、生成一个助记词
        this.mnemonic=words;


        //2、该助记词使用 PBKDF2 转化为种子:
        let seedHex = bip39.mnemonicToSeedHex(words);

        this.seedHex=seedHex;
        //let seedHex = bip39.mnemonicToSeedHex(words, password);
 

        // 种子用于使用 HMAC-SHA512 生成根私钥:
        let root = bitcoin.HDNode.fromSeedHex(seedHex);
        const rootPrv=root.toBase58();

        //BIP32 Root Key
        this.rootkey=rootPrv;
        const rootPub=root.neutered().toBase58();


        //bip44
        // 从该根私钥，导出子私钥（参见 BIP32），其中节点布局由BIP44设置，生成派生key:
        let child0 = root.derivePath("m/44'/60'/0'/0");
        const privateKey=child0.keyPair.toWIF();
        const address=child0.getAddress();
            

        this.privateKey=privateKey;
        this.address=address;
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
