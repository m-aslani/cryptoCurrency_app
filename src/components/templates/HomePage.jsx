import { useEffect, useState } from "react";
import Table from "../modules/Table";
import { getCoinsList } from "../../services/cryptoApi";
import Pagination from "../modules/Pagination";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const res = await fetch(getCoinsList(pageCount));
      const json = await res.json();
      setCoins(json);
      setLoading(false);
    };

    getData();
  }, [pageCount]);

  return (
    <div>
      <Table coins={coins} loading={loading} />
      <Pagination count={pageCount} setCount = {setPageCount}/>
    </div>
  );
}

export default HomePage;
