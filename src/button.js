import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { red, add } from "./actions";
import store from "./store.js";
class Button extends Component {
  constructor(props) {
    super(props)
  }
  static propTypes = {
    /**
     * @title 样式定义
     * @description 通过CSS定义按钮的样式
     */
    style: PropTypes.shape({
      color: PropTypes.string,
      fontSize: PropTypes.number,
      background: PropTypes.string,
      padding: PropTypes.string,
    }),
  };

  static defaultProps = {
    style: {
      color: '#fff',
      background: 'green',
      padding: '4px',
    },
  };
  _red() {
    this.props.red();
  }
  _add() {
    this.props.add();
  }
  componentDidMount() {
    console.log(store.getState());
  }
  render() {
    const style = this.props.style;
    return (
      <div>
        <button style={style} onClick={this._red.bind(this)}>-</button>
        <button style={style} onClick={this._add.bind(this)}>+</button>
      </div>
    );
  }
}

export default connect( null, { red, add })(Button);
