import React from 'react';
import _ from 'lodash';
import Cascader from "antd/lib/cascader";
import createMapProps from '../Helpers/createMapProps';
import createComponent from "../Helpers/createComponent";

class CascaderField extends React.PureComponent {
    
  render () {

    const style = _.merge({}, {}, this.props.style);

    return (

      <Cascader {...this.props} style={style} />

    );
  }
}

const mapProps = createMapProps((mappedProps, originalProps) => {

  const {
    onChange: _onChange,
    value: _value
  } = mappedProps;

  const onChange = (value) => _onChange(value === undefined ? null : value);

  const value = (_value === null || _value === '') ? undefined : _value;
  
  return { ...mappedProps, onChange, value };

})

CascaderField =  createComponent(CascaderField, mapProps);

CascaderField.defaultProps = {
  style: {}
}

export default CascaderField;