import React, { Component } from 'react';

import Header from 'components/Header';
import StatesSelect from 'components/StatesSelect';

import { getStates, getRandomLocal } from 'services';

export default class extends Component {
  state = {
    states: []
  };

  componentDidMount() {
    this.getStates();
    this.getNextLocal();
  }

  getStates = () => {
    const states = getStates();
    this.setState({ states });
  };

  getNextLocal = () => {
    const local = getRandomLocal();
    this.setState({ local });
  };

  render() {
    const { states, local } = this.state;

    return (
      <div>
        <Header />
        <p>Esta é a página de início</p>
        <StatesSelect states={states} selected={local && local.uf} />
        <button onClick={this.getNextLocal}>Próximo</button>
        <br />
        <code>{JSON.stringify(local)}</code>
      </div>
    );
  }
}
