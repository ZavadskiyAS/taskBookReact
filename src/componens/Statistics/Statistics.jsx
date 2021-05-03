import React from "react";
import css from "./Statistics.module.css";
import statisticalData from './statistical-data.json';

function Statistics({title, stats}) {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>

      <ul className={css.statList}>
          {statisticalData.map(element => {
              return(
                <li className={css.item}>
                 <span className={css.label}>{element.label}</span>
                 <span className={css.percentage}>{element.percentage}</span>
               </li>)
          })}

      </ul>
    </section>
  );
}


export default Statistics;