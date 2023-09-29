import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ autoCreate: true, _id: true })
export class User {
    @Prop({ required: true, index: true })
    email: string;
    @Prop()
    nick: string;
    @Prop()
    description: string;
    @Prop()
    password: string;
}

export type UserDocument = HydratedDocument<typeof User>;
export const UserSchema = SchemaFactory.createForClass(User);
