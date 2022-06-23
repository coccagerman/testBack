"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rabbits_controllers_1 = require("../controllers/rabbits.controllers");
const router = express_1.default.Router();
router.get('/', rabbits_controllers_1.listRabbits);
router.get('/:idx', rabbits_controllers_1.getRabbit);
exports.default = router;
