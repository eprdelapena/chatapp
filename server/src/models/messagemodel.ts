import mongoose from "mongoose";

const {Schema, model,models} = mongoose
const MessageSchema = new Schema({

    creator:{
        type: String,
        required:true
    },

    message: {
      type: String,
      required: true,
    },

    roomId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true })

export const messages = models.messages || model("messages", MessageSchema);