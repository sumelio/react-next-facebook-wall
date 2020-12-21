"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const mongoose_1 = require("mongoose");
const schemaConfig = {
    collection: 'Post',
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
};
const PostSchema = new mongoose_1.Schema({
    text: { type: String },
    type: { type: String },
    userId: { type: String }
}, schemaConfig);
exports.Post = mongoose_1.model('Post', PostSchema);
exports.default = exports.Post;
//# sourceMappingURL=post.model.js.map