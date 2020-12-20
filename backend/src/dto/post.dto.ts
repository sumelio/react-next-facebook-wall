export enum PostType {
    PUBLIC = 'public',
    FRIENDS = 'friends'
}

export class PostDto {

    constructor( userId: string, text: string, type: PostType ) {
        this._userId = userId
        this._text = text
        this._type = type
    }

    private _userId : string
    private _text : string
    private _type : PostType

    get userId(): string {
        return this._userId;
    }
    set userId(value: string) {
        this._userId = value;
    }
    get text(): string {
        return this._text;
    }
    set text(value: string) {
        this._text = value;
    }
    set type(value: PostType) {
        this._type = value;
    }
    get type(): PostType {
        return this._type;
    }

    toObject: any = () => ({
      userId: this.userId,
      text: this.text,
      type: this.type.toString()
    })
 }
