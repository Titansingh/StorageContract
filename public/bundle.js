const simpleStorageABI = [
    {
      "constant": true,
      "inputs": [],
      "name": "data",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x73d4a13a"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_data",
          "type": "string"
        }
      ],
      "name": "set",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x4ed3885e"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "get",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x6d4ce63c"
    }
  ];
const simpleStorageAddress = '0x2782fc4b19C78690b79699108Df6674c5346b439';
var web3 = new Web3('http://localhost:7545');
var simpleStorage = new web3.eth.Contract(simpleStorageABI, simpleStorageAddress);

document.addEventListener('DOMContentLoaded', () => {
    const $setData = document.getElementById('setData');
    const $data = document.getElementById('data');
    let accounts = [];
  
    web3.eth.getAccounts()
    .then(_accounts => {
      accounts = _accounts;
    });
  
    const getData = () => {
      simpleStorage.methods
        .get()
        .call()
        .then(result => {
          $data.innerHTML = result;
        })
    };
    getData();
  
    $setData.addEventListener('submit', e => {
      e.preventDefault();
      const data = e.target.elements[0].value;
      simpleStorage.methods
        .set(data)
        .send({from: accounts[0]})
        .then(getData);
    });
  });