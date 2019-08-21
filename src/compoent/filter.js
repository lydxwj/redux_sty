import React, { Component } from 'react';
import './list.styl';
import { connect } from "react-redux";
import { filter } from "../actions";
import { FILTER_VAL } from "../constant.js";
class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _filter(filter) {
    this.props.filter(filter);
  }
  componentDidMount() {
  }
  render() {
    const filterKey = this.props.filterKey;
    return (
      <div>
        {
          Object.keys(FILTER_VAL).map(item => {
            return <span key={item} className={item === filterKey ? 'active filter' : 'filter'} onClick={this._filter.bind(this, item)}>{item}</span>
          })
        }
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    filterKey: state.filter
  };
};
export default connect(mapStateToProps, { filter })(Filter);