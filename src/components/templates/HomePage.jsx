import { useEffect, useState } from 'react'
import Table from '../modules/Table';
import { getCoinsList } from '../../services/cryptoApi';

function HomePage() {

    const [coins,setCoins] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        const getData = async ()=>{
            const res = await fetch(getCoinsList());
            const json = await res.json();
            setCoins(json);
            setLoading(false);
        };

        getData();
    },[])


  return (
    <div>
        <Table coins={coins} loading={loading}/>
    </div>
  )
}

export default HomePage