import axios from 'axios';

const {REACT_APP_API_KEY, REACT_APP_ADDRESS} = process.env;

const api = axios.create({baseURL: 'https://api.bscscan.com/api'});

export const tnxList = api.get(`?module=account
&action=txlist
&address=${REACT_APP_ADDRESS}
&startblock=0
&endblock=99999999
&page=1
&offset=500
&sort=asc
&apikey=${REACT_APP_API_KEY}`);
