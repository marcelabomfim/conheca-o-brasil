import React, { Component } from 'react';

import Container from 'components/Container';
import Header from 'components/Header';
import StatesSelect from 'components/StatesSelect';
import Local from 'components/Local';
import Button from 'components/Button';
import Icon from 'components/Icon';
import IconContainer from 'components/IconContainer';

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
    this.setState({
      local: { ...local, imagem: require('../../' + local.imagem) }
    });
  };

  render() {
    const { states, local } = this.state;

    return (
      <Container justifyBetween>
        <Header />
        <StatesSelect states={states} selected={local && local.uf} />
        {local && <Local local={local} />}
        <IconContainer />
        <Button onClick={this.getNextLocal}>
          Próximo <Icon name="right" />
        </Button>
      </Container>
    );
  }
}
