import { Handlers, PageProps } from "$fresh/server.ts"
import { getAll } from "../db/participants.ts"
import DataChart from "../islands/DataChart.tsx"
import { Participant } from "../types/participant.ts"

export const handler: Handlers<Array<Participant>> = {
  GET: async (_, ctx) => {
    const participants = await getAll()
    return ctx.render(participants)
  },
}

export default function Graficos({ data }: { data: Participant[] }) {
  const getTocaPoints = () => {
    const tocaPoints: Array<number> = new Array<number>(30).fill(0)
    const tocaParticipant = data.find(p => p.name === "Alvilux")
    if (!tocaParticipant) return tocaPoints

    tocaParticipant.fauls.forEach(faul => {
      const dayNumber = new Date(Number(faul.date)).getDate()
      tocaPoints[dayNumber % 5] += faul.points
    })

    console.log(tocaPoints)
    return tocaPoints
  }

  return (
    <DataChart
      alviluxPoints={getTocaPoints()}
      tocaPoints={[31, 22, 44, 243, 33, 33, 1]}
    />
  )
}
