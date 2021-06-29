import React, { useRef, useEffect } from "react";
import * as echarts from "echarts";
import { createEchartsOptions } from "../shared/createEchartsOption";
import { px } from "../shared/px";

export const Chart2: React.FunctionComponent = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    { name: "城关区公安局", 2011: 2, 2012: Math.random() * 10 },
    { name: "七里河区公安局", 2011: 2, 2012: 3 },
    { name: "西固区公安局", 2011: 2, 2012: 3 },
    { name: "安宁区公安局", 2011: 2, 2012: 3 },
    { name: "红古区公安局", 2011: 2, 2012: 3 },
    { name: "永登县公安局", 2011: 2, 2012: 3 },
    { name: "皋兰县公安局", 2011: 2, 2012: 3 },
    { name: "榆中县公安局", 2011: 2, 2012: 3 },
    { name: "新区公安局", 2011: 2, 2012: 3 },
  ];
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { name: "城关区公安局", 2011: 2, 2012: Math.random() * 10 },
        { name: "七里河区公安局", 2011: 2, 2012: 3 },
        { name: "西固区公安局", 2011: 2, 2012: 3 },
        { name: "安宁区公安局", 2011: 2, 2012: 3 },
        { name: "红古区公安局", 2011: 2, 2012: 3 },
        { name: "永登县公安局", 2011: 2, 2012: 3 },
        { name: "皋兰县公安局", 2011: 2, 2012: 3 },
        { name: "榆中县公安局", 2011: 2, 2012: 3 },
        { name: "新区公安局", 2011: 2, 2012: 3 },
      ];
      x(newData);
    }, 1000);
  }, []);
  const x = (newData) => {
    myChart.current.setOption(
      createEchartsOptions({
        grid: {
          top: px(20),
          right: px(20),
          left: px(70),
          bottom: px(20),
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
          splitLine: { show: false },
          axisLine: {
            show: false,
          },
          axisLabel: { show: false },
        },
        yAxis: {
          type: "category",
          axisTick: { show: false },
          data: newData.map((i) => i.name),
          axisLabel: {
            formatter(value) {
              return value.replace("公安局", "\n公安局");
            },
          },
        },
        series: [
          {
            name: "破案排名1",
            type: "bar",
            data: newData.map((i) => i[2011]),
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "#2034F9",
                  },
                  {
                    offset: 1,
                    color: "#04A1FF",
                  },
                ]),
              },
            },
          },
          {
            name: "破案排名2",
            type: "bar",
            data: newData.map((i) => i[2012]),
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "#B92AE8",
                  },
                  {
                    offset: 1,
                    color: "#6773E7",
                  },
                ]),
              },
            },
          },
        ],
      })
    );
  };
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
  }, []);

  return (
    <div className="border 破获排名">
      <h1>案件破获排名</h1>
      <div ref={divRef} className="chart1"></div>
      <div className="legend">
        <span className="first" /> 破案排名1
        <span className="second" /> 破案排名2
      </div>
    </div>
  );
};
