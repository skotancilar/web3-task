import {useEffect, useState} from 'react';
import './App.css';
import {transferEvents} from './api/transferEvents';
import {tnxList} from './api/tnxList';
import {AxiosResponse} from 'axios';

// const pancakeSwapRoterV2 = '0x10ed43c718714eb63d5aa57b78b54704e256024e';

function App() {
	const [transfers, setTransfers] = useState([]);
	const [transactionList, setTransactionList] = useState([]);

	useEffect(() => {
		transferEvents.then((res: AxiosResponse) => {
			setTransfers(res.data.result);
			console.log('transferEvents', transfers);
			// const pancakeSwap = transfers.filter(
			// 	({to}) => to === '0x10ed43c718714eb63d5aa57b78b54704e256024e',
			// );
			// console.log(pancakeSwap);
		});
		tnxList.then((res: AxiosResponse) => {
			setTransactionList(res.data.result);
			console.log('TNX List', transactionList);
		});
	}, [transfers, transactionList]);
	return (
		<div className='bg-black text-white text-center'>{/* {transfers} */}</div>
	);
}

export default App;
