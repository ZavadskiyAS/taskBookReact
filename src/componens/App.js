// import React from 'react';
// import './App.module.css';

// export default function App() {
//     return (
//         <>
//             {/* <Profile/>
//             <Statistics title="Upload stats" stats={statisticalData}/>
//             <FriendList friends={friends}/>
//             <TransactionHistory items={transactions} /> */}
//         </>
//     )
// }

import React, { Component } from 'react';
import Section from './count/Section';
import FeedbackOptions from './count/FeedbackOptions';
import Statistics from './count/Statistics';
// import Notification from './count/Notification';

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  onLeaveFeedback = e => {
    const name = e.target.name;
    this.setState(state => ({
      [name]: state[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;