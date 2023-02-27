type Faul = {
  points: number
  date: string
  description?: string
}

export type Participant = {
  _id: string
  name: "Alvilux" | "Toca"
  fullName: string
  currentGirlfriends: number
  sign: string
  fauls: Array<Faul>
}
