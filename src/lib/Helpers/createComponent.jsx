import React from "react";
import FormItem from "antd/lib/form/FormItem";

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

          {renderBefore && renderBefore()}
          
          <AntdComponent {...restProps} />
          
          {renderAfter && renderAfter()}

        </FormItem>

      );
    }
  }

  FormComponent.displayName = `Redux-Form-Antd-${AntdComponent.displayName}`;

  return FormComponent;

}