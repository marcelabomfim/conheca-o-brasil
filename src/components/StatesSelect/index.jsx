import React from 'react';

export default ({ states }) => (
  <select>
    {states.map(state => (
      <option key={state.uf} value={state.uf}>
        {state.name}
      </option>
    ))}
  </select>
);
