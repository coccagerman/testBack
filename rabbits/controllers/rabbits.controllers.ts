import { Request, Response } from 'express'
import { rabbitsModel } from '../models/rabbits.models'

export const getRabbit = (req: Request, res: Response) => {
    try {
        const resp = rabbitsModel.getRabbit(parseInt(req.params.idx))
        res.status(200).send(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const listRabbits = (req: Request, res: Response) => {
    try {
        const resp = rabbitsModel.listRabbits()
        res.status(200).send(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}