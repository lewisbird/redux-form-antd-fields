import React from 'react';
import _ from 'lodash';
import Radio from "antd/lib/radio";
import createMapProps from '../Helpers/createMapProps';
import createComponent from "../Helpers/createComponent";

class RadioField extends React.PureComponent {

  render () {

    const style = _.merge({}, {}, this.props.style);

    const { valueKey, labelKey, options, ...props } = this.props;

    const Option = this.props.button ? Radio.Button : Radio;

    return (

      <Radio.Group {...props} style={style}>

        {options.map((option, key) => {
          
          if (typeof option === 'object') {

            const { [valueKey]: value, [labelKey]: label, ...rest } = option;

            return (
              <Option {...rest} key={key} value={String(value)}>
                {label}
              </Option>
            )

          } else {

            return (
              <Option key={key} value={String(option)}>
                {option}
              </Option>
            )

          }

        })}

      </Radio.Group>

    );
  }
}

const mapProps = createMapProps((mappedProps, originalProps) => {
  
  const {
    onChange: _onChange,
    value: _value
  } = mappedProps;

  //const onChange = (value) => _onChange(value === undefined ? null : value);

  //const value = (_value === null || _value === '') ? undefined : _value;
  
  return { ...mappedProps };

})

RadioField =  createComponent(RadioField, mapProps);

RadioField.defaultProps = {
  style: {},
  opions: [],
  valueKey: "value",
  labelKey: "label",
  button: false
}

export default RadioField;