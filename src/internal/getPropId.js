const getPropId = props => (
  Object.prototype.hasOwnProperty.call(props, 'id') ? props.id : null
);

export default getPropId;

