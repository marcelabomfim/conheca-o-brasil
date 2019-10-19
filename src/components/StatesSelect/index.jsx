import React from 'react';

export default ({ states, selected, onClickOption }) => (
  <select onClick={value => onClickOption(value)}>
    {states.map(state => (
      <option key={state.uf} value={state.uf} selected={selected === state.uf}>
        {state.name}
      </option>
    ))}
  </select>
);
