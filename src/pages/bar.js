import styles from "./index.less";
import Nav from "../components/nav";
import react from "echarts-for-react";
import React, { Component } from "react";
// 引入 ECharts 主模块
import echarts from "echarts/lib/echarts";
// 引入柱状图
import "echarts/lib/chart/bar";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";

class EchartsTest extends Component {
  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("main"));

    // 绘制图表
    myChart.setOption({
      title: { text: "柱状图Demo" },
      tooltip: {},
      xAxis: {
        data: ["x1", "x2", "x3", "x4", "x5", "x6"]
      },
      yAxis: {},
      series: [
        {
          name: "数值",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    });
  }
  render() {
    return (
      <div id="main" style={{ width: 400, height: 400 }}>
        <div id="d">dd</div>
      </div>
    );
  }
}

export default EchartsTest;
