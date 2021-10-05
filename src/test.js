import React from "react";

export default class Hello extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });

    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <button onClick={(event) => this.handleClick(event)}>Click Me</button>
        Final value of count is: {this.state.count}
      </>
    );
  }
}
