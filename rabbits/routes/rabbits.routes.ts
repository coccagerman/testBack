import express from 'express'
import { getRabbit, listRabbits } from '../controllers/rabbits.controllers'

const router = express.Router()

router.get('/', listRabbits)

router.get('/:idx', getRabbit)

export default router