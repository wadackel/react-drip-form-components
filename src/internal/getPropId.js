const getPropId = props => (
  Object.prototype.hasOwnProperty.call(props.props, 'id') ? props.props.id : null
);

export default getPropId;

