import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";

import { marketChart } from "../../services/cryptoApi";

import { HiMiniCurrencyEuro } from "react-icons/hi2";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { HiCurrencyYen } from "react-icons/hi2";

import styles from "./TableRow.module.css";

function TableRow({ coin, currency, setChart }) {
  const {
    id,
    image,
    symbol,
    name,
    current_price,
    total_volume,
    price_change_percentage_24h: Price_change,
  } = coin;
  const showHandler = async () => {
    try {
      const res = await fetch(marketChart(id));
      const json = await res.json();
      console.log(json);
      setChart({...json , coin});
    } catch (error) {
      setChart(null);
    }
  };

  return (
    <tr>
      <td>
        <div className={styles.symbol} onClick={showHandler}>
          <img src={image} alt="" />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>
        <span style={{ verticalAlign: "middle" }}>
          {currency === "usd" ? (
            <HiMiniCurrencyDollar fontSize="1.4rem" />
          ) : currency === "eur" ? (
            <HiMiniCurrencyEuro fontSize="1.4rem" />
          ) : (
            <HiCurrencyYen fontSize="1.4rem" />
          )}{" "}
        </span>
        {current_price.toLocaleString()}
      </td>
      <td className={Price_change > 0 ? styles.positive : styles.negative}>
        {Price_change.toFixed(2)}%
      </td>
      <td>{total_volume.toLocaleString()}</td>
      <td>
        {Price_change > 0 ? (
          <img src={chartUp} alt={name} />
        ) : (
          <img src={chartDown} alt={name} />
        )}
      </td>
    </tr>
  );
}

export default TableRow;
