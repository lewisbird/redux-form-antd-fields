import React from 'react';
import _ from 'lodash';
import Checkbox from "antd/lib/checkbox";
import createMapProps from '../Helpers/createMapProps';
import createComponent from "../Helpers/createComponent";

class Component extends React.PureComponent {
    
  render () {

    const style = _.merge({}, { width: '100%' }, this.props.style);

    const { text, ...restProps } = this.props;

    return (

      <Checkbox {...restProps} style={style}>
        {text}
      </Checkbox>

    );
  }
}

const mapProps = createMapProps((mappedProps, originalProps) => {

  const {
    onChange: _onChange
  } = mappedProps;
  
  const onChange = (event) => _onChange(event.target.value);
  
  return { ...mappedProps, onChange };

})

Component =  createComponent(Component, mapProps);

Component.defaultProps = {
  style: {}
}

export default Component;