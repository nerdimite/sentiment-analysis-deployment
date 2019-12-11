import React from "react";

class ReviewBox extends React.Component {
  state = { text: "" };

  onInputChange = event => {
    this.setState({ text: event.target.value });
    this.props.onInputChange("waiting");
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.text);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className={`ui ${this.props.load} inverted dimmer`}>
            <div className="ui medium text loader">Analysing...</div>
          </div>
          <div className="field">
            <label>
              <h3 className="ui header">Write your review</h3>
            </label>
            <textarea
              type="text"
              value={this.state.text}
              onChange={this.onInputChange}
              placeholder="The movie was..."
            />
          </div>
          <button className="ui button" onClick={this.onFormSubmit}>
            Analyse Review
          </button>
        </form>
      </div>
    );
  }
}

export default ReviewBox;
