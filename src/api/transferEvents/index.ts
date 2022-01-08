import axios from 'axios';

const {REACT_APP_API_KEY, REACT_APP_CONTRACT_ADDRESS, REACT_APP_ADDRESS} =
	process.env;

const api = axios.create({baseURL: 'https://api.bscscan.com/api'});

export const transferEvents = api.get(`?module=account
&action=tokentx
&contractaddress=${REACT_APP_CONTRACT_ADDRESS}
&address=${REACT_APP_ADDRESS}
&page=1
&offset=500
&startblock=1
&endblock=999999999
&sort=asc
&apikey=${REACT_APP_API_KEY}`);
