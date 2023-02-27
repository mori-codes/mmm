import { useLayoutEffect } from "preact/hooks"
import { Head } from "$fresh/runtime.ts"
import { Chart } from "$fresh_charts/mod.ts"
import { ChartColors, transparentize } from "$fresh_charts/utils.ts"

const DataChart = () => {
  useLayoutEffect(() => {

  })
  return (
    <Chart
      type="bar"
      
      options={{
        devicePixelRatio: 1,
        scales: { yAxes: [{ ticks: { beginAtZero: true } }] },
        responsive: true,
        
      }}
      data={{
        labels: ["Red", "Blue"],
        datasets: [
          {
            label: "Votes",
            data: [123, 520],
            borderColor: ChartColors.Red,
            backgroundColor: [transparentize(ChartColors.Red, 0.5), transparentize(ChartColors.Blue, 0.5)],
            borderWidth: 1,
          },
        ],
      }}
    />
  )
}

export default DataChart
