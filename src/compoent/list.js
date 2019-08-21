import React, { Component } from 'react';
import './list.styl';
import { connect } from "react-redux";
import { complete, red, get, getP } from "../actions";
import store from "../store.js";
class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      val: ''
    }
  }
  _complete(id) {
    this.props.complete(id);
  }
  _red(id) {
    this.props.red(id);
  }
  componentDidMount() {
  }
  _renderLi(list) {
    const filter = this.props.filter;
    let arr = [];
    if (filter === 'all') {
      arr = list;
    } else if (filter === 'complete') {
      arr = list.filter(el => {
        if (el.complete) {
          return el;
        }
        return false;
      });
    } else {
      arr = list.filter(el => {
        if (!(el.complete)) {
          return el;
        }
        return false;
      });
    }
    return arr.map(item => {
      return <li key={item.id}>
        <span className={item.complete ? 'complete item' : 'item'} onClick={this._complete.bind(this, item.id)}>{item.text}</span>
        <span onClick={this._red.bind(this, item.id)}>删除</span>
      </li>
    });
  }
  _fetchList() {
    // this.props.get().then(() => {
    //   console.log(store.getState());
    // });
    this.props.getP().then(() => {
      console.log(store.getState());
    });
  }
  render() {
    const loading = this.props.loading;
    const isfetch = this.props.isfetch;
    return (
      <div>
        {isfetch ? <div>{loading ? 'loading' : '完成load'}</div> : null}
        <button onClick={this._fetchList.bind(this)}>异步获取列表</button>  
        <ul>
          {this._renderLi(this.props.list)}
        </ul>
      </div>
     
    );
  }
}
const mapStateToProps = state => {
  return { 
    list: state.todo.list,
    filter: state.filter,
    loading: state.todo.loading,
    isfetch: state.todo.isfetch
  };
};
export default connect(mapStateToProps, { complete, red, get, getP })(List);