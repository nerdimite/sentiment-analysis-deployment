import React from "react";
import neutral from "./neutral.svg";
import positive from "./positive.jpg";
import negative from "./negative.jpg";

class SentimentIndicator extends React.Component {
  state = {
    image: neutral,
    text: "",
    loader: "active",
    loader_text: "Waiting for input"
  };

  onLoading = load_state => {
    this.setState({ image: neutral, text: "" });
    if (load_state == "waiting") {
      this.setState({ loader: "active", loader_text: "Waiting for input" });
    } else if (load_state == "analysing") {
      this.setState({
        loader: "active",
        loader_text: "Analysing Sentiment..."
      });
    }
  };
  onGettingPred = res => {
    this.setState({ loader: "disabled" });

    console.log(res);

    if (res == "1.0") {
      this.setState({
        image: positive,
        text: "That's positive!"
      });
    } else if (res == "0.0") {
      this.setState({
        image: negative,
        text: "Ouch! that hurts"
      });
    }
  };

  render() {
    return (
      <div className="ui card">
        <img
          className="ui centered circular image"
          src={this.state.image}
          alt=""
          style={{
            height: "220px"
          }}
        />
        <div className="content">
          <div
            className={`ui ${this.state.loader} inline centered text loader`}
          >
            {this.state.loader_text}
          </div>
          <h1 className="header">{this.state.text}</h1>
        </div>
      </div>
    );
  }
}

export default SentimentIndicator;
