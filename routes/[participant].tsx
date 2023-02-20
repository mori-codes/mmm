import { Handlers, PageProps } from "$fresh/server.ts"
import { Head } from "$fresh/runtime.ts"
import { get } from "../db/participants.ts"
import { Participant } from "../types/participant.ts"
import { Header } from "../components/Header.tsx"

export const handler: Handlers<Participant> = {
  GET: async (req, ctx) => {
    const url = new URL(req.url)
    const name = url.pathname.slice(1)
    const participant = await get(name)
    if (!participant) {
      return new Response("not found", { status: 404 })
    }
    console.log(participant)
    return ctx.render(participant)
  },
}

const formatter = new Intl.DateTimeFormat("es-ES", {month: "long", day: "numeric"})

const Participant = ({ params, data }: PageProps<Participant>) => {
  return (
    <>
      <Head>
        <title>MMM Official Site</title>
      </Head>
      <div className="mx-auto max-w-screen-sm flex flex-col w-full">
        <Header />
        <div className="p-4">
          <p className="mt-8 mb-2 text-xl">Estadísticas para {data.name}:</p>
          <div className="flex items-center justify-center h-60 bg-black w-full">
            <p className="text-white">Se vienen cositas</p>
          </div>
        </div>

        <div className="p-4">
          <p className="mt-8 mb-2 text-xl">Historial:</p>
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
                <div className="w-28 flex-shrink-0">
                  {dateString}
                </div>
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
