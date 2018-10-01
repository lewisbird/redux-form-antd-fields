import React from 'react';
import _ from 'lodash';
import Checkbox from "antd/lib/checkbox";
import createMapProps from '../Helpers/createMapProps';
import createComponent from "../Helpers/createComponent";

const CheckboxGroup = Checkbox.Group;

class CheckboxGroupField extends React.PureComponent {
    
  render () {

    const style = _.merge({}, { width: '100%' }, this.props.style);

    const { text, ...restProps } = this.props;

    return (

      <CheckboxGroup {...restProps} style={style} />

    );
  }
}

const mapProps = createMapProps((mappedProps, originalProps) => {

  const {
    value: _value
  } = mappedProps;
  
  const value = !_value ? [] : _value;
  
  return { ...mappedProps, value };

})

CheckboxGroupField =  createComponent(CheckboxGroupField, mapProps);

CheckboxGroupField.defaultProps = {
  style: {}
}

export default CheckboxGroupField;