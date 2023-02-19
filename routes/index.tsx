import { Head } from "$fresh/runtime.ts"
import Counter from "../islands/Counter.tsx"

export default function Home() {
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
              className="block h-[100px] w-full border-1 border-black rounded-sm shadow-md"
            ></a>
            <a href="" className="block h-[75px] w-full border-1 bg-grey mt-2 rounded-sm"></a>
          </div>
          <div className="px-8 pb-16">
            <button className="block w-full rounded-md bg-green h-[50px] text-white">
              Alvilux
            </button>
            <button className="block w-full rounded-md bg-yellow h-[50px] text-white mt-4">
              Toca
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
