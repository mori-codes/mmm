import { Participant } from "../types/Participant.ts"

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

const getAll: () => Promise<Array<Participant>> = async () => {
  if (!url || !key) {
    return
  }

  const config = {
    method: "POST",
    headers: baseHeaders,
    body: JSON.stringify(baseData),
  }

  const response = await fetch(`${url}/action/find`, config)
  const data = await response.json()

  return data.documents ?? []
}

export { getAll }
