import React, { useState } from "react";

import styles from "./Pagination.module.css";

function Pagination({count , setCount}) {
  const [page, setPage] = useState(1);
  

 const previousHandler = () => {
    if(count <= 1){
        return
    }
    setCount((count) => count - 1);
    if(count % 3 === 1 && count > 1){
        setPage(page => page - 3);
    }
  };
 const nextHandler = () => {
    if(count >= 10) return;
    setCount((count) => count + 1);
    if(count % 3 === 0 && count > 1){
        setPage(page => page + 3);
    }
  };

  return (
    <div className={styles.pagination}>
      <button onClick={previousHandler} className={count === 1 ? styles.disable : null}>Previous</button>
      <span>{page-2 > 1 ? "..." : ""}</span>
      <p className={page === count ? styles.selected : null}>{page}</p>
      <p className={page+1 === count ? styles.selected : null}>{page+1 < 10 && page +1}</p>
      <p className={page+2 === count ? styles.selected : null}>{page+2 < 11 &&  page +2}</p>
      <span>{page+2 < 10 ? "..." : ""}</span>
      <button onClick={nextHandler} className={count === 10 ? styles.disable : null}>Next</button>
    </div>
  );
}

export default Pagination;
