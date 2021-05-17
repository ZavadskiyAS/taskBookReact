import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className="statisticsList">
    <li className="statisticsItem">
      <p className="statisticName">
        Good:<span className="statisticValue">{good}</span>
      </p>
    </li>
    <li className="statisticsItem">
      <p className="statisticName">
        Neutral:<span className="statisticValue">{neutral}</span>
      </p>
    </li>
    <li className="statisticsItem">
      <p className="statisticName">
        Bad:<span className="statisticValue">{bad}</span>
      </p>
    </li>
    <li className="statisticsItem">
      <p className="statisticName">
        Total:<span className="statisticValue">{total()}</span>
      </p>
    </li>
    <li className="statisticsItem">
      <p className="statisticName">
        Positive feedback:
        <span className="statisticValue">{positivePercentage()}%</span>
      </p>
    </li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};

export default Statistics;