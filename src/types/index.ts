import type { Document } from "mongoose";

export interface IForm extends Document {
  name: string;
  description: string;
}