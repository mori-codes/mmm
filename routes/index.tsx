import { Handlers, PageProps } from "$fresh/server.ts"
import { Head } from "$fresh/runtime.ts"
import { getAll } from "../db/participants.ts"
import { Participant } from "../types/participant.ts"
import { getPointsFromParticipant } from "../helpers/getPointsFromParticipant.ts"
import { Button } from "../components/Button.tsx"
import ModalPrompt from "../islands/ModalPrompt.tsx"

export const handler: Handlers<Array<Participant>> = {
  GET: async (_, ctx) => {
    const participants = await getAll()
    return ctx.render(participants)
  },
}

export default function Home({ data }: PageProps<Array<Participant>>) {
  return (
    <>
      <Head>
        <title>MMM Official Site</title>
      </Head>
      <div className="mx-auto max-w-screen-sm h-screen flex flex-col w-full">
        <header className="bg-black h-[100px] flex flex-col text-center justify-center text-white w-full">
          <h1 className="text-3xl">MMM</h1>
          <h3 className="italic">No insult, ai aefekei</h3>
        </header>
        <div className="flex flex-col justify-between flex-grow">
          <div className="px-2 pt-[100px]">
            <p>Clasificación: </p>
            <a
              href=""
              className="flex items-center justify-center h-[100px] w-full border-1 border-black rounded-sm shadow-md px-4 gap-4"
            >
              <img className="w-[50px] h-[50px]" src="./trophy.svg"></img>
              <span className="flex-grow text-2xl font-semibold">{data[0].name}</span>
              <span>{getPointsFromParticipant(data[0])} pts</span>
            </a>
            <a
              href=""
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
