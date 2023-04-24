import { Schema, Document, model } from "mongoose";

// Refer: https://mongoosejs.com/docs/typescript/statics.html

export interface IUser extends Document {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  income: string;
  city: string;
  car: string;
  quote: string;
  phone_price: string;
}

const userDataSchema = new Schema<IUser>({
  id: { type: Number, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true },
  income: { type: String, required: true },
  city: { type: String, required: true },
  car: { type: String, required: true },
  quote: { type: String, required: true },
  phone_price: { type: String, required: true },
});

export const User = model<IUser>("User", userDataSchema);
