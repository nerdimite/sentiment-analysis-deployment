import React from "react";
import positive from "./images/positive.jpg";
import negative from "./images/negative.jpg";

class SentimentDisplay extends React.Component {
  state = {
    p_percent: "0",
    n_percent: "0",
    prob: null,
    inverseProb: null,
    text: ""
  };

  onLoading = bar_state => {
    if (bar_state == "waiting") {
      this.setState({ p_percent: "0", n_percent: "0", text: "" });
    }
  };

  convertPercent = num => {
    const rounded = parseFloat(num).toFixed(3);
    const prob = (rounded * 100).toFixed(1);
    const inverseProb = Math.abs(100 - prob).toFixed(1);
    this.setState({ prob: prob, inverseProb: inverseProb });
    console.log(rounded, prob, inverseProb);
  };

  onGettingPred = res => {
    this.convertPercent(res);
    if (this.state.prob >= 50) {
      this.setState({
        p_percent: `${this.state.prob}`,
        n_percent: `${this.state.inverseProb}`,
        text: "That's positive!"
      });
      console.log("positive");
    } else {
      this.setState({
        p_percent: `${this.state.prob}`,
        n_percent: `${this.state.inverseProb}`,
        text: "Ouch! That hurts"
      });
      console.log("negative");
    }
    console.log(this.state.p_percent, this.state.n_percent);
  };

  render() {
    return (
      <div className="ui container">
        <div className="ui grid">
          <div className="two wide column">
            <img className="ui tiny centered circular image" src={positive} />
          </div>

          <div className="six wide column">
            <div className="ui teal progress" style={{ marginTop: "30px" }}>
              <div
                className="bar"
                style={{ width: `${this.state.p_percent}%` }}
              >
                <div className="progress">{`${this.state.p_percent}%`}</div>
              </div>
            </div>
          </div>

          <div className="six wide column">
            <div className="ui orange progress" style={{ marginTop: "30px" }}>
              <div
                className="bar"
                style={{ width: `${this.state.n_percent}%` }}
              >
                <div className="progress">{`${this.state.n_percent}%`}</div>
              </div>
            </div>
          </div>

          <div className="two wide column">
            <img className="ui tiny centered circular image" src={negative} />
          </div>

          <div className="sixteen wide column">
            <center>
              <h2 className="header">{this.state.text}</h2>
            </center>
          </div>
        </div>
      </div>
    );
  }
}
export default SentimentDisplay;
