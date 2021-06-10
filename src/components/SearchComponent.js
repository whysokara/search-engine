import React, { Component } from "react";

class SearchComponent extends Component {
  state = {
    query: "",
  };

  onInputChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  onButtonClick = (e) => {
    //Todo: fire the search processes
  };

  render() {
    return (
      <div className="search">
        <input
          type="text"
          value={this.state.query}
          onChange={this.onInputChange}
        />
        <button onClick={this.onButtonClick}>Search</button>
      </div>
    );
  }
}

export default SearchComponent;
