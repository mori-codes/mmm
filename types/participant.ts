type Faul = {
  points: number
  date: string
  description?: string
}

export type Participant = {
  _id: string
  name: "Alvilux" | "Toca"
  fauls: Array<Faul>
}
