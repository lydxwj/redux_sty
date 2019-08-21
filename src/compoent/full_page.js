import React, { Component } from 'react';
import { PageContainer, Pages } from '@lydxwj/react-fullpage';
import '@lydxwj/react-fullpage/lib/css/styles.css';
class Full extends Component {
  constructor(props) {
    super(props)
    this.state = {
      val: ''
    }
  }
  render() {
    return (
      <PageContainer>
        <Pages></Pages>
        <Pages></Pages>
        <Pages></Pages>
      </PageContainer>
    );
  }
}

export default Full;