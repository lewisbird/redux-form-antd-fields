import React from 'react';
import _ from 'lodash';
import moment from "moment";
import DatePicker from "antd/lib/date-picker";
import createMapProps from '../Helpers/createMapProps';
import createComponent from "../Helpers/createComponent";

class DatePickerField extends React.PureComponent {
    
  render () {

    const style = _.merge({}, { width: '100%' }, this.props.style);
    return (

      <DatePicker {...this.props} style={style} />

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

  const onChange = (date, dateString) => _onChange(date ? date.format(valueFormat) : null);

  const onBlur = (event) => {
    const date = event.target.value;
    if (date) {
      const value = (date === '' || date == 'Invalid date' ) ? null : moment(date, displayFormat).format(valueFormat);
      return _onBlur(value);
    }
  }

  const value = (_value === null || _value === '') ? undefined : moment(_value);

  return {
    ...mappedProps,
    onChange,
    onBlur,
    value,
    format: displayFormat
  };

})

DatePickerField = createComponent(DatePickerField, mapProps);

DatePickerField.defaultProps = {
  style: {},
  displayFormat: 'DD-MM-YYYY',
  valueFormat: 'YYYY-MM-DD',
  placeholder: ''
}

export default DatePickerField;