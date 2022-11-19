import React from "react";
import ReactDOM from "react-dom";
let inputValue = "Texas";
class Demo_one extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  incre() {
    this.setState({ count: (this.state.count += 1) });
  }

  componentWillMount() {
    console.log("componentWillMount is triggered");
  }
  componentDidMount(e) {
    console.log("componentDidMount is triggered");
    console.log("DOM node: ", ReactDOM.findDOMNode(this));
  }
  componentWillReceiveProps(newProps) {
    console.log("componentWillReceiveProps is triggered");
    console.log("new props: ", newProps);
  }
  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdate is triggered");
    console.log("new props: ", newProps);
    console.log("new state: ", newState);
    return newProps !== newState;
  }
  componentWillUpdate(newProps, newState) {
    console.log("componentWillUpdate is triggered");
    console.log("new props: ", newProps);
    console.log("new state: ", newState);
  }
  componentDidUpdate(oldProps, oldState) {
    console.log("componentDidUpdate is triggered");
    console.log("new props: ", oldProps);
    console.log("old props: ", oldState);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    return (
      <div>
        <button onClick={() => this.incre()}>incr</button>

        <h1>{this.state.count}</h1>
        <h1>{this.props.inputValue}</h1>

      </div>
    );
  }
}

export default Demo_one;
