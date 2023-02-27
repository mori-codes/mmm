import { getPointsFromParticipant } from "../helpers/getPointsFromParticipant.ts"
import { Participant } from "../types/participant.ts"
import { getFakeAllParticipants, getFakeParticipant } from "./fakeData.ts"

const url = Deno.env.get("MONGO_URL")
const key = Deno.env.get("MONGO_API_KEY")

const baseData = {
  collection: "participants",
  database: "mmm",
  dataSource: "Cluster",
}

const baseHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Request-Headers": "*",
  "api-key": key ?? "",
}

const getAll = async (): Promise<Array<Participant>> => {
  if (!url || !key) {
    return getFakeAllParticipants()
  }

  const config = {
    method: "POST",
    headers: baseHeaders,
    body: JSON.stringify(baseData),
  }

  const response = await fetch(`${url}/action/find`, config)
  const data = await response.json()
  const participants: Array<Participant> = data.documents ?? []

  return participants.sort((a, b) => getPointsFromParticipant(a) - getPointsFromParticipant(b))
}

const get = async (participant: string): Promise<Participant | undefined> => {
  if (!url || !key) {
    return getFakeParticipant(participant)
  }

  const data = {
    ...baseData,
    filter: { name: participant },
  }

  const config = {
    method: "POST",
    headers: baseHeaders,
    body: JSON.stringify(data),
  }

  const response = await fetch(`${url}/action/findOne`, config)
  const { document } = await response.json()
  return document
}

const updateParticipant = async (participant: string, points: number, description?: string) => {
  if (!url || !key) {
    return
  }

  const data = {
    ...baseData,
    filter: { name: participant },
    update: {
      $push: {
        fauls: {
          $each: [
            {
              points,
              description,
              date: Date.now().toString(),
            },
          ],
        },
      },
    },
  }

  const config = {
    method: "POST",
    headers: baseHeaders,
    body: JSON.stringify(data),
  }

  await fetch(`${url}/action/updateOne`, config)
}

export { getAll, get, updateParticipant }
