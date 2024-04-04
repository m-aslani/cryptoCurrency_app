import { useEffect, useState } from "react";
import Table from "../modules/Table";
import { getCoinsList } from "../../services/cryptoApi";
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(1);
  const [currency, setCurrency] = useState("usd");

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
      <Table coins={coins} loading={loading} currency={currency} />
      <Pagination count={pageCount} setCount={setPageCount} />
    </div>
  );
}

export default HomePage;
