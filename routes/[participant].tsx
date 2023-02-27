import { Handlers, PageProps } from "$fresh/server.ts"
import { Head } from "$fresh/runtime.ts"
import { get } from "../db/participants.ts"
import { Participant } from "../types/participant.ts"
import { Header } from "../components/Header.tsx"
import DataChart from "../islands/DataChart.tsx"
import { getStatisticsFromData } from "../utils/tools.ts"

export const handler: Handlers<Participant> = {
  GET: async (req, ctx) => {
    const url = new URL(req.url)
    const name = url.pathname.slice(1)
    const participant = await get(name)
    if (!participant) {
      return new Response("not found", { status: 404 })
    }
    return ctx.render(participant)
  },
}

const formatter = new Intl.DateTimeFormat("es-ES", { month: "long", day: "numeric" })

const Participant = ({ data }: PageProps<Participant>) => {
  const color = data.name === "Alvilux" ? "text-green" : "text-yellow"
  const { severePercentage, total, worstDay } = getStatisticsFromData(data.fauls)

  return (
    <>
      <Head>
        <title>MMM Official Site</title>
      </Head>
      <div className="mx-auto max-w-screen-sm flex flex-col w-full">
        <Header />
        <div className="p-4 mt-2 w-full max-w-full">
          <div>
            <h3
              className={`text-3xl font-bold bg-clip-text text-transparent inline ${
                data.name === "Alvilux" ? "bg-alvilux" : "bg-toca"
              }`}
            >
              {data.name}
            </h3>
          </div>
          <div className="w-full flex gap-4 items-center text-sm">
            <div>{data.fullName}</div>
            <div>
              <img src="/sign.svg" className="inline" /> {data.sign}
            </div>
            <div>
              <img src="/people.svg" className="inline" /> {data.currentGirlfriends}
            </div>
          </div>

          <div className="flex items-center gap-4 mt-4 text-sm px-2 py-4 shadow-md">
            <p className="text-xl w-[50%] text-center">
              Total de faltas: <span className={`font-bold ${color}`}>{total}</span>
            </p>
            <div>
              <p className="mb-2">
                Porcentaje graves: <span className="font-bold">{severePercentage}%</span>
              </p>
              <p className="mb-2">
                Día con más faltas:{" "}
                <span className="font-bold">
                  {worstDay ? formatter.format(worstDay) : "Desconocido"}
                </span>
              </p>
              <a href="#" className={`underline ${color}`}>
                Ver más estadísticas &#62;
              </a>
            </div>
          </div>
        </div>

        <div className="p-4">
          <p className="mt-4">Historial:</p>
          <div className="flex bg-black text-white font-bold">
            <div className="w-16 text-center">PTS</div>
            <div className="w-28">Fecha</div>
            <div className="flex-grow">Descripción</div>
          </div>
          {data.fauls.map(faul => {
            const date = new Date(Number(faul.date))
            const dateString = formatter.format(date)

            return (
              <div className="flex py-4 items-center border-l border-r border-b border-black text-sm">
                <div className="w-16 text-center flex-shrink-0">+{faul.points}</div>
                <div className="w-28 flex-shrink-0">{dateString}</div>
                {faul.description ? (
                  <div className="flex-grow">{faul.description}</div>
                ) : (
                  <div className="flex-grow text-grey italic">Sin descripcion</div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Participant
