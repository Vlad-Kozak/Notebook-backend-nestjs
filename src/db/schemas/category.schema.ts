import * as mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for category"],
      unique: true,
    },
    photoURL: {
      type: String,
      required: [true, "Set photo path for category"],
      unique: true,
    },
  },
  { versionKey: false }
);