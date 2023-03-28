import { Participant } from "../types/participant.ts"

const fakeParticipants: Array<Participant> = [
  {
    _id: "63f12c209bf7a8064c2fc552",
    name: "Toca",
    fauls: [
      { points: 5, description: "Un comisqueo no? Test", date: "1676831791829" },
      { points: 5, description: "Calvo", date: "1676831992294" },
      { points: 5, description: "Toca está viendo el Málaga ", date: "1676926091379" },
      { points: 5, description: "Toca esta celoso ", date: "1677417812757" },
    ],
    currentGirlfriends: 0,
    fullName: "Álvaro N.G.",
    sign: "Capricornio",
  },
  {
    _id: "63f12c9c9bf7a8064c2fc554",
    name: "Alvilux",
    fauls: [
      { points: 52, description: "Funciona o no", date: "1676826525411" },
      { points: 3, description: "Lavamatic", date: "1676831978172" },
      {
        points: 3,
        description: "Si me vuelvo loco y le pongo aqui a alvilu un pedazo de text que pasa",
        date: "1676924813139",
      },
      { points: 5, description: "", date: "1676925006372" },
      { points: 3, description: "21 de febrero? PeepoWide", date: "1676980998820" },
      { points: 5, description: "PG es peste", date: "1676989114964" },
      { points: 5, description: "Ghijk", date: "1677354017265" },
      { points: 5, description: "Morillo warro 😶‍🌫️", date: "1677495537000" },
    ],
    currentGirlfriends: 0,
    fullName: "Álvaro L.L.",
    sign: "Escorpio",
  },
]

const getFakeAllParticipants = () => fakeParticipants
const getFakeParticipant = (name: string) => {
    if(name !== "Alvilux" && name !== "Toca") {
        return undefined
    }

    return name === "Alvilux" ? fakeParticipants[1] : fakeParticipants[0]
}

export { getFakeAllParticipants, getFakeParticipant }
