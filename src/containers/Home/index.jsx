import React, { Component } from 'react';

import Header from 'components/Header';
import StatesSelect from 'components/StatesSelect';

import { getStates } from 'services';

export default class extends Component {
  state = {
    states: []
  };

  componentDidMount() {
    this.getInitialValue();
  }

  getInitialValue = async () => {
    const states = await getStates();
    this.setState({ states });
  };

  render() {
    const { states } = this.state;

    return (
      <div>
        <Header />
        <p>Esta é a página de início</p>
        <StatesSelect states={states} />
      </div>
    );
  }
}
