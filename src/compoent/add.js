import React, { Component } from 'react';
import { connect } from "react-redux";
import { add } from "../actions";
class Add extends Component {
  constructor(props) {
    super(props)
    this.state = {
      val: ''
    }
  }
  _add() {
    this.props.add(this.state.val);
    this.setState({
      val: ''
    });
  }
  _change(val) {
    this.setState({
      val
    });
  }
  render() {
    const val = this.state.val;
    return (
      <div>
        <input value={val} onChange={e => this._change(e.target.value)} />
        <button onClick={this._add.bind(this)}>+</button>
      </div>
    );
  }
}

export default connect( null, { add })(Add);