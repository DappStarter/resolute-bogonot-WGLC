require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clog swift suggest firm crater remain evil guess kiwi orange truth'; 
let testAccounts = [
"0xa6c2fe67c1d84f0bbd801ab76da6dcff203949e87713be2f884b45c7b3e5878b",
"0x5de427f1a8c7b484f7fbaf3ee9eb43c23b654033ba7bc7c76bddecffb1bfef76",
"0xf7000db29cb8adfb400f99edefd803f58964e01175f4b036152e46e349342629",
"0xeeb1815678071d3a811e67d876e9484fa267ca14cd1305db911928694497fc8f",
"0xb861015dbb5596be24e9515ed88a5b6b0f5b8649ee6f8dda157cbff898feb376",
"0xf914784b5f7819ed57b04200573c456b7be29eedbddf94c7938f6034503614c2",
"0x0662c79d1eb302cc767e96892824e01f8977734e586e8135f7a3eeb8e1a4b08d",
"0xe8e13aa2c9ea4711117e4a63de559712fbddc5ce16de3a17bb371d7f8f12d088",
"0x83e5fe012d15bb8e09b7d09bd286a17295fb4156ed17d2aadd27a056aab29b9b",
"0xefd14380bdfc6297d7e82bc623a5b3c4a003e7aa5bd393d52d1b0674225c4e0b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

