"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGO_PASSWORD = exports.MONGO_USER = exports.MONGO_HOSTS_PORT = exports.SERVICE_NAME = exports.PORT = void 0;
// api
exports.PORT = Number(process.env.PORT || 8200);
exports.SERVICE_NAME = 'facebook-wall-backend';
// DB
exports.MONGO_HOSTS_PORT = process.env.MONGO_HOSTS_PORT || 'localhost:27017';
exports.MONGO_USER = process.env.MONGO_USER;
exports.MONGO_PASSWORD = process.env.MONGO_PASSWORD;
//# sourceMappingURL=index.js.map