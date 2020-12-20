"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostDto = exports.PostType = void 0;
var PostType;
(function (PostType) {
    PostType["PUBLIC"] = "public";
    PostType["FRIENDS"] = "friends";
})(PostType = exports.PostType || (exports.PostType = {}));
class PostDto {
    constructor(userId, text, type) {
        this.toObject = () => ({
            userId: this.userId,
            text: this.text,
            type: this.type.toString()
        });
        this._userId = userId;
        this._text = text;
        this._type = type;
    }
    get userId() {
        return this._userId;
    }
    set userId(value) {
        this._userId = value;
    }
    get text() {
        return this._text;
    }
    set text(value) {
        this._text = value;
    }
    set type(value) {
        this._type = value;
    }
    get type() {
        return this._type;
    }
}
exports.PostDto = PostDto;
//# sourceMappingURL=post.dto.js.map