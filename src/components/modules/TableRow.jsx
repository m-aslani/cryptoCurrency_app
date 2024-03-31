import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";

import styles from "./TableRow.module.css";


function TableRow({ coin : {image , symbol,name,current_price,total_volume,price_change_percentage_24h:Price_change} }) {
  return (
    <tr>
      <td>
        <div className={styles.symbol}>
          <img src={image} alt="" />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>${current_price.toLocaleString()}</td>
      <td className={Price_change > 0  ? styles.positive : styles.negative}>{Price_change.toFixed(2)}%</td>
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
