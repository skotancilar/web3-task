import axios from 'axios';

const API_KEY = 'V49F8RQAREENQDCFZS182JMJ27BAX789BD';
const CONTRACT_ADRESS = '0x7961Ade0a767c0E5B67Dd1a1F78ba44F727642Ed';
const ADDRESS = '0xee62650fa45ac0deb1b24ec19f983a8f85b727ab';

const api = axios.create({baseURL: 'https://api.bscscan.com/api'});

const fetchTransfers = api.get(`?module=account
&action=tokentx
&contractaddress=${CONTRACT_ADRESS}
&address=${ADDRESS}
&page=1
&offset=500
&startblock=0
&endblock=999999999
&sort=asc
&apikey=${API_KEY}`);

export {fetchTransfers};
