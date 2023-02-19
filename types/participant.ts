type Faul = {
    points: number,
    date: string,
    description?: string
}

export type Participant = {
    "_id": string,
    name: string,
    fauls: Array<Faul>
}