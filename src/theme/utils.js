export default {
  transition: (properties, time = '.3s') =>
    properties.map(property => `${property} ease-in-out ${time}`).join(', ')
};
