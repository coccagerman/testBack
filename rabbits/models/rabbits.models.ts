import { rabbits } from "../data/rabbits.data"

export const rabbitsModel = {
    getRabbit: (idx: number) => rabbits[idx],
    listRabbits: () => rabbits,
}