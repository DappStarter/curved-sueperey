require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside skull drift rifle stereo puppy grace nasty furnace gaze'; 
let testAccounts = [
"0xbc3e992d1f5c2129537a339ed88bfc65c00676fd109c911a5099d1e010a9ee06",
"0x8329f18966585833f220a5797f025398a23c2476f3ec9aeaf1cd21cc266f0f52",
"0x167f4ae2351a3f0c1b4ec86a84d1850308750717401e03d90dac24e61cd819dd",
"0x1dd4a992429ad569bb63a3d54d2924f2614a18bda45b36b782235cb6e0685bdc",
"0x8ab978a2ea1f98f8177e2c11cfcac4bc42daeb9f7add2198bf3592bba0fbf3c6",
"0x109d56d28940a6e0266bfcf5f67b52e2396e08928a1419c8afc26ef6a9046de6",
"0x69686b04adcc915a4fc146dbe1f44989fd23b2f2fd159786db1bfd61b9c91c95",
"0xfddd9d71419b61797bfedd237ba46f0dafa50a89efbd7052c042f84d0eaf6735",
"0x267df5601555d3bb28ca9e03ea4671f5fcc2e77e0a32dc7d7e67e5e99ec1497d",
"0xcd66ea611454c06185a4010088e4dfbd02baeb9bc03d344a1358ac1146aa84f4"
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
            version: '^0.5.11'
        }
    }
};
