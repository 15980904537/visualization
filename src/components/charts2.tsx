import React, { useRef, useEffect } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";
import { createEchartsOptions } from "../shared/createEchartsOption";

export const Chart2: React.FunctionComponent = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var echart = echarts.init(divRef.current);
    echart.setOption(
      createEchartsOptions({
        legend: {
          data: ["破案排名1", "破案排名2"],
        },
        grid: {
          left: "3%",
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
          data: ["巴西", "印尼", "美国", "印度", "中国", "世界人口(万)"],
        },
        series: [
          {
            name: "2011年",
            type: "bar",
            data: [18203, 23489, 29034, 104970, 131744, 630230],
          },
          {
            name: "2012年",
            type: "bar",
            data: [19325, 23438, 31000, 121594, 134141, 681807],
          },
        ],
      })
    );
  }, []);

  return (
    <div className="border 破获排名">
      <h1>案件破获排名</h1>
      <div ref={divRef} className="chart1"></div>
    </div>
  );
};
