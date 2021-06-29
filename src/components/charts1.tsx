import React, { useRef, useEffect } from "react";
import * as echarts from "echarts";
import { createEchartsOptions } from "../shared/createEchartsOption";
export const Chart1: React.FunctionComponent = () => {
  const divRef = useRef(null);

  useEffect(() => {
    var echart = echarts.init(divRef.current);
    echart.setOption(
      createEchartsOptions({
        xAxis: {
          type: "category",
          data: [
            "七里河区",
            "七里河区",
            "七里河区",
            "七里河区",
            "七里河区",
            "七里河区",
            "七里河区",
            "七里河区",
            "七里河区",
          ],
          axisLabel: {
            formatter(value) {
              if (value.length > 2) {
                let array = value.split("");
                array.splice(2, 0, "\n");
                return array.join("");
              } else {
                return value;
              }
            },
          },
        },
        yAxis: {
          type: "value",
          splitLine: { show: false },
          axisLine: {
            show: true,
          },
        },
        series: [
          {
            data: [10, 20, 36, 41, 15, 26, 37, 18, 29],
            type: "bar",
          },
        ],
      })
    );
  }, []);

  return (
    <div className="管辖统计 border">
      <h1>案发派出所管辖统计</h1>
      <div className="chart1" ref={divRef}></div>
    </div>
  );
};
