import config from '../util/config';
import mongoose, { Document, Model, model, Schema } from 'mongoose';
import { ContactDetailsInterface } from './contact_details';
import { IGeneric } from '../util/model/generic';

export interface UserNameInterface {
    first: string, middle: string, last: string
}

export interface UserInterface extends IGeneric,Document {
    name: UserNameInterface,
    username: string,
    password: string,
    contact_details: ContactDetailsInterface,
    isVerified: boolean,
    role: String,
};

const schema: Schema = new Schema({
    name: {
        type: {
            first: { type: String, required: true },
            middle: { type: String, required: false },
            last: { type: String, required: true }
        },
        required: true,
        unique: true
    },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contact_details: { type: mongoose.Schema.Types.ObjectId, required: true },
    isVerified: {
        type: Boolean,
        required: true,
        default: config.default_user_verification_state,
    },
    role: { type: mongoose.Schema.Types.ObjectId, ref: "Role", required: true, default: config.default_user_role },
})
const User: Model<UserInterface> = model('User', schema);
export default User;