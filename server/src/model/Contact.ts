import { model, Schema } from "mongoose";

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Required"],
    },
    email: {
      type: String,
      required: [true, "Email is Required"],
    },
    phoneNo: {
      type: Number,
      required: [true, "Phone No is Required"],
    },
    address: {
      type: String,
      required: [true, "Address is Required"],
    },
  },
  { timestamps: true }
);

export default model("Contact", contactSchema);
