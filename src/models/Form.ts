import mongoose from "mongoose";
import type { IForm } from "@/types";

const FormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true, unique: true },
});

export default mongoose.model<IForm>("Form", FormSchema);
