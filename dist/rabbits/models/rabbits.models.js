"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rabbitsModel = void 0;
const rabbits_data_1 = require("../data/rabbits.data");
exports.rabbitsModel = {
    getRabbit: (idx) => rabbits_data_1.rabbits[idx],
    listRabbits: () => rabbits_data_1.rabbits,
};
