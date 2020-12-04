import React, { Component } from "react";

class CompInputClass extends Component {
  modifyMember = (e) => {
    const { modify } = this.props;
    modify(e.target.value);
  };

  render() {
    const { modify, inputText } = this.props;
    const onChange = (e) => {
      modify(e.target.value);
    };
    return (
      <div>
        <input
          onChange={(e) => modify(e.target.value)}
          value={inputText}
          style={{ fontSize: "20px", padding: "5px", borderRadius: "50%" }}
        />
        <input
          onChange={onChange}
          value={inputText}
          style={{
            fontSize: "20px",
            padding: "5px",
            border: "2px solid yellow",
          }}
        />
        <input
          onChange={this.modifyMember}
          value={inputText}
          style={{ fontSize: "20px", padding: "5px" }}
        />
      </div>
    );
  }
}

export default CompInputClass;
