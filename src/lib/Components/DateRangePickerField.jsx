import React from 'react';
import _ from 'lodash';
import moment from "moment";
import DatePicker from "antd/lib/date-picker";
import createMapProps from '../Helpers/createMapProps';
import createComponent from "../Helpers/createComponent";

const { RangePicker } = DatePicker;

class DateRangePickerField extends React.PureComponent {
    
  render () {

    const style = _.merge({}, this.props.style);
    return (

      <RangePicker {...this.props} style={style} />

    );
  }
}

const mapProps = createMapProps((mappedProps, originalProps) => {

  const {
    onChange: _onChange,
    value: _value,
    displayFormat,
    valueFormat
  } = mappedProps;

  const onChange = (moments, dateString) => _onChange(moments && moments.length > 0 ? `${moments[0].format(valueFormat)},${moments[1].format(valueFormat)}` : null);

  const onBlur = undefined

  const value = (_value === null || _value === '') ? undefined : [moment(_value.split(',')[0]), moment(_value.split(',')[1])];

  return {
    ...mappedProps,
    onChange,
    onBlur,
    value,
    format: displayFormat
  };

})

DateRangePickerField = createComponent(DateRangePickerField, mapProps);

DateRangePickerField.defaultProps = {
  style: {},
  displayFormat: 'DD-MM-YYYY',
  valueFormat: 'YYYY-MM-DD'
}

export default DateRangePickerField;