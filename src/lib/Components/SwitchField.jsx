import React from 'react';
import _ from 'lodash';
import Switch from "antd/lib/switch";
import createMapProps from '../Helpers/createMapProps';
import createComponent from "../Helpers/createComponent";

class SwitchField extends React.PureComponent {
    
  render () {

    const style = _.merge({}, {}, this.props.style);

    return (

      <Switch {...this.props} style={style} />

    );
  }
}

const mapProps = createMapProps((mappedProps, originalProps) => {

  const {
    value: _value
  } = mappedProps;

  const value = !!_value;
  
  return { ...mappedProps, value, checked: value };

})

SwitchField =  createComponent(SwitchField, mapProps);

SwitchField.defaultProps = {
  style: {}
}

export default SwitchField;