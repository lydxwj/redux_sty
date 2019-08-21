import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from "react-redux";
import store from "./store.js";
import Add from "./compoent/add";
import List from "./compoent/list";
import Filter from "./compoent/filter";
import axios from 'axios';
require('../mock/mock.js');
export default class App extends Component {
  constructor(props) {
    super(props)
  }
  static propTypes = {
    /**
     * @title 文案
     * @description 填写文案
     */
    text: PropTypes.string,
  };

  static defaultProps = {
    text: 'react根组件',
  };
  componentDidMount() {
    console.log(store.getState());
    axios.post('http://baidu.com/get/list', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
    .then(function (response) {
      console.log(response.data.Data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  render() {
    const text = this.props.text;
    return (
      <Provider store={store}>
        <div className="react-cmp">
          <Add></Add>
          <List></List>
          <Filter></Filter>
        </div>
      </Provider>
    );
  }
}
