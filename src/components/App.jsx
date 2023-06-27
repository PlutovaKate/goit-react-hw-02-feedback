import React from 'react';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncreamentGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  handleIncreamentNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleIncreamentBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  render() {
    return (
      <div>
        <h1>Please Leave feedback</h1>
        <button type="button" onClick={this.handleIncreamentGood}>
          Good
        </button>
        <button type="button" onClick={this.handleIncreamentNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.handleIncreamentBad}>
          Bad
        </button>

        {/* <ButtonItem
          onIncreamentGood={this.handleIncreamentGood}
          onIncreamentNeutral={this.handleIncreamentNeutral}
          onIncreamentBad={this.handleIncreamentBad}
        /> */}

        <div>
          <h1>Statistic</h1>
          <h2>No feedback given</h2>
          <ul>
            <li>
              Good:
              <span>{this.state.good}</span>
            </li>
            <li>
              Neutral:
              <span>{this.state.neutral}</span>
            </li>
            <li>
              Bad:
              <span>{this.state.bad}</span>
            </li>
            <li>
              Total:
              <span>
                {this.state.good + this.state.neutral + this.state.bad}
              </span>
            </li>
            <li>
              Positive feedback:
              <span>0</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
