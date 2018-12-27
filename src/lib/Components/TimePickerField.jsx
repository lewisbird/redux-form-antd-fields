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
    displayFormat
  } = mappedProps;

  const valueFormat = "HH:mm:ss";

  const onChange = (moment, timeString) => {
    return _onChange(moment ? moment.format(valueFormat) : null);
  }

  const onBlur = (event) => {
    const time = event.target.value;
    if (time) {
      const value = (time === '' || time == 'Invalid date' ) ? null : moment(time, displayFormat).format(valueFormat);
      return _onBlur(value);
    }
  }

  const value = (_value === null || _value === '') ? undefined : moment(_value, valueFormat);

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
  displayFormat: 'HH:mm:ss'
}

export default TimePickerField;