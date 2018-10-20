import React from "react";
import FormItem from "antd/lib/form/FormItem";
import Row from "antd/lib/grid/row";
import Col from "antd/lib/grid/col";

export default (AntdComponent, mapProps) => {

  class FormComponent extends React.PureComponent {

    getRenderedComponent = () => this.componentRef;

    initComponentRef = (ref) => {
      this.componentRef = ref;
    };

    render () {

      const {
        label,
        labelCol,
        wrapperCol,
        help,
        extra,
        validateStatus,
        hasFeedback,
        colon,
        required,

        renderBefore,
        renderAfter,
        wrapperRow,
        fieldCol,
        beforeCol,
        afterCol,

        ...restProps
      } = mapProps(
        this.props
      );

      const { id } = restProps;

      return (

        <FormItem
          ref={(ref) => { this.componentRef = ref }}
          label={label}
          labelCol={labelCol}
          wrapperCol={wrapperCol}
          help={help}
          hasFeedback={hasFeedback}
          extra={extra}
          validateStatus={validateStatus}
          colon={colon}
          required={required}
          id={id}
        >

          <Row gutter={8} {...wrapperRow}>

            {renderBefore && (
              <Col {...beforeCol}>
                {renderBefore()}
              </Col>
            )}

            <Col span={24} {...fieldCol}>
              <AntdComponent {...restProps} />
            </Col>
          
            {renderAfter && (
              <Col {...afterCol}>
                {renderAfter()}
              </Col>
            )}

          </Row> 

        </FormItem>

      );
    }
  }

  FormComponent.defaultProps = {
    renderBefore: null,
    renderAfter: null,
    wrapperRow: {},
    fieldCol: {},
    beforeCol: {},
    afterCol: {},
  }

  FormComponent.displayName = `Redux-Form-Antd-${AntdComponent.displayName}`;

  return FormComponent;

}