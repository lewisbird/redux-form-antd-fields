const getValidateStatus = (touched, error, warning, valid) => {

  if (touched) {
    if (error) return "error";
    if (warning) return "warning";
    if (valid) return "success";
  }
  
  return "";
};

const standardMapFunc = (props) => {

  const {
    meta: { touched, error, warning, valid, form } = {},
    input: { ...inputProps },
    id: _id,
    ...restProps
  } = props;

  const id = _id || `${form}:${props.input.name}`;

  return {
    ...restProps,
    ...inputProps,
    id,
    validateStatus: getValidateStatus(touched, error, warning, valid),
    help: touched && (error || warning)
  };
}

export default (customMapFunc) => (originalProps) => {
  const mappedProps = standardMapFunc(originalProps);
  const finalProps = customMapFunc ? customMapFunc(mappedProps, originalProps) : mappedProps;
  return finalProps;
}