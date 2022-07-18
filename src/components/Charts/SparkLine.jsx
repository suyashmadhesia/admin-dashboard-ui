import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

const SparkLine = ({ id, height, width, color, type, currentColor, data }) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      type={type}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName="x"
      yName="yval"
      tooltipSettings={{
        visible: true,
        format: '${x}: data ${yval}',
        trackLineSettings: {
          visible: true,
        }
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
