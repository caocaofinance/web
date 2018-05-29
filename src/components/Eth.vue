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
var bip39 = require('bip39')
var hdkey = require('ethereumjs-wallet/hdkey')
var util = require('ethereumjs-util')
export default {
  name: 'Eth',
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
        //1、生成一个助记词
        var mnemonic = bip39.generateMnemonic();
        this.mnemonic=mnemonic;


        //2、将 mnemonic code 转成 binary 的 seed
        let seed = bip39.mnemonicToSeed(mnemonic);

        let seedHex = bip39.mnemonicToSeedHex(mnemonic);

        this.seedHex=seedHex;

        //3、使用 seed 产生 HD Wallet。如果要说更明确，就是产生 Master Key 并记录起来。
        let hdWallet = hdkey.fromMasterSeed(seed);

        this.rootkey=hdWallet;
        
        //4、产生第一个 Ethereum Address
        let key1 = hdWallet.derivePath("m/44'/60'/0'/0/0");

        //5、使用 keypair 中的公钥产生 address。
        let address1 = util.pubToAddress(key1._hdkey._publicKey, true);

        //6、用 EIP55: Mixed-case checksum address encoding 再进行编码
        address1 = util.toChecksumAddress(address1.toString('hex'));
        //this.privateKey=privateKey;
        this.address=address1;
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
