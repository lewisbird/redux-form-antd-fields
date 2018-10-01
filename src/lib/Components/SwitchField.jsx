import React from 'react';
import _ from 'lodash';
import Switch from "antd/lib/switch";
import createMapProps from '../Helpers/createMapProps';
import createComponent from "../Helpers/createComponent";

class Component extends React.PureComponent {
    
  render () {

    const style = _.merge({}, {}, this.props.style);

    const { text, ...restProps } = this.props;

    return (

      <Switch {...restProps} style={style} />

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

Component =  createComponent(Component, mapProps);

Component.defaultProps = {
  style: {}
}

export default Component;