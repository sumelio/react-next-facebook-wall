"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("./utils/db"));
const express_1 = require("./config/express");
const config_1 = require("./config");
const post_routes_1 = require("./routes/post.routes");
function startup() {
    return __awaiter(this, void 0, void 0, function* () {
        yield db_1.default.open({});
        express_1.app.listen(config_1.PORT, () => {
            console.log(`Server is running on port ${config_1.PORT}.`);
        });
        express_1.app.get("/", (req, res) => {
            res.json({ message: `Welcome to facebook wall v.1.0 application. Time:  ${new Date()}` });
        });
        post_routes_1.routes(express_1.app);
    });
}
startup();
//# sourceMappingURL=index.js.map