import React from "react";
import css from "./Statistics.module.css";

function Statistics({title, stats}) {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.statList}>
          {stats.map(element => {
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