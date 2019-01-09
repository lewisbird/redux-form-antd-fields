import React from 'react';
import _ from 'lodash';
import Select from "antd/lib/select";
import createMapProps from '../Helpers/createMapProps';
import createComponent from "../Helpers/createComponent";

class SelectField extends React.PureComponent {
    
  initContainerRef = ref => this.container = ref

  getContainerRef = () => this.container;

  render () {

    const style = _.merge({}, { width: '100%' }, this.props.style);

    const { valueKey, labelKey, options, ...props } = this.props;

    return (

      <div>

        <div ref={this.initContainerRef} />

        <Select
          getPopupContainer={this.getContainerRef}
          {...props}
          style={style}
        >

          {options.map(({ [valueKey]: value, [labelKey]: label, ...rest }, key) => (

            <Select.Option {...rest} key={key} label={label} value={Number.isInteger(value) ? value : String(value)}>
              {label}
            </Select.Option>

          ))}

        </Select>

      </div>

    );
  }
}

const mapProps = createMapProps((mappedProps, originalProps) => {
  
  const {
    onChange: _onChange,
    value: _value
  } = mappedProps;

  const onChange = (value) => _onChange(value === undefined || value === 'null' || value === 'NULL' ? null : value);

  const value = (_value === null || _value === '') ? undefined : _value;
  
  return { ...mappedProps, onChange, value };

})

SelectField =  createComponent(SelectField, mapProps);

SelectField.defaultProps = {
  style: {},
  options: [],
  valueKey: "value",
  labelKey: "label",
  showArrow: true,
  showSearch: true,
  allowClear: true,
  hasFeedback: false,
  defaultActiveFirstOption: false,
  filterOption: (value, option) => option.props.label.toLowerCase().includes(value.toLowerCase())
}

export default SelectField;