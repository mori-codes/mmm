import { PageProps } from "$fresh/server.ts"

const Participant = ({ params, data }: PageProps) => {
  return <div>{params.participant}</div>
}
