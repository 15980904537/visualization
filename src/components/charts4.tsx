import React, { useRef, useEffect } from "react";
import * as echarts from "echarts";
import { createEchartsOptions } from "../shared/createEchartsOption";
import { px } from "../shared/px";
export const Chart4: React.FunctionComponent = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var chart = echarts.init(divRef.current);
    chart.setOption(
      createEchartsOptions({
        grid: {
          top: px(20),
          left: px(20),
          right: px(20),
          bottom: px(20),
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisTick: { show: false },
          axisLine: { show: false },
          splitLine: { show: true, lineStyle: { color: "#083B70" } },
          data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
        },
        yAxis: {
          type: "value",
          splitLine: { show: true, lineStyle: { color: "#083B70" } },
          axisLabel: {
            formatter(val) {
              return val * 100 + "%";
            },
          },
        },
        series: [
          {
            data: [
              0.15,
              0.13,
              0.11,
              0.13,
              0.14,
              0.15,
              0.16,
              0.18,
              0.21,
              0.19,
              0.17,
              0.16,
              0.15,
            ],
            type: "line",
            symbol: "circle",
            symbolSize: px(12),
            lineStyle: { width: px(2) },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#414a9f",
                },
                {
                  offset: 1,
                  color: "#1b1d52",
                },
              ]),
            },
          },
        ],
      })
    );
  }, []);
  return (
    <div className="border 时段分析">
      <h1>案发时段分析</h1>
      <div ref={divRef} className="chart1"></div>
    </div>
  );
};
