import React, { Component } from 'react';

import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';
import Section from './components/Section/Section';
import Feedback from './components/Feedback/Feedback';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  incrementFeedback = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };
  procentFeedback = () => {
    const result =
      (this.state.good /
        (this.state.good + this.state.bad + this.state.neutral)) *
      100;
    if (isNaN(result)) {
      return `Leave a feedback`;
    } else {
      return `${result}%`;
    }
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <Feedback options={this.state} increment={this.incrementFeedback} />
        </Section>
        {good > 0 || neutral > 0 || bad > 0 ? (
          <div>
            <Statistics
              options={this.state}
              procentFeedback={this.procentFeedback}
            />
          </div>
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </div>
    );
  }
}
export default App;
