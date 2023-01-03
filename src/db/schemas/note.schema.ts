import * as mongoose from 'mongoose';

export const NoteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for note"],
    },
    categoryId: {
      type: String,
      required: [true, "Set category for note"],
    },
    content: {
      type: String,
      required: [true, "Set content for note"],
    },
    archived: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);