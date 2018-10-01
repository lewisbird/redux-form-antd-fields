import React from 'react';
import _ from 'lodash';
import InputNumber from "antd/lib/input-number";
import createMapProps from '../Helpers/createMapProps';
import createComponent from "../Helpers/createComponent";

class Component extends React.PureComponent {

  render () {

    const style = _.merge({}, { width: '100%' }, this.props.style);

    return (

      <InputNumber {...this.props} style={style} />

    );
  }
}

const mapProps = createMapProps();

Component = createComponent(Component, mapProps);

Component.defaultProps = {
  style: {}
}

export default Component;