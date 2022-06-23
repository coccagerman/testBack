"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cats_routes_1 = __importDefault(require("./cats/routes/cats.routes"));
const rabbits_routes_1 = __importDefault(require("./rabbits/routes/rabbits.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 7070;
/* Routes */
app.use('/cats', cats_routes_1.default);
app.use('/rabbits', rabbits_routes_1.default);
app.listen(port, () => console.log(`⚡️[server]: Server is running at https://localhost:${port}`));
