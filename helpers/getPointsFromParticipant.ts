import { Participant } from "../types/Participant.ts"

const getPointsFromParticipant = (participant: Participant) => {
  return participant.fauls.reduce((acc, faul) => {
    return acc + faul.points
  }, 0)
}

export { getPointsFromParticipant }
