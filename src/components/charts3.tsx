import React, { useRef, useEffect } from "react";
import * as echarts from "echarts";
import { createEchartsOptions } from "../shared/createEchartsOption";
import { px } from "../shared/px";
export const Chart3: React.FunctionComponent = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var chart = echarts.init(divRef.current);
    chart.setOption(
      createEchartsOptions({
        legend: {
          bottom: px(10),
          textStyle: { color: "white" },
          itemWidth: px(30),
          itemHeight: px(16),
        },
        grid: {
          top: px(20),
          left: px(20),
          right: px(20),
          bottom: px(70),
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisTick: { show: false },
          axisLine: { show: false },
          splitLine: { show: true, lineStyle: { color: "#083B70" } },
          data: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
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
            name: "抢劫",
            type: "line",
            data: [
              0.01,
              0.02,
              0.03,
              0.04,
              0.05,
              0.06,
              0.07,
              0.08,
              0.09,
            ].reverse(),
          },
          {
            name: "醉驾",
            type: "line",
            data: [
              0.02,
              0.03,
              0.04,
              0.05,
              0.06,
              0.07,
              0.08,
              0.09,
              0.1,
            ].reverse(),
          },
          {
            name: "盗窃",
            type: "line",
            data: [
              0.03,
              0.04,
              0.05,
              0.06,
              0.07,
              0.08,
              0.09,
              0.1,
              0.11,
            ].reverse(),
          },
          {
            name: "故意杀人",
            type: "line",
            data: [
              0.04,
              0.05,
              0.06,
              0.07,
              0.08,
              0.09,
              0.1,
              0.11,
              0.12,
            ].reverse(),
          },
          {
            name: "故意伤人",
            type: "line",
            data: [
              0.05,
              0.06,
              0.07,
              0.08,
              0.09,
              0.1,
              0.11,
              0.12,
              0.13,
            ].reverse(),
          },
        ].map((obj) => ({
          ...obj,
          symbol: "circle",
          symbolSize: px(12),
          lineStyle: { width: px(2) },
        })),
      })
    );
  }, []);
  return (
    <div className="border 趋势分析">
      <h1>发案趋势分析</h1>
      <div ref={divRef} className="chart1"></div>
    </div>
  );
};
