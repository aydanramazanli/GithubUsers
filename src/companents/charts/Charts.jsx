// STEP 1 - Include Dependencies
// Include react
import React from "react";


// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.gammel";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);




export default function Charts({data}){
  // STEP 2 - Chart Data


// STEP 3 - Creating the JSON object to store the chart configurations
const chartConfigs = {
  type: "column3d", // The chart type
  width: "600", // Width of the chart
  height: "300", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      //Set the chart caption
      caption: "Most Popular Languages",
    yAxisName: "Stars",
    xAxisName: "Repos", 
    xAxisNameFontSize:"16px",
    yAxisNameFontSize: "20px",
      theme: "gammel"
    },
    // Chart Data
    data
  }
};
  return (
  
      <ReactFC {...chartConfigs} />
  
  );
}
