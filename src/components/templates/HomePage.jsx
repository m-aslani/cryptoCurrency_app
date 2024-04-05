import { useEffect, useState } from "react";
import { getCoinsList } from "../../services/cryptoApi";

import Table from "../modules/Table";
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";
import Chart from "../modules/Chart";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(1);
  const [currency, setCurrency] = useState("usd");
  const [chart, setChart] = useState(null);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const res = await fetch(getCoinsList(pageCount, currency));
        const json = await res.json();
        setCoins(json);
        setLoading(false);
      } catch (error) {
        alert(error);
      }
    };

    getData();
  }, [pageCount, currency]);

  return (
    <div>
      <Search currency={currency} setCurrency={setCurrency} />
      <Table coins={coins} loading={loading} currency={currency} setChart={setChart} />
      <Pagination count={pageCount} setCount={setPageCount} />
      {!!chart && <Chart chart={chart} setChart={setChart}/>}
    </div>
  );
}

export default HomePage;
