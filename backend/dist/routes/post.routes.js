"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const config_1 = require("../config");
const controller = __importStar(require("../controllers/post.controller"));
const routes = (app) => {
    app.post(`/v1/${config_1.SERVICE_NAME}/api/post`, controller.createPost);
    app.get(`/v1/${config_1.SERVICE_NAME}/api/post/:id`, controller.getPost);
    app.get(`/v1/${config_1.SERVICE_NAME}/api/post/user/:userId`, controller.getAllPostByUserId);
    app.patch(`/v1/${config_1.SERVICE_NAME}/api/post/:id`, controller.updatePost);
    app.delete(`/v1/${config_1.SERVICE_NAME}/api/post/:id`, controller.deletePost);
};
exports.routes = routes;
//# sourceMappingURL=post.routes.js.map