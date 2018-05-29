<template>
  <div class="hello">
    first
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
var bip39 = require('bip39')
var hdkey = require('ethereumjs-wallet/hdkey')
var util = require('ethereumjs-util')
export default {
  name: 'First',
  data () {
    return {
      msg: '',
      title:'',
      mnemonic:'',
      privateKey:'',
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

        /* 
        let seedHex = bip39.mnemonicToSeedHex(mnemonic);
        */
        

        //3、使用 seed 产生 HD Wallet(Master Key)
        let hdWallet = hdkey.fromMasterSeed(seed);

        //4、获得 BIP32 Root Key
        this.rootkey=hdWallet._hdkey.privateExtendedKey;
        
        //5、产生第一个Ethereum Address
        
        //let key1 = hdWallet.derivePath("m/44'/60'/0'/0/0");
        let key1 = hdWallet.derivePath("m/44'/60'/0'/0");

        //6、 私钥，可以倒入imtoken钱包。
        this.privateKey=key1._hdkey._privateKey.toString('hex');
    

        //7、使用 keypair 中的公钥产生 address。
        let address1 = util.pubToAddress(key1._hdkey._publicKey, true);

        //8、用 EIP55: Mixed-case checksum address encoding 再进行编码，得到收款地址。
        address1 = util.toChecksumAddress(address1.toString('hex'));
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
