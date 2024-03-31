import TableRow from "./TableRow";
import { ThreeDots } from "react-loader-spinner";

import styles from "./Table.module.css";

function Table({ coins, loading }) {
  return (
    <div className={styles.container}>
      {loading ? (
        <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#3874ff"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow key={coin.id} coin={coin} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;
