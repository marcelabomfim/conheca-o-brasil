import React, { Component } from 'react';

import Container from 'components/Container';
import Header from 'components/Header';
import StatesSelect from 'components/StatesSelect';
import Local from 'components/Local';
import Button from 'components/Button';
import ButtonsContainer from 'components/ButtonsContainer';
import Icon from 'components/Icon';
import IconContainer from 'components/IconContainer';

import { getStates, getRandomLocal } from 'services';

export default class extends Component {
  state = {
    states: [],
    previousLocal: null
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
    const nextLocal = getRandomLocal();

    this.setState(prevState => ({
      previousLocal: prevState.local,
      local: { ...nextLocal, imagem: require('../../' + nextLocal.imagem) }
    }));
  };

  getPreviousLocal = () => {
    const { previousLocal } = this.state;
    if (!previousLocal) {
      console.log('opa');
      return this.getNextLocal();
    }
    this.setState({
      local: previousLocal
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
        <ButtonsContainer>
          <Button onClick={this.getPreviousLocal}>
            Anterior <Icon name="left" />
          </Button>
          <Button onClick={this.getNextLocal}>
            Próximo <Icon name="right" />
          </Button>
        </ButtonsContainer>
      </Container>
    );
  }
}
