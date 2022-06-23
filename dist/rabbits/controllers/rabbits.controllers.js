"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listRabbits = exports.getRabbit = void 0;
const rabbits_models_1 = require("../models/rabbits.models");
const getRabbit = (req, res) => {
    try {
        const resp = rabbits_models_1.rabbitsModel.getRabbit(parseInt(req.params.idx));
        res.status(200).send(resp);
    }
    catch (err) {
        res.status(500).send(err);
    }
};
exports.getRabbit = getRabbit;
const listRabbits = (req, res) => {
    try {
        const resp = rabbits_models_1.rabbitsModel.listRabbits();
        res.status(200).send(resp);
    }
    catch (err) {
        res.status(500).send(err);
    }
};
exports.listRabbits = listRabbits;
