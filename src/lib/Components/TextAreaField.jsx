import React from 'react';
import _ from 'lodash';
import Input from "antd/lib/input";
import createMapProps from '../Helpers/createMapProps';
import createComponent from "../Helpers/createComponent";

const { TextArea } = Input;

class TextAreaField extends React.PureComponent {

  render () {

    const style = _.merge({}, { width: '100%' }, this.props.style);

    return (

      <TextArea {...this.props} style={style} />

    );
  }
}

const mapProps = createMapProps((mappedProps, originalProps) => {

  const {
    onChange: _onChange
  } = mappedProps;
  
  const onChange = (event) => _onChange(event.nativeEvent.target.value);
  
  return { ...mappedProps, onChange };

})

TextAreaField =  createComponent(TextAreaField, mapProps);

TextAreaField.defaultProps = {
  style: {}
}

export default TextAreaField;