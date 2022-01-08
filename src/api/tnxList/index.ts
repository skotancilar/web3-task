import axios from 'axios';

const {REACT_APP_API_KEY, REACT_APP_ADDRESS} = process.env;

const api = axios.create({baseURL: 'https://api.bscscan.com/api'});

export const tnxList = api.get(`?module=account
&action=txlist
&address=0xee62650fa45ac0deb1b24ec19f983a8f85b727ab&startblock=0
&endblock=99999999
&page=1
&offset=500
&sort=asc
&apikey=V49F8RQAREENQDCFZS182JMJ27BAX789BD`);
