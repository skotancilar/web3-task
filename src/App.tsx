import {useEffect, useState} from 'react';
import './App.css';
import {fetchTransfers} from './api';
import {AxiosResponse} from 'axios';

function App() {
	const [transfers, setTransfers] = useState([]);

	useEffect(() => {
		fetchTransfers.then((res: AxiosResponse) => {
			setTransfers(res.data.result);
			console.log(transfers);
		});
	}, [transfers]);
	return (
		<div className='bg-black mr-[2.2px] text-white text-center'>
			PLACEHOLDER
		</div>
	);
}

export default App;
