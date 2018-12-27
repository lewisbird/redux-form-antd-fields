import React from 'react';
import _ from 'lodash';
import moment from "moment";
import TimePicker from "antd/lib/time-picker";
import createMapProps from '../Helpers/createMapProps';
import createComponent from "../Helpers/createComponent";

class TimePickerField extends React.PureComponent {
    
  render () {

    const style = _.merge({}, { width: '100%' }, this.props.style);
    return (

      <TimePicker {...this.props} style={style} />

    );
  }
}

const mapProps = createMapProps((mappedProps, originalProps) => {

  const {
    onChange: _onChange,
    onBlur: _onBlur,
    value: _value,
    displayFormat,
    valueFormat
  } = mappedProps;

  const onChange = (date, timeString) => {
    console.log('onChange', date, timeString)
    console.log('formatted', valueFormat , date.format(valueFormat))
    return _onChange(date ? date.format(valueFormat) : null);
  }

  const onBlur = (event) => {
    console.log('onBlur', event, event.target.value)
    const date = event.target.value;
    if (date) {
      const value = (date === '' || date == 'Invalid date' ) ? null : moment(date, displayFormat).format("HH:mm:ss");
      return _onBlur(value);
    }
  }

  console.log('_value', _value)

  const value = (_value === null || _value === '') ? undefined : moment(_value);

  console.log('value', value)

  return {
    ...mappedProps,
    onChange,
    onBlur,
    value,
    format: displayFormat
  };

})

TimePickerField = createComponent(TimePickerField, mapProps);

TimePickerField.defaultProps = {
  style: {},
  displayFormat: 'HH:mm:ss',
  valueFormat: 'HH:mm:ss'
}

export default TimePickerField;