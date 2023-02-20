import { Handlers, PageProps } from "$fresh/server.ts"
import { Head } from "$fresh/runtime.ts"
import { getAll, updateParticipant } from "../db/participants.ts"
import { Participant } from "../types/participant.ts"
import { getPointsFromParticipant } from "../helpers/getPointsFromParticipant.ts"
import ModalPrompt from "../islands/ModalPrompt.tsx"
import { Header } from "../components/Header.tsx"

export const handler: Handlers<Array<Participant>> = {
  GET: async (_, ctx) => {
    const participants = await getAll()
    return ctx.render(participants)
  },
  POST: async (req, ctx) => {
    const formData = await req.formData()
    const participant = formData.get("participant")
    const points = formData.get("faul")
    const description = formData.get("description")

    if (typeof participant !== "string" || typeof points !== "string") {
      throw new Error("Missing attributes on post request")
    }

    await updateParticipant(participant, Number(points), description?.toString())

    // Redirect on post, so we don't send data again on reload :)
    return new Response(null, {
      status: 302,
      headers: {
        location: "/",
      },
    })
  },
}

export default function Home({ data }: PageProps<Array<Participant>>) {
  return (
    <>
      <Head>
        <title>MMM Official Site</title>
      </Head>
      <div className="mx-auto max-w-screen-sm h-screen flex flex-col w-full">
        <Header />
        <div className="flex flex-col justify-between flex-grow">
          <div className="px-2 pt-[100px]">
            <p>Clasificación: </p>
            <a
              href={`/${data[0].name}`}
              className="flex items-center justify-center h-[100px] w-full border-1 border-black rounded-sm shadow-md px-4 gap-4"
            >
              <img className="w-[50px] h-[50px]" src="./trophy.svg"></img>
              <span className="flex-grow text-2xl font-semibold">{data[0].name}</span>
              <span>{getPointsFromParticipant(data[0])} pts</span>
            </a>
            <a
              href={`/${data[1].name}`}
              className="flex items-center justify-center  h-[75px] w-full border-1 bg-grey mt-2 rounded-sm px-4 gap-4"
            >
              <div className="w-[50px] h-[50px]" src="./trophy.svg"></div>
              <span className="flex-grow font-semibold">{data[1].name}</span>
              <span>{getPointsFromParticipant(data[1])} pts</span>
            </a>
          </div>
          <div className="px-8 pb-16">
            <ModalPrompt password={Deno.env.get("PASSWORD") || Math.random().toString()} />
          </div>
        </div>
      </div>
    </>
  )
}
