import React from 'react';
import _ from 'lodash';
import InputNumber from "antd/lib/input-number";
import createMapProps from '../Helpers/createMapProps';
import createComponent from "../Helpers/createComponent";

class InputNumberField extends React.PureComponent {

  render () {

    const style = _.merge({}, { width: '100%' }, this.props.style);

    return (

      <InputNumberField {...this.props} style={style} />

    );
  }
}

const mapProps = createMapProps();

InputNumberField = createComponent(InputNumberField, mapProps);

InputNumberField.defaultProps = {
  style: {}
}

export default InputNumberField;