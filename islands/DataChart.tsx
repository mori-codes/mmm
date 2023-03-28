import { Head } from "$fresh/runtime.ts"
import { Chart } from "$fresh_charts/mod.ts"
import { ChartColors, transparentize } from "$fresh_charts/utils.ts"

export default function DataChart({
  tocaPoints,
  alviluxPoints,
}: {
  tocaPoints: Array<number>
  alviluxPoints: Array<number>
}) {
  return (
    <>
      <Head>
        <title>Example Chart</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <Chart
          type="line"
          width={350}
          height={200}
          options={{
            devicePixelRatio: 1,
            scales: { yAxes: [{ ticks: { beginAtZero: true } }] },
          }}
          data={{
            labels: [...new Array(7)].map((_, index) => `Dia ${index * 5 || 1}`),
            datasets: [
              {
                label: "Toca",
                // data: [12, 5, 0, 16, 3, 18, 15],
                data: tocaPoints,
                borderColor: "rgb(25, 234, 233)",
                backgroundColor: transparentize("rgb(25, 234, 233)", 0.5),
                borderWidth: 3,
              },
              {
                label: "Alvilux",
                // data: [0, 5, 10, 15, 30, 25, 30],
                data: alviluxPoints,
                borderColor: ChartColors.Blue,
                backgroundColor: transparentize(ChartColors.Blue, 0.5),
                borderWidth: 3,
              },
            ],
          }}
        />
      </div>
    </>
  )
}
