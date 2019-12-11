import React from "react";
import ReviewBox from "./ReviewBox";
import SentimentDisplay from "./SentimentDisplay";
import title from "./images/title.jpg";

class App extends React.Component {
  state = { pred: null, load: "disabled" };

  constructor(props) {
    super(props);
    this.display = React.createRef();
  }

  onInputChange = bar_state => {
    this.display.current.onLoading(bar_state);
  };

  onFormSubmit = async review => {
    this.setState({ load: "active" });
    const response = await fetch(
      "https://j4cgrdhc8b.execute-api.us-east-1.amazonaws.com/prod",
      {
        method: "POST",
        body: JSON.stringify({
          body: review
        })
      }
    );
    const prediction = await response.text();
    console.log("Predicted Sentiment: " + prediction);
    this.setState({ pred: prediction, load: "disabled" });

    this.display.current.onGettingPred(prediction);
  };

  render() {
    return (
      <div className="ui container">
        <div className="ui grid">
          <div className="sixteen wide column" style={{ marginTop: "20px" }}>
            <img className="ui large image" src={title} />
          </div>
          <div className="sixteen wide column">
            <ReviewBox
              onFormSubmit={this.onFormSubmit}
              onInputChange={this.onInputChange}
              load={this.state.load}
            />
          </div>
          <div className="sixteen wide column">
            <SentimentDisplay ref={this.display} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
